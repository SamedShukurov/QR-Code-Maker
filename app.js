let button = document.querySelector("button"),
    input = document.querySelector("input"),
    img = document.querySelector("img");
button.addEventListener("click",(e)=>{
    e.preventDefault()
    let qrValue = input.value;
    if(!qrValue){
        return
    }
    else{
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    }
})