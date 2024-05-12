(function () {
    // Code du carrousel
    console.log("Début du carrousel");
    // Récupération des éléments du DOM
    let carrousel = document.querySelector('.carrousel');
    let bouton = document.querySelector('.bouton__ouvrir');
    let carrousel__x = document.querySelector('.carrousel__x');
    let galerie = document.querySelector('.galerie');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    let galerie__image = galerie.querySelectorAll('img');

    let radioContainer = document.createElement('div');
    radioContainer.classList.add('radio-container');

    let index = 0;

    for (let i = 0; i < galerie__image.length; i++) {
        let carrousel__image = document.createElement('img');
        carrousel__image.classList.add('carrousel__image');
        carrousel__image.dataset.index = index;
        carrousel__image.src = galerie__image[i].src;
        carrousel__figure.appendChild(carrousel__image);

        creer_radio_button(i, carrousel__image);
    }

    function creer_radio_button(i, carrousel__image) {
        let radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'carousel-radio';
        radioButton.id = 'radio' + i;
        radioButton.classList.add('carousel-radio');
        radioButton.value = i;
        radioContainer.appendChild(radioButton);

        radioButton.addEventListener('click', function () {
            let toutesLesImages = carrousel__figure.querySelectorAll('.carrousel__image');
            toutesLesImages.forEach(img => img.style.display = 'none');
            carrousel__image.style.display = 'block';
        });
    }

    galerie__image.forEach((img, i) => {
        img.addEventListener('click', function () {
            carrousel.classList.add('carrousel--ouvrir');
            document.getElementById('radio' + i).click();
        });
    });

    // Ajout d'une animation CSS lors du changement d'image
    let style = document.createElement('style');
    style.innerHTML = `
.carrousel__image {
    transition: opacity 0.5s ease-in-out;
}
.carousel-radio:checked ~ .carrousel__image {
    opacity: 0;
}
.carousel-radio:checked + .carrousel__image {
    opacity: 1;
}`;
    document.head.appendChild(style);

    carrousel.appendChild(radioContainer);

    // Create previous and next buttons
    let prevButton = document.createElement('button');
    prevButton.innerHTML = 'Précédent';
    prevButton.innerHTML = '&#8592;'; // Entité HTML pour la flèche gauche
    prevButton.classList.add('carousel-button', 'prev-button'); // Ajout de classes pour le style CSS
    prevButton.addEventListener('click', function () {
        index = (index > 0) ? index - 1 : galerie__image.length - 1;
        document.getElementById('radio' + index).click();
    });

    let nextButton = document.createElement('button');
    nextButton.innerHTML = 'Suivant';
    nextButton.innerHTML = '&#8594;'; // Entité HTML pour la flèche droite
    nextButton.classList.add('carousel-button', 'next-button'); // Ajout de classes pour le style CSS
    nextButton.addEventListener('click', function () {
        index = (index < galerie__image.length - 1) ? index + 1 : 0;
        document.getElementById('radio' + index).click();
    });

    carrousel.appendChild(prevButton);
    carrousel.appendChild(nextButton);

    bouton.addEventListener('mousedown', function () {
        carrousel.classList.add('carrousel--ouvrir');
    })

    carrousel__x.addEventListener('mousedown', function () {
        carrousel.classList.remove('carrousel--ouvrir');
    })
})()