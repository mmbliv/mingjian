var slides=document.querySelectorAll('.mySlides');
console.log(slides);
var dots = document.getElementsByClassName("demo");
var text=document.getElementById('caption');
var slidesIdex=0;
slides[0].style.display='block';


function currentSlide(n){
    showSlides(slidesIdex=n-1);

}


function plusSlides(n){
    showSlides(slidesIdex+=n);
    

}
function showSlides(n){
    for(i=0;i<slides.length;i++){
        slides[i].style.display='none';
    }
    for(i=0;i<slides.length;i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    if(n==slides.length){slidesIdex=0}
    if(n<0){slidesIdex=slides.length-1}

    slides[slidesIdex].style.display='block';
    dots[slidesIdex].className += "active";
    text.innerHTML=dots[slidesIdex].alt;
}