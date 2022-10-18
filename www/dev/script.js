const allYellowMembers = [
  { firstname: "Noel", lastname: "Perland", personalityType: "yellow" },
  { firstname: "Alex", lastname: "Saxena", personalityType: "yellow" },
  { firstname: "Knatte", lastname: "Larsson", personalityType: "yellow" },
];
const allRedMembers = [
  { firstname: "Vadzim", lastname: "Kulikouski", personalityType: "red" },
  { firstname: "Sanaz", lastname: "Effati", personalityType: "red" },
  { firstname: "Fnatte", lastname: "Larsson", personalityType: "red" },
];
const allBlueMembers = [
  { firstname: "Peter", lastname: "Karlsson", personalityType: "blue" },
  { firstname: "Linus", lastname: "Härén", personalityType: "blue" },
  { firstname: "Tjatte", lastname: "Larsson", personalityType: "blue" },
];
const allGreenMembers = [
  { firstname: "Tom", lastname: "Johansson", personalityType: "green" },
  { firstname: "Gustav", lastname: "Franchell", personalityType: "green" },
  { firstname: "Latte", lastname: "Larsson", personalityType: "green" },
];

function getMembersByColor(color) {
  var makeColor = document.getElementById("color").value;
  console.log(makeColor);
  if (makeColor === "yellow") console.log(allYellowMembers);
  else if (makeColor === "red") console.log(allRedMembers);
  else if (makeColor === "blue") console.log(allBlueMembers);
  else if (makeColor === "green") console.log(allGreenMembers);
}
