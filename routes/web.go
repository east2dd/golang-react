package routes

import (
	"net/http"
	"strings"

	"github.com/gorilla/mux"
	"github.com/xyingsoft/golang-react/controllers"
	"github.com/xyingsoft/golang-react/middleware"
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

var Mount = func(router *mux.Router) {
	// Handle all preflight request for CORS
	router.Methods("OPTIONS").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "*")
		w.Header().Set("Access-Control-Allow-Headers", "*")
		w.WriteHeader(http.StatusNoContent)
		return
	})

	// API routes
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

	// serve static files
	fileServer := http.FileServer(http.Dir("./client/build"))
	router.PathPrefix("/").Handler(neuter(fileServer))
}
