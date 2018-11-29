package models

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/subosito/gotenv"
)

var db *sql.DB //database

func init() {
	e := gotenv.Load() //Load .env file
	if e != nil {
		fmt.Print(e)
	}

	dbURI := ""
	if os.Getenv("DB_PASSWORD") == "" {
		dbURI = fmt.Sprintf("%s@tcp(%s:%s)/%s?parseTime=true",
			os.Getenv("DB_USERNAME"),
			os.Getenv("DB_HOST"),
			os.Getenv("DB_PORT"),
			os.Getenv("DB_DATABASE"))
	} else {
		dbURI = fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true",
			os.Getenv("DB_USERNAME"),
			os.Getenv("DB_PASSWORD"),
			os.Getenv("DB_HOST"),
			os.Getenv("DB_PORT"),
			os.Getenv("DB_DATABASE"))
	}

	conn, err := sql.Open("mysql", dbURI)
	if err != nil {
		fmt.Print(err)
	}

	db = conn
}

func GetDB() *sql.DB {
	return db
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
