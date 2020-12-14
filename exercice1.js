// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

function supCourse(){
    for (let i = 0; i<document.getElementsByClassName("sup").length; i++) {
        document.getElementsByClassName("sup")[i].addEventListener("click", function () {
            document.getElementsByTagName("li")[i].remove();
            document.getElementsByTagName("button")[i].remove();
            document.getElementsByClassName("sup")[i].remove();
            listDiv();
        });
    }
}

let div = document.createElement("div");
div.style.border = "2px solid black";
div.style.margin = "15px";
div.style.padding = "15px";

function listDiv(){
    div.innerHTML = "";
    for (let i of document.getElementsByTagName("li")){
        div.innerHTML += i.innerHTML + ", ";
    }
}

let liste;
for (liste of articles) {
    let li = document.createElement("li");
    li.className = "course"
    li.innerHTML = liste;
    document.getElementById("listeCourse").append(li);

    let button = document.createElement("button");
    button.innerHTML = " masquer";
    button.style.color = "red";
    document.getElementById("listeCourse").append(button);

    let sup = document.createElement("div");
    sup.innerHTML = " Supprimer";
    sup.style.backgroundColor = "red";
    sup.style.display = "inline-block";
    sup.className = "sup";
    document.getElementById("listeCourse").append(sup);

}

let input = document.createElement("input");
input.className = "addList";
document.body.append(input);

input.addEventListener("keypress", function (event){
    if (event.key === "Enter") {
        let li = document.createElement("li");
        li.className = "course"
        li.innerHTML = this.value;
        document.getElementById("listeCourse").append(li);

        let button = document.createElement("button");
        button.innerHTML = " masquer";
        button.style.color = "red";
        document.getElementById("listeCourse").append(button);

        let sup = document.createElement("div");
        sup.innerHTML = " Supprimer";
        sup.style.backgroundColor = "red";
        sup.style.display = "inline-block";
        sup.className = "sup";
        document.getElementById("listeCourse").append(sup);

        this.value = "";
        test();
    }
});

let flag = 0;
function test() {
    for (let i = 0; i<document.getElementsByTagName("button"); i++){
        document.getElementsByTagName("button")[i].className = "";
    }
    for (let y = 0; y < document.getElementsByTagName("button").length; y++) {
        if (document.getElementsByTagName("button").className !== "check") {
            document.getElementsByTagName("button")[y].addEventListener("mouseup", function () {
                if (flag === 0) {
                    this.innerHTML = " afficher ";
                    this.style.color = "green";
                    document.getElementsByClassName("course")[y].style.opacity = "0";
                    flag = 1;
                } else {
                    this.innerHTML = " masquer ";
                    this.style.color = "red";
                    document.getElementsByClassName("course")[y].style.opacity = "1";
                    flag = 0;
                }
                document.getElementsByTagName("button")[y].className = "check";
            });
        }
    }
    listDiv();
    supCourse();
}
test();

let deleteListe = document.createElement("div");
deleteListe.innerHTML = " Supprimmer la derniere entrée";
deleteListe.style.backgroundColor = "red";
deleteListe.style.display = "inline-block";
document.body.append(deleteListe);

deleteListe.addEventListener("mouseup", function (){
    if (document.getElementsByTagName("li").length>0) {
        document.getElementsByTagName("li")[document.getElementsByTagName("li").length - 1].remove();
        document.getElementsByTagName("button")[document.getElementsByTagName("button").length - 1].remove();
        document.getElementsByClassName("sup")[document.getElementsByClassName("sup").length - 1].remove();
        listDiv();
    }
});


document.body.append(div);
listDiv();