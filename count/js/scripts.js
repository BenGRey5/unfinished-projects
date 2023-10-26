// function countUpBy() {
// let countTo = document.getElementById("countTo").value;
// let countBy = document.getElementById("countBy").value;
// let result = [];

// for (let index = 0; index <=countTo; index += countBy) {
//     console.log(index)
// }
// }
// if (isNaN(countTo) || isNaN(countBy) || countTo <= 0 || countBy <= 0) {
//     result.push("error")
// } else if (countBy > countTo) {
//     result.push("error")
// } else {
// for (let i= countBy; i<= countTo, i += countBy) {
//     result.push(i);
// }
// }
// document.getElementById("result").innerText = result.join(",");

function countUpBy() {
    let countTo = parseInt(document.getElementById("countTo").value)
    let countBy = parseInt(document.getElementById("countBy").value)
  
    if (isNaN(countTo)  isNaN(countBy)  countTo <= 0 || countBy <= 0) {
      document.getElementById("result").innerText = "invalid input"
    } else if (countBy > countTo) {
      document.getElementById("result").innerText =
        "invalid input. countBy number cant be larger than countTo number"
    } else {
      let result = []
      for (let i = countBy; i <= countTo; i += countBy) {
        result.push(i)
      }
      document.getElementById("result").innerText = result.join(", ")
    }
  }