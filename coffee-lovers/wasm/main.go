package main

import (
	"syscall/js"
)

var page string

func myGolangFunction() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return args[0].Int() + args[1].Int()
	})
}

func setPage() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		page = args[0].String()
		return nil
	})
}

func getPage() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return page
	})
}

func main() {
	ch := make(chan struct{}, 0)
	js.Global().Set("myGolangFunction", myGolangFunction())
	js.Global().Set("setPage", setPage())
	js.Global().Set("getPage", getPage())
	<-ch
}
