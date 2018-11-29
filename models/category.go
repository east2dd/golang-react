package models

import (
	u "github.com/xyingsoft/golang-vue/utils"
)

type CategoryParams struct {
	Name 						string
	Description     string
}

type Category struct {
	ID       				uint
	Name     				string
	Description     string
	Products []*Product
}

func (category *Category) Validate() (map[string]interface{}, bool) {
	if category.Name == "" {
		return u.Message(false, "should be on the payload"), false
	}

	return u.Message(true, "success"), true
}

func (category *Category) Create() map[string]interface{} {
	if resp, ok := category.Validate(); !ok {
		return resp
	}

	res, err := db.Exec(`INSERT INTO categories(name, description) VALUES( ?, ? )`, category.Name, category.Description)
	checkErr(err)

	if err == nil {
		id, err := res.LastInsertId()
		checkErr(err)

		category.ID = uint(id)
	}

	if category.ID <= 0 {
		return u.Message(false, "Failed to create")
	}

	resp := u.Message(true, "success")
	resp["data"] = category
	return resp
}

func (category *Category) Update() map[string]interface{} {
	res, err := db.Exec(`UPDATE categories SET name = ?, description = ? WHERE id = ?`, category.Name, category.Description, category.ID)
	checkErr(err)

	var count int64
	count, err = res.RowsAffected()
	checkErr(err)

	if count > 0 {
		resp := u.Message(true, "success")
		resp["data"] = category
		return resp
	} else {
		resp := u.Message(false, "failed")
		return resp
	}
}
