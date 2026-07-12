const pairs=[

["mill1.jpg","mill2.jpg"],

["angel1.jpg","angel2.jpg"],

["devil1.jpg","devil2.jpg"],

["children2.jpg","children1.jpg"],

["face1.jpg","face2.jpg"],

["head1.jpg","head2.jpg"],

["mermaid1.jpg","mermaid2.jpg"],

["lion1.jpg","lion2.jpg"],

["threshold1.jpg","threshold2.jpg"],

["landing.jpg","landed.jpg"],

["wolf1.jpg","wolf2.jpg"],

["wall1.jpg","wall2.jpg"],

["fisherman1.jpg","fisherman2.jpg"],

["octopus1.jpg","octopus2.jpg"],

["guitar1.jpg","guitar2.jpg"],

["morning2.jpg","morning1.jpg"],

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