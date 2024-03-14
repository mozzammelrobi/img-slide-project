const slides = document.querySelectorAll('.slide')
let count = 0;
slides.forEach(
    (slide,index)=>{
         slide.style.left = `${index * 100}%`

})


const goNext = ()=>{
    count++
    slideImage()
}
const goPre = ()=>{
    count--
    slideImage()
}
const slideImage = ()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${count * 100}%)`
        }
    )
}