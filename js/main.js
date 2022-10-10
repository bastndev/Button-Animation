//Cambio de Imagen
function changeImage(){
    let displaImage = document.getElementById('sho')
    if(displaImage.src.match('assets/img/sho1.png')){
        displaImage.src='assets/img/sho3.png'
    }else{
        displaImage.src ='assets/img/sho1.png'
    }
}
//Efecto 2 Navigation
let navigation = document.querySelector('.navigation')
    document.querySelector('.mee').onclick = function()
    {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    }