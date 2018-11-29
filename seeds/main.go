package main

import (
	"github.com/xyingsoft/golang-vue/models"
)

func main() {
	db := models.GetDB()

	db.Exec(`DROP TABLE IF EXISTS accounts;`)
	db.Exec(`DROP TABLE IF EXISTS categories;`)
	db.Exec(`DROP TABLE IF EXISTS products;`)
	db.Exec(`DROP TABLE IF EXISTS categories_products;`)

	db.Exec(`CREATE TABLE accounts (
								id INT(10) NOT NULL AUTO_INCREMENT,
								email VARCHAR(64) NULL DEFAULT NULL,
								password VARCHAR(255) NULL DEFAULT NULL,
								token VARCHAR(255) NULL DEFAULT NULL,
								PRIMARY KEY (id));`)

	db.Exec(`CREATE TABLE categories (
								id INT(10) NOT NULL AUTO_INCREMENT,
								name VARCHAR(64) NULL DEFAULT NULL,
								description VARCHAR(255) NULL DEFAULT NULL,
								PRIMARY KEY (id));`)

	db.Exec(`CREATE TABLE products (
								id INT(10) NOT NULL AUTO_INCREMENT,
								name VARCHAR(64) NULL DEFAULT NULL,
								description VARCHAR(255) NULL DEFAULT NULL,
								price INT(10) NULL DEFAULT NULL,
								PRIMARY KEY (id));`)

	db.Exec(`CREATE TABLE categories_products (
								id INT(10) NOT NULL AUTO_INCREMENT,
								category_id INT(10) NULL DEFAULT NULL,
								product_id INT(10) NULL DEFAULT NULL,
								PRIMARY KEY (id));`)

	stmtAddCategory, err := db.Prepare("INSERT categories SET id=?, name=?, description=?")
	if err == nil {
		stmtAddCategory.Exec(1, "category 1", "description goes right here")
		stmtAddCategory.Exec(2, "category 2", "description goes right here")
		stmtAddCategory.Exec(3, "category 3", "description goes right here")
	}

	stmtAddProduct, err := db.Prepare("INSERT products SET id=?, name=?, description=?")
	if err == nil {
		stmtAddProduct.Exec(1, "product 1", "description goes right here")
		stmtAddProduct.Exec(2, "product 2", "description goes right here")
		stmtAddProduct.Exec(3, "product 3", "description goes right here")
	}

	stmtAddCategoriesProducts, err := db.Prepare("INSERT categories_products SET category_id=?, product_id=?")
	if err == nil {
		stmtAddCategoriesProducts.Exec(1, 1)
		stmtAddCategoriesProducts.Exec(1, 2)
		stmtAddCategoriesProducts.Exec(1, 3)
		stmtAddCategoriesProducts.Exec(2, 2)
		stmtAddCategoriesProducts.Exec(2, 3)
	}

	db.Close()
}
