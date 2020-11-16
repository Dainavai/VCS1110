// alert("As esu JS faile");

console.log("as esu konsoleje");
document.write("as esu dokumente");
var kintamojoPavadinimas = "kazkoks tekstas";
console.log(kintamojoPavadinimas);

var masyvas = ["Vardas", 23, true, null];
masyvas.pop();
// Klausimas: kaip pasalinti konkretu elementa

// masyvas.push("Nauja reiksme");

// masyvas.shift();

masyvas.shift("dar viena");

// function toCelsius(fahrenheit) {
  //  return (5/9 * (fahrenheit-32);
//}
// c = toCelsius(77);

console.log(masyvas);

//console.log(masyvas.length);

var profile = {
    firstName: "Kazimiras",
    lastName: "Jarmolovskis",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    changeName: function(newFirstName) {
        this.firstName = newFirstName;

    }
}
profile.changeName("Tadas");
console.log(profile.fullName());

var paragraph = document.createElement("p");
paragraph.innerText = "Tekstas idetas i elementa su JS."

//console.log(paragraph)

document.body.append(paragraph);

// var outro = document.querySelectorAll("div.outro p");

// var outro = document.querySelector("div.outro p");


//console.log(outro);
// outro.style.color = "red";

// var button1 = document.querySelector("#change-p-color");
// button1.addEventListener("click", function() {
// var outro = document.querySelector("div.outro p")
//outro.style.color = "red";

var button1 = document.querySelector("#change-p-color");

button1.addEventListener("click", function() {
    var outro = document.querySelector("div.outro p");

    if (outro.style.color == "red") {
        outro.style.color = "black";
    } else {
        outro.style.color = "red";
    }
});

document.addEventListener 

