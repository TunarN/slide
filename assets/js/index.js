const imagesOnGalery = document.querySelectorAll(".gallery a");
const newPopup = document.querySelector(".popup");
const sliderImg=document.querySelector(".slider img")
const closeBtn = document.querySelector(".close-icon")

imagesOnGalery.forEach((img)=>{
      img.addEventListener("click", function(e){
          e.preventDefault();
          let imgSource = this.getAttribute("href")
          sliderImg.setAttribute("src",imgSource)
          newPopup.style.display = "flex"

      })
});

function CloseImg(){
    newPopup.style.display="none"
}

document.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("popup")){
        CloseImg()
    }
})

closeBtn.addEventListener("click", function(){
    CloseImg()
})
 
document.addEventListener("keydown",function(e){
    if (e.key==="Escape") {
        CloseImg()
    }
})
  