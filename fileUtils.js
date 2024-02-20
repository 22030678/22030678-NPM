import fs from "fs"

export function readJson (JsonPath){
try{
    const jsonData = fs.readFileSync(JsonPath)
    const data = JSON.parse(jsonData)
    return data
    }
    catch(error){
        console.log (error)
    }
}
//console.log(readJson("books.json"))

export function updateJson (JsonPath, newData){
    try{
        const jsonData = fs.readFileSync(JsonPath)
        const data = JSON.stringify(newData)
        const newJson = fs.writeFileSync(JsonPath, data)
        return newJson
        }
        catch(error){
            console.log (error)
        }
    }


//console.log(updateJson([],"books-test.json"))

// console.log ("Hola Lore")
// console.log (process.argv)

// const sum = (num1, num2) => console.log(parseInt(num1)+parseInt(num2))
// const substract = (num1, num2) => console.log(parseInt(num1)-parseInt(num2))
// const newArgs = process.argv.slice(2) // te ayuda a leer lo que le pases pero como las dos primeras cosas no funcionan entonces por eso te pasas hasta la posicion 2
// console.log(newArgs)
// const num1 = newArgs[1]
// const num2 = newArgs[2]
// if (newArgs[0] === "sum"){
//     sum(num1, num2)}
    
// if (newArgs[0] === "substract"){
//     substract(num1, num2)}

