package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/xyingsoft/golang-vue/models"
	u "github.com/xyingsoft/golang-vue/utils"
)

var GetProduct = func(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		u.Respond(w, u.Message(false, "Bad Request"), http.StatusBadRequest)
		return
	}

	data := models.GetProduct(uint(id))
	resp := u.Message(true, "success")
	resp["data"] = data
	u.Respond(w, resp, http.StatusOK)
}

var GetProducts = func(w http.ResponseWriter, r *http.Request) {
	data := models.GetProducts()
	resp := u.Message(true, "success")
	resp["data"] = data
	u.Respond(w, resp, http.StatusOK)
}

var CreateProduct = func(w http.ResponseWriter, r *http.Request) {
	productParams := &models.ProductParams{}

	err := json.NewDecoder(r.Body).Decode(productParams)
	if err != nil {
		u.Respond(w, u.Message(false, "Bad Request"), http.StatusBadRequest)
		return
	}

	product := &models.Product{}
	product.Name = productParams.Name
	product.Description = productParams.Description
	product.Price = productParams.Price
	resp := product.Create()

	u.Respond(w, resp, http.StatusOK)
}

var UpdateProduct = func(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		u.Respond(w, u.Message(false, "Bad Request"), http.StatusBadRequest)
		return
	}

	decorder := json.NewDecoder(r.Body)
	productParams := &models.ProductParams{}
	decorder.Decode(&productParams)

	product := models.GetProduct(uint(id))
	product.Name = productParams.Name
	product.Description = productParams.Description
	product.Price = productParams.Price
	product.Update()

	resp := u.Message(true, "success")
	resp["data"] = product
	u.Respond(w, resp, http.StatusOK)
}
