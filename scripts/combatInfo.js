const combatInfo = [
    {
        name: "Liuthian Archery", 
        description: "Normal Attack: Perform up to 6 consecutive shots with a bow<br><br>\
                    Charged Attack: Perform a more precise Aimed Shotwith increased DMG. \
                    While aiming, an icy aura will accumulate on the arrowhead before the arrow is fired. \
                    Has different effects based on how long the energy has been charged:<br>\
                    &emsp; &emsp; Charge Level 1: Fires off an icy arrow that deals <strong>Cryo DMG</strong><br>\
                    &emsp; &emsp; Charge Level 2: Fires off a Frostflake Arrow that deals <strong>Cryo DMG</strong><br>\
                    &emsp; &emsp; The Frostflake Arrow blooms after hitting its target, dealing <strong>AoE Cryo DMG</strong><br><br>\
                    Plunging Attack: Fires off a shower of arrows in mid-air before falling \
                    and striking the ground, dealing AoE DMG upon impact."
    },
    {
        name: "Trail of the Qilin", 
        description: "Leaving a single Ice Lotus behind, Ganyu dashes backward, shunning all impurity and \
                    dealing AoE Cryo DMG.<br> Ice Lotus:<br> 1. Continuously taunts surrounding\
                    opponents, attracting them to attack it.<br> 2. Endurance scales based on Ganyu's Max HP.<br>\
                    3. Blooms profusely when destroyed or once its duration ends, dealing <strong>AoE Cryo DMG.<strong>"
    },
    {
        name: "Celestial Shower",
        description: "Coalesces atmospheric frost and snow to summon a Sacred Cryo Pearl that exorcises evil.<br>\
                    During its ability duration, the Sacred Cryo Pearl will continuously rain down shards of ice, \
                    striking opponents within an AoE and dealing <strong>Cryo DMG</strong>."
    },
    {
        name: "Undivided Heart",
        description: "After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their \
        resulting bloom effects is increased by <strong>20%</strong> for 5s."
    },
    {
        name: "Harmony between Heaven and Earth",
        description: "Celestial Shower grants a 20% <strong>Cryo DMG Bonus</strong> to active members in the AoE."
    },
    {
        name: "Preserved for the Hunt",
        description: "Refunds <strong>15%</strong> of the ores used when crafting Bow-type weapons."
    }
]

const constellationInfo = [
    {
        name: "Dew Drinker", 
        description: "Taking DMG from a Charge Level 2 Frostflake Arrow or Frostflake Arrow Bloom decreases \
                    opponents' Cryo RES by 15% for 6s. A hit regenerates 2 Energy for Ganyu. This effect can \
                    only occur once per Charge Level 2 Frostflake Arrow, regardless if Frostflake Arrow itself \
                    or its Bloom hit the target."
    },
    {
        name: "The Auspicious",
        description: "Trail of the Qilin gains 1 additional charge."
    },
    {
        name: "Cloud-Strider",
        description: "Increases the Level of Celestial Shower by 3. Maximum upgrade level is 15."
    },
    {
        name: "Westward Sojourn",
        description: "Opponents standing within the AoE of Celestial Shower take increased DMG. \
                    This effect strengthens over time. Increased DMG taken begins at 5% and increases \
                    by 5% every 3s, up to a maximum of 25%. The effect lingers for 3s after the opponent \
                    leaves the AoE."
    },
    {
        name: "The Merciful",
        description: "Increases the Level of Trail of the Qilin by 3. Maximum upgrade level is 15."
    },
    {
        name: "The Clement",
        description: "Using Trail of the Qilin causes the next Frostflake Arrow shot within 30s to not require charging"
    }
]

const abilityTitle = document.getElementById("ability-title");
const constellationTitle = document.getElementById("constellation-title");
const abilityImages = [...document.getElementById("abilities").children];
const constellationImages = [...document.getElementById("constellations").children];

for(let i = 0; i < abilityImages.length; i++){
    

    abilityImages[i].addEventListener("mouseover", () =>{
        abilityImages[i].style.transform = "scale(1.05)";
        abilityTitle.innerHTML = combatInfo[i].name;
    });
    abilityImages[i].addEventListener("mouseout", () =>{
        abilityImages[i].style.transform = "scale(1)";
    });

    constellationImages[i].addEventListener("mouseover", () =>{
        constellationImages[i].style.transform = "scale(1.05)";
        constellationTitle.innerHTML = constellationInfo[i].name;
    });
    constellationImages[i].addEventListener("mouseout", () =>{
        constellationImages[i].style.transform = "scale(1)";
    });

}



