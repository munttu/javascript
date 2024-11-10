
const name = prompt('input name:'); 
const num = Math.floor(Math.random() * 4) + 1;
console.log(num);

if (num === 1){
console.log(name + ", you are ravenclaw");
}

else if (num === 2){
    console.log(name + ", you are hufflepuff");
}

else if (num === 3){
    console.log(name + ", you are gryffindor");
}
else if (num === 4){
    console.log(name + ", you are slytherin");
}
