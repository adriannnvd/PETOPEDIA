document.addEventListener('DOMContentLoaded', () => {
    // Handle the click event for each breed, regardless of category (dog, cat, fish, bird)
    document.querySelectorAll('.dog, .cat, .fish, .bird').forEach(pet => {
        pet.addEventListener('click', function () {
            const petKey = this.dataset.pet; // Get the selected breed key
            if (petKey) {
                // Navigate to pet-encyclopedia.html with the selected breed as a query parameter
                window.location.href = `pet-encyclopedia.html?pet=${petKey}`;
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const petDetails = {
        //DOGS
        "german-shepherd": {
            name: "German Shepherd",
            image: "/images/dog/German-Shepherd.jpg", // Add the German Shepherd image path
            description: "German Shepherds are known for their intelligence, loyalty, and versatility. They are often used in police work, search and rescue operations, and as service dogs due to their trainable nature and work ethic. They are also affectionate with their families and protective of them.",
            origin: "Germany",
            lifespan: "9–13 years",
            color: "Black and Tan, Sable, Black, Red and Black",
            personality: [
                "Highly intelligent and loyal.",
                "Energetic and loves to work.",
                "Protective of family members.",
                "Requires consistent training and exercise."
            ],
            link: "https://en.wikipedia.org/wiki/German_Shepherd"
        },
        
        //CATS
        persian: {
            name: "Persian Cat",
            image: "/images/cat/persian.jpg",
            description: "Persians are known for their gentle temperament and enjoy the company of their human companions. They are often described as lap cats, loving to cuddle and spend time with their owners. While not as active as some other breeds, they are affectionate and will show their love through quiet companionship, often sitting beside or on their owner’s lap. They enjoy a peaceful and stable environment, making them ideal pets for those who prefer a quieter, more relaxed atmosphere.",
            origin: "Iran",
            lifespan: "12–17 years",
            color: "White, Black, Cream, Blue",
            personality: [
                "Affectionate and quiet.",
                "Loves a calm environment.",
                "Requires regular grooming.",
                "Calm and patient demeanor, making them excellent companions for indoor living."
            ],
            link: "https://en.wikipedia.org/wiki/Persian_cat"
        },
        siamese: {
            name: "Siamese Cat",
            image: "/images/cat/Siamese.jpeg",
            description: "Siamese cats are extremely vocal, often talking to their owners with a unique and expressive voice. They communicate their needs, desires, and emotions with a wide range of sounds, from soft chirps to loud meows. Their vocalizations are not just a means of communication but a reflection of their strong emotional bonds with their human companions. Siamese cats are often referred to as the talkative breed, and they enjoy being the center of attention.",
            origin: "Thailand",
            lifespan: "12–15 years",
            color: "Seal, Blue, Chocolate, Lilac Point",
            personality: [
                "Highly vocal and affectionate.",
                "Enjoys human companionship.",
                "Playful and active.",
                "Curious and mischievous, often exploring new spaces and activities."

            ],
            link: "https://en.wikipedia.org/wiki/Siamese_cat"
        },
        // Fish
    goldfish: {
        name: "Goldfish",
        image: "/images/fish/Goldfish.jpg",
        description: "Goldfish are one of the most popular aquarium fish due to their vibrant colors and relatively easy care. They are known for their peaceful nature and are often kept in tanks as decorative pets. Goldfish come in a variety of colors, including orange, red, and white, and are often seen swimming gracefully in water.",
        origin: "China",
        lifespan: "10–15 years",
        color: "Orange, Red, White, Yellow",
        personality: [
            "Peaceful and calm.",
            "Easy to care for.",
            "Prefers clean water.",
            "Social, can be kept with other fish."
        ],
        link: "https://en.wikipedia.org/wiki/Goldfish"
    },
    betta: {
        name: "Betta Fish",
        image: "/images/fish/Betta.jpg",
        description: "Betta fish, also known as Siamese fighting fish, are renowned for their vibrant colors and long, flowing fins. They are aggressive toward other males but can live peacefully with females or other species in separate spaces. Betta fish are often kept in individual tanks to prevent fighting.",
        origin: "Southeast Asia",
        lifespan: "3–5 years",
        color: "Blue, Red, Purple, White",
        personality: [
            "Aggressive towards other males.",
            "Colorful and easy to care for.",
            "Prefers a clean tank environment.",
            "Requires individual space to thrive."
        ],
        link: "https://en.wikipedia.org/wiki/Betta_fish"
    },
    clownfish: {
        name: "Clownfish",
        image: "/images/fish/Clownfish.jpg",
        description: "Clownfish are small, colorful fish known for their symbiotic relationship with sea anemones. Their vibrant orange and white coloration makes them easy to identify. They are hardy fish that do well in aquariums and can live with other species of fish in a peaceful environment.",
        origin: "Pacific Ocean, Indian Ocean",
        lifespan: "6–10 years",
        color: "Orange, White, Black",
        personality: [
            "Peaceful and social.",
            "Requires a tank with sea anemones.",
            "Hardy and easy to care for.",
            "Can live with other non-aggressive fish."
        ],
        link: "https://en.wikipedia.org/wiki/Clownfish"
    },

    //BIRD
    parrot: {
        name: "Parrot",
        image: "/images/bird/Parrot.jpg",
        description: "Parrots are known for their intelligence, ability to mimic human speech, and bright, colorful feathers. They are highly social birds and form strong bonds with their human companions. Parrots need plenty of interaction and stimulation, as they can get bored easily.",
        origin: "Worldwide (Tropical and Subtropical regions)",
        lifespan: "15–50 years, depending on the species",
        color: "Green, Blue, Red, Yellow",
        personality: [
            "Highly intelligent and social.",
            "Can mimic sounds and speech.",
            "Requires plenty of mental stimulation.",
            "Can be loud and energetic."
        ],
        link: "https://en.wikipedia.org/wiki/Parrot"
    },
    budgerigar: {
        name: "Budgerigar",
        image: "/images/bird/Budgerigar.jpg",
        description: "Budgerigars, also known as budgies or parakeets, are small, friendly birds that make great pets. Known for their playful nature and ability to mimic human speech, they are one of the most popular pet birds. Budgies are active, curious, and easy to train.",
        origin: "Australia",
        lifespan: "5–10 years",
        color: "Green, Blue, Yellow, White",
        personality: [
            "Playful and active.",
            "Can mimic sounds and words.",
            "Friendly and social with humans.",
            "Enjoys interacting with other budgies."
        ],
        link: "https://en.wikipedia.org/wiki/Budgerigar"
    },
    cockatiel: {
        name: "Cockatiel",
        image: "/images/bird/Cockatiel.jpg",
        description: "Cockatiels are known for their distinctive crest on top of their head and their cheerful, whistling sounds. These small parrots are easy to care for and make excellent companions. Cockatiels are affectionate and enjoy human interaction, making them one of the most popular pet birds.",
        origin: "Australia",
        lifespan: "10–14 years",
        color: "Gray, Yellow, White, Orange",
        personality: [
            "Affectionate and playful.",
            "Enjoys whistling and making sounds.",
            "Can bond closely with their owners.",
            "Requires daily social interaction."
        ],
        link: "https://en.wikipedia.org/wiki/Cockatiel"
    },
        // Add more breeds as needed
    };

    // Retrieve the breed key from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const petKey = urlParams.get('pet'); // Fetch the 'pet' parameter from the URL

    if (petKey && petDetails[petKey]) {
        const pet = petDetails[petKey];

        // Update the pet picture
        const petImage = document.querySelector('.pet-picture img');
        petImage.src = pet.image;
        petImage.alt = pet.name;

        // Update the pet name
        document.querySelector('.pet-name h2').innerText = pet.name;

        // Update the description
        document.querySelector('.pet-description .pet-paragraph').innerText = pet.description;

        // Update origin
        document.querySelector('.origin span').innerText = `${pet.origin}`;

        // Update lifespan
        document.querySelector('.life-span span').innerText = `${pet.lifespan}`;

        // Update color
        document.querySelector('.color span').innerText = `${pet.color}`;

        // Update personality list
        const personalityList = document.querySelector('.pet-personality');
        personalityList.innerHTML = '<p><strong>Personality:</strong></p>';
        pet.personality.forEach(trait => {
            const li = document.createElement('li');
            li.innerText = trait;
            personalityList.appendChild(li);
        });

        // Update link
        document.querySelector('.pet-link a').href = pet.link;
    } else {
        document.querySelector('.pet-info').innerHTML = '<p>No details available for the selected pet.</p>';
    }
});
