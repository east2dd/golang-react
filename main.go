package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/xyingsoft/golang-vue/controllers"
	"github.com/xyingsoft/golang-vue/middleware"
)

func IndexHandler(entrypoint string) func(w http.ResponseWriter, r *http.Request) {
	fn := func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, entrypoint)
	}

	return http.HandlerFunc(fn)
}

func main() {
	router := mux.NewRouter()

	// Handle all preflight request for CORS
	router.Methods("OPTIONS").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "*")
		w.Header().Set("Access-Control-Allow-Headers", "*")
		w.WriteHeader(http.StatusNoContent)
		return
	})

	// API route
	router.HandleFunc("/api/user/new", controllers.CreateAccount).Methods("POST")
	router.HandleFunc("/api/user/login", controllers.Authenticate).Methods("POST")
	router.HandleFunc("/api/user/me", middleware.TokenAuthentication(controllers.CheckAuth)).Methods("GET")

	router.HandleFunc("/api/categories", controllers.GetCategories).Methods("GET")
	router.HandleFunc("/api/categories/{id}", controllers.GetCategory).Methods("GET")
	router.HandleFunc("/api/categories/{id}/products", controllers.GetProductsFor).Methods("GET")

	router.HandleFunc("/api/products", controllers.GetProducts).Methods("GET")
	router.HandleFunc("/api/products/{id}", controllers.GetProduct).Methods("GET")
	router.HandleFunc("/api/products", middleware.TokenAuthentication(controllers.CreateProduct)).Methods("POST")
	router.HandleFunc("/api/products/{id}", middleware.TokenAuthentication(controllers.UpdateProduct)).Methods("PUT")

	// static := os.Getenv("STATIC_PATH")
	// entry := fmt.Sprintf("%s/index.html", static)
	// router.PathPrefix("/dist").Handler(http.FileServer(http.Dir(static)))
	// router.PathPrefix("/").HandlerFunc(IndexHandler(entry))

	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "3000"
	}
	fmt.Println("Listening: " + port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
