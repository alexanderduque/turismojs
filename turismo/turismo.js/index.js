let elementos = document.getElementsByTagName('input');

limpiar.onclick = (e)=> { 
  e.preventDefault();
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].value='';          
  }
}

function loadPage(){
  let frame = $('#frame');
  const url = 'https://www.youtube.com/embed/ZeX1AP1_jHQ';
  frame.attr('src',url).show();
}
function loadPageAfrica(){
  let frame = $('#frame');
  const url = 'https://www.youtube.com/embed/P8frC_cLLD4';
  frame.attr('src',url).show();
}
function loadPageLondres(){
  let frame = $('#frame');
  const url = 'https://www.youtube.com/embed/2aLqVb22LGI';
  frame.attr('src',url).show();
}
function loadPageTurquia(){
  let frame = $('#frame');
  const url = 'https://www.youtube.com/embed/tEmgU_PC7DE';
  frame.attr('src',url).show();
}

//FETCH
//ARCHIVO JSON

fetch('/servicios.json')
  .then((response)=>{

    return response.json();
  }).then((servicios)=>{
    console.log(servicios);
  })

//<a href="">--click para ver video del Destino--</a>

