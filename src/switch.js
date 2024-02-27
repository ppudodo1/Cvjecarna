export function promjeniSliku(){
    const btn = document.getElementById("prom");
    const drugiBtn = document.getElementById("promDva");
    let wrapper = document.getElementsByClassName("about__gallery")[0];
   
    let index = 0;
    let arrOfImages = ['url(roses.jpg)','url(bou.jpg)','url(vite.svg)'];
    btn.addEventListener("click",()=>{
        //console.log("Dogodila se promjena slike")
        //console.log("Wrapper: ",wrapper);
        index++;
        if(index>=arrOfImages.length){
            index=0;
        }
         
        wrapper.style.transition = "background-image 0.5s";
        wrapper.style.backgroundImage = arrOfImages[index];
        
    })
    drugiBtn.addEventListener("click",()=>{
        //console.log("Dogodila se promjena slike")
        //console.log("Wrapper: ",wrapper);
         index--;
         if(index<0){
                index = arrOfImages.length-1;
         }
        wrapper.style.transition = "background-image 0.5s";
        wrapper.style.backgroundImage = arrOfImages[index];
        
    })
    
}
export function promjeniSlikuGalerije(){
    const btn = document.getElementById("lijevo");
    const drugiBtn = document.getElementById("desno");
    let galleryCont = document.getElementsByClassName("gallery__cont")[0];
   
    let index = 0;
    let arrOfImages = ['url(roses.jpg)','url(bou.jpg)','url(vite.svg)'];
    btn.addEventListener("click",()=>{
        //console.log("Dogodila se promjena slike")
        //console.log("Wrapper: ",wrapper);
        index++;
        if(index>=arrOfImages.length){
            index=0;
        }
         
        galleryCont.style.transition = "background-image 0.5s";
        galleryCont.style.backgroundImage = arrOfImages[index];
        
    })
    drugiBtn.addEventListener("click",()=>{
        //console.log("Dogodila se promjena slike")
        //console.log("Wrapper: ",wrapper);
         index--;
         if(index<0){
                index = arrOfImages.length-1;
         }
        galleryCont.style.transition = "background-image 0.5s";
        galleryCont.style.backgroundImage = arrOfImages[index];
        
    })
}
