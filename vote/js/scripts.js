window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();
  
      let VotingMenu = document.getElementById("votes");
      VotingMenu.setAttribute("class", "hidden");
      let under18Message = document.getElementById("under-18");
      under18Message.setAttribute("class", "hidden");
  
      const age = parseInt(document.querySelector("input#age").value);
  
      if (age > 18) {  
        VotingMenu.removeAttribute("class");
      } else if (age === 18) { 
        window.alert("You can vote now!");
        VotingMenu.removeAttribute("class");
      } else {
        under18Message.removeAttribute("class");
      }
    };
  };