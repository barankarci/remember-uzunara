const userObject = {
    "baran": {
        name: "baran",
        surname: "karcı",
        age: 19
    },
    "mustafa": {
        name: "musti",
        surname: "tokmak",
        age: 33
    }
}

delete userObject.baran.age

for(let u in userObject) {
    console.log(userObject[u].name);
}
