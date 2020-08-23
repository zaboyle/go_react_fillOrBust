package main

import (
    "fmt"
    "encoding/json"
    "net/http"
)

func newGame(w http.ResponseWriter, r *http.Request) {
    fmt.Println("handling /api/newGame request...")
    playerScores := make(map[string]int)
    playerScores["zach"] = 6969

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(playerScores)
}

func main() {
    fmt.Println("api running on port 8080...")

    http.HandleFunc("/api/newGame", newGame)
    http.ListenAndServe(":8080", nil)
}