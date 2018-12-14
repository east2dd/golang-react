package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/xyingsoft/golang-react/routes"
)

func main() {
	router := mux.NewRouter()

	routes.Mount(router)

	port := os.Getenv("APP_PORT")
	if len(port) == 0 {
		port = "3000"
	}

	fmt.Println("Listening: " + port)
	log.Fatal(http.ListenAndServe(":" + port, router))
}
