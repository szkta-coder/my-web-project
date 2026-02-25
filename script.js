const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme");
    console.log("Mód átváltva"); //hibakereséshez jó
});