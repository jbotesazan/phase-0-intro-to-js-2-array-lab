const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    return cats.push("Ralph")
}

destructivelyPrependCat = () => cats.unshift('Bob');

function destructivelyRemoveLastCat() {
    return cats.splice(-1)
}

function destructivelyRemoveFirstCat() {
    return cats.splice(0,1)
}

function appendCat() {
    return [...cats, "Broom"]
}

function prependCat() {
    return ['Arnold', ...cats]
}

function removeLastCat() {
    return cats.slice(0,-1)
}

function removeFirstCat() {
    return cats.slice(1,3)
}