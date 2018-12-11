package models

import (
	"database/sql"
)

func GetProduct(id uint) *Product {
	product := &Product{}

	rows, err := db.Query(`SELECT id, name, description, price FROM products WHERE id = ?`, id)
	checkErr(err)

	var price sql.NullInt64
	for rows.Next() {
		err = rows.Scan(&product.ID, &product.Name, &product.Description, &price)
		checkErr(err)

		product.Price = price.Int64
		product.Categories = GetCategoriesFor(product.ID)
	}

	return product
}

func GetProducts() []*Product {
	products := make([]*Product, 0)

	rows, err := db.Query(`SELECT id, name, description, price FROM products`)
	checkErr(err)

	for rows.Next() {
		var temp = &Product{}
		var price sql.NullInt64
		err = rows.Scan(&temp.ID, &temp.Name, &temp.Description, &price)
		checkErr(err)

		temp.Price = price.Int64
		temp.Categories = GetCategoriesFor(temp.ID)
		products = append(products, temp)
	}

	return products
}

func GetCategoriesFor(product uint) []*Category {
	categories := make([]*Category, 0)
	rows, err := db.Query(`SELECT categories.id, categories.name, categories.description 
                          FROM categories 
		                      LEFT JOIN categories_products ON (categories.id = categories_products.category_id)
                      		WHERE categories_products.category_id = ? `, product)
	checkErr(err)

	for rows.Next() {
		var temp = &Category{}
		err = rows.Scan(&temp.ID, &temp.Name, &temp.Description)
		checkErr(err)

		categories = append(categories, temp)
	}

	return categories
}
