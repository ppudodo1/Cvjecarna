export function deployMenu(){
    console.log("Usli smo u funkciju")
    let button = document.getElementsByClassName("header__bars")[0];
    let mobileNav = document.getElementsByClassName("mobile__nav")[0];
    let header = document.getElementById("glava");
    let bars = document.getElementsByClassName("header__bars")[0];
    console.log(bars);
    //console.log(button);
    button.addEventListener("click",()=>{
       
        mobileNav.style.display = "flex";
        mobileNav.style.flexDirection = "column";
        mobileNav.style.textAlign = "center";
        header.style.alignItems = "center";

        // Set justifyContent to "space-between" (or any other valid justifyContent value)
        header.style.justifyContent = "center";
        bars.style.display = "none";

    });
}