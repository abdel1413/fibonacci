function isValidTrick(trickName) {

const firstWords =[
  "Misty",
"Ghost",
"Thunder",
"Solar",
"Sky",
"Phantom",
"Frozen",
"Polar",

]
  const secondWords =["Twister",
"Icequake",
"Avalanche",
"Vortex",
"Snowstorm",
"Frostbite",
"Blizzard",
"Shadow",
]
 const matches = trickName.split(" ")
   console.log(matches)
  return firstWords.includes(matches[0])&& secondWords.includes(matches[1]);
}

isValidTrick("Polar Vortex")