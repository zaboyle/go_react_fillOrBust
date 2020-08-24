package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
)

func randomString(n int) string {
	var charset = []byte("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")

	s := make([]byte, n)
	for i := range s {
		s[i] = charset[rand.Intn(len(charset))]
	}
	return string(s)
}

func newGame(w http.ResponseWriter, r *http.Request) {
	fmt.Println("handling /api/newgame request...")
	session := randomString(4)

	w.Header().Set("Content-Type", "application/json")

	// allow frontend to make a cross origin request (cors)
	// since this is running on a separate port
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	json.NewEncoder(w).Encode(session)
}

func main() {
	fmt.Println("api running on port 8080...")

	http.HandleFunc("/api/newgame", newGame)
	http.ListenAndServe(":8080", nil)
}
