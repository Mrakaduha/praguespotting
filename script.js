const pairs=[

["mlejn1.jpg","mlejn2.jpg"],

["andel1.jpg","andel2.jpg"],

["dabel1.jpg","dabel2.jpg"],

["deti2.jpg","deti1.jpg"],

["tvar1.jpg","tvar2.jpg"],

["hlava1.jpg","hlava2.jpg"],

["panna1.jpg","panna2.jpg"],

["pozorlev1.jpg","pozorlev2.jpg"],

["prah1.jpg","prah2.jpg"],

["pristava.jpg","pristal.jpg"],

["vlk1.jpg","vlk2.jpg"],

["vezdi1.jpg","vezdi2.jpg"],

["rybar1.jpg","rybar2.jpg"],

["chobotnice1.jpg","chobotnice2.jpg"],

["kytara1.jpg","kytara2.jpg"],

["rano2.jpg","rano1.jpg"],

];

const palette = [
    "#000",
    "#74d0c4",
    "#69c9ff",
    "#fff",
    "#ff4444",
    "#ffe733"
];

const left=document.getElementById("leftImage");
const right=document.getElementById("rightImage");
const dots=document.getElementById("dots");

function show(index){

    left.src  = "images/" + pairs[index][0];
    right.src = "images/" + pairs[index][1];

    document.querySelectorAll(".dot").forEach((dot,i)=>{

        dot.style.background =
        i === index
        ? "#bcbcbc"
        : palette[i % palette.length];
    });

}

pairs.forEach((pair,index)=>{

    const dot=document.createElement("div");

    dot.className="dot";

    dot.style.background = palette[index % palette.length];

    dot.onclick=()=>show(index);

    dots.appendChild(dot);

});

show(0);