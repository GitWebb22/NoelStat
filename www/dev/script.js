const allYellowMembers = [
  { firstname: "Noel", lastname: "Perland", personalityType: "Yellow" },
  { firstname: "Alex", lastname: "Saxena", personalityType: "Yellow" },
  { firstname: "Knatte", lastname: "Larsson", personalityType: "Yellow" },
];
const allRedMembers = [
  { firstname: "Vadzim", lastname: "Kulikouski", personalityType: "Red" },
  { firstname: "Sanaz", lastname: "Effati", personalityType: "Red" },
  { firstname: "Fnatte", lastname: "Larsson", personalityType: "Red" },
];
const allBlueMembers = [
  { firstname: "Peter", lastname: "Karlsson", personalityType: "Blue" },
  { firstname: "Linus", lastname: "Härén", personalityType: "Blue" },
  { firstname: "Tjatte", lastname: "Larsson", personalityType: "Blue" },
];
const allGreenMembers = [
  { firstname: "Tom", lastname: "Johansson", personalityType: "Green" },
  { firstname: "Gustav", lastname: "Franchell", personalityType: "Green" },
  { firstname: "Latte", lastname: "Larsson", personalityType: "Green" },
];
const containorPeople = document.querySelector(".containorPeople");
const printMembers = document.querySelector(".printMembers");
function checkboxChanged(value) {
  const p = document.createElement("p")
  p.innerText = value.replace("-", " ")
  printMembers.appendChild(p)
  console.log(value)

}

function renderSelection(selection, color) {
  containorPeople.innerHTML = ""
  selection.forEach(member => {
    const p = document.createElement("p")
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("value", `${member.firstname}-${member.lastname}`)
    checkbox.onchange = () => checkboxChanged(`${member.firstname}-${member.lastname}`)
    p.innerText = `${member.firstname} ${member.lastname} ${member.personalityType}`
    p.classList.add(color)
    p.appendChild(checkbox)
    containorPeople.appendChild(p)
  })
}

function getMembersByColor(color) {
  var makeColor = document.getElementById("color").value;
  console.log(makeColor);
  if (makeColor === "yellow") {console.log(allYellowMembers);
    renderSelection(allYellowMembers, "yellow")

  }
  else if (makeColor === "red") {console.log(allRedMembers);
  renderSelection(allRedMembers, "red")
  
  }
  else if (makeColor === "blue") {console.log(allBlueMembers);
    renderSelection(allBlueMembers, "blue")

  }
  else if (makeColor === "green") {console.log(allGreenMembers);
    renderSelection(allGreenMembers, "green")
   
  }
}