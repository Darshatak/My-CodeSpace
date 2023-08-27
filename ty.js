const btn = document.getElementById("submit");


btn.addEventListener("click", () => { 
    let inputBtn1 = document.getElementsByClassName("total")[0].value;
    let inputBtn2 = document.getElementsByClassName("total")[1].value;
    let inputBtn3 = document.getElementsByClassName("total")[2].value;
    console.log(inputBtn1);
    console.log(inputBtn2);
    console.log(inputBtn3);
})



// function move() {
//         var redElem = document.getElementById('red');
//         var poe = 0;
//         var anim = setInterval(animate,5);
        
//         function animate() {
//             if (poe==350){
//                 clearInterval(anim);
//             }
//             else{
//                 poe++;
//                 redElem.style.top = poe+"px";
//                 redElem.style.left = poe+"px";
//             }
            
//         }
//     }