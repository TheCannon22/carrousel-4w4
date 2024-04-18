(function () {
    console.log("Début du carrousel");
    let carrousel = document.querySelector('.carrousel');
    console.log(" carrousel : ", carrousel.tagName);
    let bouton = document.querySelector('.bouton__ouvrir');
    console.log(" bouton : ", bouton.tagName);
    let carrousel__x = document.querySelector('.carrousel__x');

    let galerie = document.querySelector('.galerie');
    // let galerie__image = galerie.querySelector('img'); // Récupère la première image de la galerie


    let carrousel__figure = document.querySelector('.carrousel__figure');
    let galerie__image = galerie.querySelectorAll('img'); // Récupère toutes les images de la galerie

    for (const elm of galerie__image) {
        let carrousel__image = document.createElement('img');
        carrousel__image.classList.add('carrousel__image');
        console.log(elm.src);
        carrousel__image.src = elm.src;
        console.log(carrousel__image.src);
        carrousel__figure.appendChild(carrousel__image);
    }

    bouton.addEventListener('mousedown', function () {
        carrousel.classList.add('carrousel--ouvrir');
    })

    carrousel__x.addEventListener('mousedown', function () {
        carrousel.classList.remove('carrousel--ouvrir');
    })
})()