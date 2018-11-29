package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/xyingsoft/golang-vue/models"
	u "github.com/xyingsoft/golang-vue/utils"
)

var CreateCategory = func(w http.ResponseWriter, r *http.Request) {
	category := &models.Category{}

	err := json.NewDecoder(r.Body).Decode(category)
	if err != nil {
		u.Respond(w, u.Message(false, "Bad Request"), http.StatusBadRequest)
		return
	}

	resp := category.Create()

	u.Respond(w, resp, http.StatusOK)
}

var UpdateCategory = func(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])

	if err != nil {
		u.Respond(w, u.Message(false, "Bad Request"), http.StatusBadRequest)
		return
	}

	decorder := json.NewDecoder(r.Body)
	categoryParams := &models.CategoryParams{}
	decorder.Decode(&categoryParams)

	category := models.GetCategory(uint(id))
	category.Name = categoryParams.Name
	category.Description = categoryParams.Description
	category.Update()

	resp := u.Message(true, "success")
	resp["data"] = category
	u.Respond(w, resp, http.StatusOK)
}

var GetCategories = func(w http.ResponseWriter, r *http.Request) {
	data := models.GetCategories()
	resp := u.Message(true, "success")
	resp["data"] = data

	u.Respond(w, resp, http.StatusOK)
}

var GetCategoriesFor = func(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		u.Respond(w, u.Message(false, "Bad Request"), http.StatusBadRequest)
		return
	}

	data := models.GetCategoriesFor(uint(id))
	resp := u.Message(true, "success")
	resp["data"] = data

	u.Respond(w, resp, http.StatusOK)
}

var GetCategory = func(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		u.Respond(w, u.Message(false, "Bad Request"), http.StatusBadRequest)
		return
	}

	data := models.GetCategory(uint(id))
	resp := u.Message(true, "success")
	resp["data"] = data

	u.Respond(w, resp, http.StatusOK)
}

var GetProductsFor = func(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		u.Respond(w, u.Message(false, "Bad Request"), http.StatusBadRequest)
		return
	}

	data := models.GetProductsFor(uint(id))
	resp := u.Message(true, "success")
	resp["data"] = data

	u.Respond(w, resp, http.StatusOK)
}
