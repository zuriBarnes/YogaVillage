let bvs2019 = [ 'Hernandez', 'Kamou', 'Will', 'Josh', 'Kodsi','Mike Alta', 'Robert', 'Tino', 'Mike Orlowski', 'Andrew Orlowsky', 'Ezra', 'Hamsa', 'Bott', 'Luke', 'Nick', 'Fato', 'Seba', 'Max', 'Zhao', 'John Rogers'];

/* for (let i = 0; i < bvs2019.length; i++) {
    console.log(bvs2019[i]);
} */

  bvs2019.forEach((player) =>{
    console.log($`hello world!`);
    
  })


let info = document.querySelectorAll(".info");

/*
let hamburg = document.querySelector(".hamburger-nav");
let nav_2Box = document.querySelector("#myDiv");

hamburg.addEventListener("click", function(){
    nav_2Box.classList.toggle("nav_2");
    nav_2Box.innerHTML = "";

});
  */
 
  var x = document.querySelector("#myDiv");
function switchIt() {
   
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



