package middleware

import (
	"context"
	"fmt"
	"net/http"
	"strings"

	"github.com/xyingsoft/golang-vue/models"
	u "github.com/xyingsoft/golang-vue/utils"
)

var TokenAuthentication = func(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		response := make(map[string]interface{})
		tokenHeader := r.Header.Get("Authorization")
		if tokenHeader == "" {
			response = u.Message(false, "Missing auth token")
			w.Header().Add("Content-Type", "application/json")
			u.Respond(w, response, http.StatusForbidden)
			return
		}

		splitted := strings.Split(tokenHeader, " ")
		if len(splitted) != 2 {
			response = u.Message(false, "Invalid/Malformed auth token")
			w.Header().Add("Content-Type", "application/json")
			u.Respond(w, response, http.StatusForbidden)
			return
		}

		tokenPart := splitted[1]
		account := models.GetUserByToken(tokenPart)
		if account == nil {
			response = u.Message(false, "Invalid/Malformed auth token")
			w.Header().Add("Content-Type", "application/json")
			u.Respond(w, response, http.StatusForbidden)
			return
		}

		fmt.Sprintf("User %", account.Email)
		ctx := context.WithValue(r.Context(), "user", account.ID)
		r = r.WithContext(ctx)
		next.ServeHTTP(w, r)
	}
}
