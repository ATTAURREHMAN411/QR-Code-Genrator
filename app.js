var input = document.querySelector("#input")
var sizes = document.querySelector("#sizes")
var generateBtn = document.querySelector("#genrat")
var dowload = document.querySelector("#dowload")
var container = document.querySelector(".qr-body")



let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    empty()

});

sizes.addEventListener("click", (e)=>{
    size = e.target.value
    empty();
})
function empty(){
    input.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}

dowload.addEventListener("click", ()=> {
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgaee = img.getAttribute(`src`)
        dowload.setAttribute(`href`, imgaee)
    }else{
        dowload.setAttribute(`href`, `${document.querySelector('canvas').toDataURL()}`)

    }
})

function generateQRCode(){
    container.innerHTML = "";
    new QRCode(container, {
        text:input.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}
