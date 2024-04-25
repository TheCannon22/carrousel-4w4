(function () {
    //  Code du carrousel
    console.log("Début du carrousel");
    // Récupération des éléments du DOM
    let carrousel = document.querySelector('.carrousel');
    //  Affichage des éléments récupérés
    console.log(" carrousel : ", carrousel.tagName);
    // Récupération des éléments du DOM
    let bouton = document.querySelector('.bouton__ouvrir');
    // Affichage des éléments récupérés
    console.log(" bouton : ", bouton.tagName);
    // Récupération des éléments du DOM
    let carrousel__x = document.querySelector('.carrousel__x');

    // Affichage des éléments récupérés
    let galerie = document.querySelector('.galerie');
    // Affichage des éléments récupérés
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

    function creer_radio_button(i, carrousel__image){
        // Create radio button for each image
        let radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'carousel-radio';
        radioButton.id = 'radio' + i;
        radioButton.classList.add('carousel-radio');
        radioButton.value = i;
        radioContainer.appendChild(radioButton);
    
        // Add click event listener to radio button
        radioButton.addEventListener('click', function() {
            // Hide all images
            let toutesLesImages = carrousel__figure.querySelectorAll('.carrousel__image');
            toutesLesImages.forEach(img => img.style.display = 'none');
    
            // Show clicked image
            carrousel__image.style.display = 'block';
        });
    }

    carrousel.appendChild(radioContainer);

    carrousel.appendChild(radioContainer);

    bouton.addEventListener('mousedown', function () {
        carrousel.classList.add('carrousel--ouvrir');
    })

    carrousel__x.addEventListener('mousedown', function () {
        carrousel.classList.remove('carrousel--ouvrir');
    })
})()