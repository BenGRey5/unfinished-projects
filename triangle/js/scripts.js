document.getElementById("age").setAttribute("class", "hidden");
    document.getElementById("height").setAttribute("class", "hidden");
    document.getElementById("weight").setAttribute("class", "hidden");
    document.getElementById("gender").setAttribute("class", "hidden");

    window.onload = function() {
        document.querySelector("form").onsubmit = function(event) {
        event.preventDefault();
        hideResults();
        const SideA = parseInt(document.querySelector("input#SideA").value);
        const SideB = parseInt(document.querySelector("input#SideB").value);
        const SideC = parseInt(document.querySelector("input#SideC").value);  
        
        


        
        }
    }   
