

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
        // DOGS
        "german-shepherd": {
            name: "German Shepherd",
            image: "/images/dog/German-Shepherd.jpg",
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
        "labrador-retriever": {
            name: "Labrador Retriever",
            image: "/images/dog/Labrador-Retriever.jpg",  
            description: "Labrador Retrievers are friendly, outgoing, and high-spirited dogs that are easy to train. They are one of the most popular breeds in the world and make excellent family pets due to their playful and loving nature.",
            origin: "Canada",
            lifespan: "10–12 years",
            color: "Black, Yellow, Chocolate",
            personality: [
                "Friendly and social.",
                "Eager to please.",
                "Great with children and other pets.",
                "Active and requires regular exercise."
            ],
            link: "https://en.wikipedia.org/wiki/Labrador_Retriever"
        },
        "bulldog": {
            name: "Bulldog",
            image: "/images/dog/Bulldog.jpg",  
            description: "Bulldogs are known for their muscular build and lovable, affectionate nature. Despite their tough exterior, they are gentle and get along well with children and other pets. Bulldogs are loyal companions and are known for their calm and laid-back attitude.",
            origin: "England",
            lifespan: "8–12 years",
            color: "Fawn, White, Brindle",
            personality: [
                "Affectionate and loyal.",
                "Calm and laid-back.",
                "Good with children and pets.",
                "Low-maintenance in terms of exercise, but needs regular grooming."
            ],
            link: "https://en.wikipedia.org/wiki/Bulldog"
        },
        "beagle": {
            name: "Beagle",
            image: "/images/dog/Beagle.jpg",
            description: "Beagles are small to medium-sized dogs known for their keen sense of smell and tracking abilities. They are friendly, curious, and make excellent companions.",
            origin: "England",
            lifespan: "12–15 years",
            color: "Tri-color, Lemon, White and Tan",
            personality: [
                "Cheerful and sociable.",
                "Energetic and playful.",
                "Loves to explore and sniff around.",
                "Great with families and other pets."
            ],
            link: "https://en.wikipedia.org/wiki/Beagle"
        },
        "shih-tzu": {
            name: "Shih Tzu",
            image: "/images/dog/Shih-Tzu.jpg",
            description: "Shih Tzus are small, toy-sized dogs known for their long, luxurious coats and charming personalities. They are affectionate, playful, and great for apartment living.",
            origin: "China",
            lifespan: "10–16 years",
            color: "Black, White, Gold, Brindle",
            personality: [
                "Playful and friendly.",
                "Loves attention and companionship.",
                "Adaptable to indoor living.",
                "Requires regular grooming."
            ],
            link: "https://en.wikipedia.org/wiki/Shih_Tzu"
        },
        "pomeranian": {
            name: "Pomeranian",
            image: "/images/dog/Pomeranian.jpg",
            description: "Pomeranians are small, fluffy dogs known for their fox-like faces and lively personalities. They are highly energetic and make great companions.",
            origin: "Germany/Poland",
            lifespan: "12–16 years",
            color: "Orange, Black, White, Cream, Blue",
            personality: [
                "Bold and outgoing.",
                "Energetic and playful.",
                "Loyal to their owners.",
                "Alert and makes a good watchdog."
            ],
            link: "https://en.wikipedia.org/wiki/Pomeranian_(dog)"
        },

        //  CATS
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
        "maine-coon": {
            name: "Maine Coon",
            image: "/images/cat/Maine-Coon.jpg", 
            description: "Maine Coons are one of the largest domestic cat breeds. They are known for their friendly, playful, and intelligent nature. Maine Coons are also highly social and enjoy interacting with their human companions. They have long, thick fur and a bushy tail, which helps them adapt to cold climates.",
            origin: "United States ",
            lifespan: "12–15 years",
            color: "Tabby, Black, Blue, White, Red",
            personality: [
                "Friendly and social.",
                "Intelligent and trainable.",
                "Playful and curious.",
                "Loves water and enjoys playing in it."
            ],
            link: "https://en.wikipedia.org/wiki/Maine_Coon"
        },
        "bengal": {
            name: "Bengal Cat",
            image: "/images/cat/Bengal.jpg",
            description: "Bengal cats are known for their exotic, leopard-like spotted coat and high energy. They are intelligent, active, and love interactive playtime with their owners.",
            origin: "United States",
            lifespan: "12–16 years",
            color: "Spotted or Rosetted: Brown, Silver, Snow",
            personality: [
                "Active and playful.",
                "Highly curious and adventurous.",
                "Loves climbing and exploring.",
                "Affectionate but independent."
            ],
            link: "https://en.wikipedia.org/wiki/Bengal_cat"
        },
        "ragdoll": {
            name: "Ragdoll",
            image: "/images/cat/Ragdoll.jpg",
            description: "Ragdolls are large, gentle cats known for their laid-back personality and tendency to relax when picked up. They are affectionate and enjoy spending time with their owners.",
            origin: "United States",
            lifespan: "12–17 years",
            color: "Seal, Blue, Chocolate, Lilac, Cream",
            personality: [
                "Calm and gentle.",
                "Affectionate and loyal.",
                "Great with children and other pets.",
                "Loves cuddling and attention."
            ],
            link: "https://en.wikipedia.org/wiki/Ragdoll"
        },
        "sphynx": {
            name: "Sphynx",
            image: "/images/cat/Sphynx.jpg",
            description: "Sphynx cats are known for their hairless bodies, which highlight their unique features. They are affectionate, playful, and enjoy being the center of attention.",
            origin: "Canada",
            lifespan: "8–14 years",
            color: "Variety of skin tones including Pink, Black, Cream, Gray",
            personality: [
                "Loving and affectionate.",
                "Playful and energetic.",
                "Thrives on human companionship.",
                "Sensitive to temperature changes."
            ],
            link: "https://en.wikipedia.org/wiki/Sphynx_cat"
        },
        "scottish-fold": {
            name: "Scottish Fold",
            image: "/images/cat/Scottish-Fold.jpg",
            description: "Scottish Folds are known for their distinctive folded ears and round, owl-like faces. They are sweet, calm, and enjoy being around people.",
            origin: "Scotland",
            lifespan: "11–14 years",
            color: "Variety including White, Black, Blue, Tabby",
            personality: [
                "Calm and gentle.",
                "Loves human interaction.",
                "Adapts well to indoor living.",
                "Playful but not overly active."
            ],
            link: "https://en.wikipedia.org/wiki/Scottish_Fold"
        },
        // FISH
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

        // Update the page title to reflect the pet's name
        document.title = `${pet.name} - Pet Encyclopedia`; // This changes the title dynamically
    } else {
        document.querySelector('.pet-info').innerHTML = '<p class="no-details">No details available for the selected pet. :(</p>';
    }
});
