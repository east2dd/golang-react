package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/xyingsoft/golang-vue/models"
	u "github.com/xyingsoft/golang-vue/utils"
)

var CreateAccount = func(w http.ResponseWriter, r *http.Request) {
	account := &models.Account{}
	err := json.NewDecoder(r.Body).Decode(account)
	if err != nil {
		u.Respond(w, u.Message(false, "Bad Request"), http.StatusBadRequest)
		return
	}

	resp := account.Create()

	u.Respond(w, resp, http.StatusOK)
}

var Authenticate = func(w http.ResponseWriter, r *http.Request) {
	account := &models.Account{}
	err := json.NewDecoder(r.Body).Decode(account)
	if err != nil {
		u.Respond(w, u.Message(false, "Bad Request"), http.StatusBadRequest)
		return
	}

	resp := models.Login(account.Email, account.Password)

	u.Respond(w, resp, http.StatusOK)
}

var CheckAuth = func(w http.ResponseWriter, r *http.Request) {
	u.Respond(w, u.Message(true, "Success"), http.StatusOK)
}
