function hideResults() {
    document.getElementById("age").setAttribute("class", "hidden");
    document.getElementById("height").setAttribute("class", "hidden");
    document.getElementById("weight").setAttribute("class", "hidden");
    document.getElementById("gender").setAttribute("class", "hidden");
}

    window.onload = function() {
    document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);
    const weight = parseInt(document.querySelector("input#weight").value);      
    const gender = (document.querySelector("input#gender").value);
console.log(age)
console.log(gender)
console.log(weight)
console.log(height)
    if (age || height || gender || weight) {
        if (age >= 18 && height >= 65 && gender=== "male" && weight <300) {
        document.getElementById("Felicity").removeAttribute("class");
        document.getElementById("Foxy").removeAttribute("class");
        document.getElementById("Frau").removeAttribute("class");
        document.getElementById("Fembot").removeAttribute("class");
        document.getElementById("Vanessa").removeAttribute("class");
        console.log("this")
        } else if (age >= 30 && height >= 65 && gender=== "male" && weight <300) {
            document.getElementById("Felicity").removeAttribute("class");
            document.getElementById("Foxy").removeAttribute("class");
            document.getElementById("Frau").removeAttribute("class");
            document.getElementById("Fembot").removeAttribute("class");
        } else if (age >= 40 && height >= 65 && gender=== "male" && weight <300) {
            document.getElementById("Felicity").removeAttribute("class");
            document.getElementById("Frau").removeAttribute("class");
            document.getElementById("Fembot").removeAttribute("class");
        } else if (age >= 65 && height >= 65 && gender=== "male" && weight <300) {
            document.getElementById("Frau").removeAttribute("class");
            document.getElementById("Fembot").removeAttribute("class");
            
            
        } else {
            console.log("test")
        }
    }
    };
}
