package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/gorilla/mux"
	"github.com/xyingsoft/golang-vue/controllers"
	"github.com/xyingsoft/golang-vue/middleware"
)

func neuter(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if len(r.URL.Path) > 1 && strings.HasSuffix(r.URL.Path, "/") {
			http.NotFound(w, r)
			return
		}

		next.ServeHTTP(w, r)
	})
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

	fileServer := http.FileServer(http.Dir("./client/build"))
	router.PathPrefix("/").Handler(neuter(fileServer))

	port := os.Getenv("APP_PORT")
	if port == "" {
		port = "3000"
	}

	fmt.Println("Listening: " + port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
