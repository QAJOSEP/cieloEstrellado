function estrellas (){
    let limite = 1200;
    let escena = document.querySelector('.escena');
    let i = 0;
    while(i<limite){
        let estrella = document.createElement('i');
        let x = Math.floor(Math.random()*window.innerWidth);
        let y = Math.floor(Math.random()*window.innerHeight);
        let duracion = Math.random()*10;
        let espacio = Math.random()*2;

        estrella.style.left=x+'px';
        estrella.style.top=y+'px';
        estrella.style.width=1+espacio+'px';
        estrella.style.height=1+espacio+'px';

        estrella.style.animationDuration=10+duracion+'s';
        estrella.style.animationDelay=duracion+'s';
        escena.appendChild(estrella);
        i++
    }
}

estrellas();