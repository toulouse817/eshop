let darkmode = document.querySelector("#darkmode");
darkmode.onclick=()=>{
    if(darkmode.classList.contains("bi-moon-fill")){
        darkmode.classList.replace("bi-moon-fill","bi-sun-fill");
        document.body.classList.add("color");
    }else{
        darkmode.classList.replace("bi-sun-fill","bi-moon-fill");
        document.body.classList.remove("color");
    }
}

const sr = ScrollReveal({
    distance:"10px",
    duration:"2400",
    rest:true
});

sr.reveal(".contenido-texto",{delay:250, origin: "top"});
sr.reveal(".contenido-img",{delay:450, origin: "bottom"});
sr.reveal(".flecha",{delay:550, origin: "left"});
