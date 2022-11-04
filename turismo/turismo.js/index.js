let elementos = document.getElementsByTagName('input');

limpiar.onclick = (e)=> { 
  e.preventDefault();
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].value='';          
  }
}

