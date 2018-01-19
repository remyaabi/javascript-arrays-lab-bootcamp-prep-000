const app = "I don't do much."
 kittens = ['Milo', 'Otis', 'Garfield'];
 var name="ralph"
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
<<<<<<< HEAD
}

function prependKitten(name){
  var kitten2=[name,...kittens]
  return kitten2
}
function appendKitten(name){
  var kitten2=[...kittens,name]
  return kitten2
}
function removeLastKitten(){
  var kitten2= kittens.slice(0,kittens.length-1)
  return kitten2
}
function removeFirstKitten(){
  var kitten2= kittens.slice(1,kittens.length)
  return kitten2
}
=======
}
>>>>>>> e6a7f959b7bb887517ab74697360b40d14d5c121
