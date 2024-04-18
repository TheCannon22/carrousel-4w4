(function () {
    console.log("Début du carrousel");
    let carrousel = document.querySelector('.carrousel');
    console.log(" carrousel : ", carrousel.tagName);
    let bouton = document.querySelector('.bouton__ouvrir');
    console.log(" bouton : ", bouton.tagName);
    let carrousel__x = document.querySelector('.carrousel__x');

    let galerie = document.querySelector('.galerie');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    let galerie__image = galerie.querySelectorAll('img'); // Récupère toutes les images de la galerie

    let radioContainer = document.createElement('div');
    radioContainer.classList.add('radio-container');

    for (let i = 0; i < galerie__image.length; i++) {
        let carrousel__image = document.createElement('img');
        carrousel__image.classList.add('carrousel__image');
        carrousel__image.src = galerie__image[i].src;
        carrousel__figure.appendChild(carrousel__image);
    
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
            let allImages = carrousel__figure.querySelectorAll('.carrousel__image');
            allImages.forEach(img => img.style.display = 'none');
    
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