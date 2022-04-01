var dodeca_container = document.querySelector('#dodeca_container');
var dode_cont_info = dodeca_container.getBoundingClientRect();

var dodeca = document.querySelector('#dodeca');
var max_rot = 360;
var dist_text = document.querySelector('#distancia');

var sombra = document.querySelector('#dodeca_shadow');

//sombra.appendChild(dodeca.cloneNode(true));
//sombra.children[0].removeAttribute('id');

window.addEventListener('mousemove', (e)=>{
    var center_X = (dode_cont_info.width/2) + dode_cont_info.left;
    var center_Y = (dode_cont_info.height/2) + dode_cont_info.top;

    var over_dodeca = false;
    if(e.clientX > dode_cont_info.left && e.clientX < dode_cont_info.width + dode_cont_info.left 
      && e.clientY > dode_cont_info.top && e.clientY < dode_cont_info.height + dode_cont_info.top){
        over_dodeca = true;
    }else{
        over_dodeca = false;
    }
   
    
    var distancia = Math.sqrt(Math.pow(center_X - e.clientX, 2) + Math.pow(center_Y - e.clientY, 2));
    //var final_dist = Math.round(distancia/100);
    //console.log(distancia);
    dist_text.textContent = Math.round(distancia);
    
     if(over_dodeca){
         var rot_x = (((e.clientX - center_X) / center_X) * max_rot) * -1;
         var rot_y = (((e.clientY - center_Y) / center_Y) * max_rot) * 1;

         dodeca.style.transform = "rotateZ(0deg) rotateY(" + rot_x + "deg) rotateX("+ rot_y +"deg)";
         
    }
    
    //distancia_observador();
});
//dodeca.style.transform = "rotateY(-270deg) rotateX(267deg)";

var faces = document.querySelectorAll('.pentagon .penta-content');
var pantalla = document.querySelector('#pantalla');
var img_cont = document.querySelector('#img-container');

faces.forEach((face)=>{
    //console.log(face);
    face.addEventListener('mouseenter', (ex)=>{
        if(!ex.target.classList.contains("no-path")){
            ex.target.classList.add("no-path");
            //console.log('ENTRA');
        }
    });
    face.addEventListener('click', (e)=>{
        //console.log(e.target.parentElement);
        //e.target.parentElement.classList.toggle("no-path");
        img_cont.innerHTML = '';
        img_cont.appendChild(e.target.cloneNode(true));
        pantalla.classList.remove('vacia');
    })
    face.addEventListener('mouseout', (ev)=>{
        //ev.target.parentElement.parentElement.parentElement.style.zIndex = "1";
        if(ev.target.parentElement.classList.contains("no-path")){
            ev.target.parentElement.classList.remove("no-path");
            //console.log('SURT');
        }
    });
});

var open_btn = document.querySelector("#open_botonera");

open_btn.addEventListener('click', ()=>{
    open_btn.parentElement.classList.toggle('opened');
});

function showGrid(){
    document.body.classList.toggle('no_grid');
}

function showCoords(){
    document.body.classList.toggle('no_coords');
}

function showDist(){
    document.body.classList.toggle('no_dist');
}

function distancia_observador(){
    var cara_1 = document.querySelector("#cara_1");
    //console.log(cara_1.getBoundingClientRect());
}

function CerrarPantalla(){
    img_cont.innerHTML = '';
    pantalla.classList.add('vacia');
}

function radioValue(value){
    var myClass = "persp-"+value;
    console.log(myClass);
    document.body.classList.forEach(item=>{
        if(item.startsWith('persp-')) {
            document.body.classList.remove(item) ;
        }
    });
    document.body.classList.add(myClass);
}