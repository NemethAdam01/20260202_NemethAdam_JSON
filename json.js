/*1. Hozz létre egy üres JSON objektumot. 
2. Adj hozzá kulcs-érték párokat a JSON objektumhoz. 
3. Konvertáld a JSON objektumot szöveges formátumba (JSON.stringify). 
4. Olvass be egy JSON szöveget és alakítsd át objektummá (JSON.parse). 
5. Módosítsd a létrehozott objektumot, majd frissítsd a JSON szöveget. 
6. Távolíts el egy kulcs-érték párt a JSON objektumból. 
7. Ellenőrizd, hogy egy adott kulcs létezik-e a JSON objektumban. 
8. Hozz létre egy JSON tömböt és adj hozzá elemeket. 
9. Szűrd ki a JSON tömböt egy adott feltétel alapján. 
10. Rendezd növekvő sorrendbe a JSON tömb elemeit egy kulcs alapján. 
11. Keresd meg a JSON tömb legnagyobb elemét egy adott kulcs alapján. 
12. Számolj össze egy JSON tömbben található számokat. 
13. Cseréld ki egy JSON objektum értékét egy másik értékre. 
14. Másold le egy JSON objektumot és módosítsd az másolt objektumot anélkül, hogy az
eredeti módosulna. 
15. Tárold a JSON objektumot egy fájlban és olvasd be onnan*/

//1
const UresObj = {}

//2
UresObj.nev = "John"
UresObj.kor = 20

//3
const jsonSzoveg = JSON.stringify(UresObj)

//4
const jsonString = '{"nev": "Aladar","kor": "20"}' 
const jsonatvalt = JSON.parse(jsonString)

//5
jsonatvalt.kor = 25
const frissitettjson = JSON.stringify(jsonatvalt)
console.log(jsonatvalt)

//6
delete jsonatvalt.kor
console.log(jsonatvalt)

//7
console.log(jsonatvalt.kor)

//8
const jsonTomb = []
jsonTomb.push({nev: "Csaba", kor: 22})
jsonTomb.push({nev: "David", kor: 30})
jsonTomb.push({nev: "Cecilia", kor: 25})

//9
const szures = jsonTomb.filter(elem => elem.kor > 24)

//10
const rendezes = jsonTomb.sort((a, b) => a.kor - b.kor)
console.log(rendezes)

//11
const legnagyobb = rendezes[rendezes.length - 1].nev
console.log(legnagyobb)

//12
let osszegzes = 0
for (let i = 0; i < jsonTomb.length; i++)
{
    osszegzes += jsonTomb[i].kor
}
console.log(osszegzes)

//13
jsonatvalt.nev = "Bela"
console.log(jsonatvalt)

//14
const masolat = {jsonatvalt}
masolat.nev = "Gabor"
console.log(jsonatvalt)
console.log(masolat)

//15
var fs = require('fs');
const tombSzoveg = []
for (let i = 0; i < jsonTomb.length; i++) {
    let sz = JSON.stringify(jsonTomb[i])
    tombSzoveg.push(sz)   
}
fs.writeFile("test.txt", tombSzoveg)
fs.readFile("test.txt", 'utf8')
