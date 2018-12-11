package models

import (
	"database/sql"
)

func GetCategory(id uint) *Category {
	category := &Category{}

	rows, err := db.Query(`SELECT id, name, description FROM categories WHERE id = ?`, id)
	checkErr(err)

	for rows.Next() {
		err = rows.Scan(&category.ID, &category.Name, &category.Description)
		checkErr(err)
	}

	return category
}

func GetCategories() []*Category {
	categories := make([]*Category, 0)

	rows, err := db.Query(`SELECT id, name, description FROM categories`)
	checkErr(err)

	for rows.Next() {
		var temp = &Category{}
		err = rows.Scan(&temp.ID, &temp.Name, &temp.Description)

		categories = append(categories, temp)
	}
	checkErr(err)

	return categories
}

func GetProductsFor(category uint) []*Product {
	products := make([]*Product, 0)

	rows, err := db.Query(`SELECT products.id, products.name, products.description, products.price 
                          FROM products 
													LEFT JOIN categories_products ON (products.id = categories_products.product_id)
													WHERE categories_products.category_id = ? `, category)
	checkErr(err)

	for rows.Next() {
		var temp = &Product{}
		var price sql.NullInt64
		err = rows.Scan(&temp.ID, &temp.Name, &temp.Description, &price)
		checkErr(err)

		temp.Price = price.Int64
		products = append(products, temp)
	}

	return products
}
