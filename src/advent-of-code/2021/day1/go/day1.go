package main

import (
	"fmt"
	"os"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func getInputs() (string, string) {
	data, err := os.ReadFile("../input.txt")
	check(err)

	test, errTest := os.ReadFile("../test.txt")
	check(errTest)

	return string(data), string(test)
}

func main() {
	_, test := getInputs()

	fmt.Print(test)
}
