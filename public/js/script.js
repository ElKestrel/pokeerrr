const genre = ["Coeur", "Trefle", "Pique", "Carreaux"];
const numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
carte = [];

function deck(){
    carte = [];
    inc = 0
    for (i = 0; i < 13; i++){
        for (x = 0; x < 4 ; x++){
            carte[inc] = numero[i] + genre[x];
            inc++    
        }
    }   
    console.log(carte)
}
deck()

var shuffled = carte   
.map((value) => ({ value, sort: Math.random() }))   
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value); 
console.log(shuffled);

let joueur1 = [];
let joueur2 = [];
let joueur3 = [];
let joueur4 = [];
let joueur5 = [];

joueur1.push(shuffled[0]);
joueur2.push(shuffled[1]);
joueur3.push(shuffled[2]);
joueur4.push(shuffled[3]);
joueur5.push(shuffled[4]);

joueur1.push(shuffled[5]);
joueur2.push(shuffled[6]);
joueur3.push(shuffled[7]);
joueur4.push(shuffled[8]);
joueur5.push(shuffled[9]);

let brule = [];
brule.push(shuffled[10])

let table = [];
table.push(shuffled[11])
table.push(shuffled[12])
table.push(shuffled[13])

let brule2 = [];
brule2.push(shuffled[14])


function lancer(){
    document.querySelector(".a").src = "public/image/" + joueur1[0] + ".png"
    document.querySelector(".b").src = "public/image/" + joueur1[1] + ".png"
}

function lancer2(){
    document.querySelector(".c").src = "public/image/" + joueur2[0] + ".png"
    document.querySelector(".d").src = "public/image/" + joueur2[1] + ".png"
}
function lancer3(){
    document.querySelector(".e").src = "public/image/" + joueur3[0] + ".png"
    document.querySelector(".f").src = "public/image/" + joueur3[1] + ".png"
}
function lancer4(){
    document.querySelector(".g").src = "public/image/" + joueur4[0] + ".png"
    document.querySelector(".h").src = "public/image/" + joueur4[1] + ".png"
}
function lancer5(){
    document.querySelector(".i").src = "public/image/" + joueur5[0] + ".png"
    document.querySelector(".j").src = "public/image/" + joueur5[1] + ".png"
}
function table1(){
    document.querySelector(".cartetable1").src = "public/image/" + shuffled[11] + ".png"
}
function table2(){
    document.querySelector(".cartetable2").src = "public/image/" + shuffled[12] + ".png"
}
function table3(){
    document.querySelector(".cartetable3").src = "public/image/" + shuffled[13] + ".png"
}
function bruler(){
    document.querySelector(".bruler").src = "public/image/" + shuffled[10] + ".png"
}
function bruler2(){
    document.querySelector(".bruler2").src = "public/image/" + shuffled[14] + ".png"
}
function table4(){
    document.querySelector(".cartetable4").src = "public/image/" + shuffled[15] + ".png"
}
function bruler3(){
    document.querySelector(".bruler3").src = "public/image/" + shuffled[16] + ".png"
}
function table5(){
    document.querySelector(".cartetable5").src = "public/image/" + shuffled[17] + ".png"
}