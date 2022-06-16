// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(){
    const cats = ["Milo", "Otis", "Garfield"];
    return [...cats, "Broom"];
}

function prependCat(){
    return ["Arnold", ...cats];
}

function removeLastCat(){
    const cats = ["Milo", "Otis", "Garfield"];
    return cats.slice(0, cats.length -1);
}

function removeFirstCat(){
    const cats = ["Milo", "Otis", "Garfield"];
    return cats.slice(1);
}
