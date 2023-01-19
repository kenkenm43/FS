function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

printId(101)
printId("101")
// error the value is not valid for every member of the union
//printId({id: 101}) 