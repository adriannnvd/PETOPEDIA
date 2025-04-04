

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
            image: "../assets/images/dog/German-Shepherd.jpg",
            description: "German Shepherds are renowned for their intelligence, loyalty, and adaptability, making them one of the most versatile dog breeds. They excel in various roles such as police work, search and rescue, and as service animals due to their trainable nature and strong work ethic. Beyond their professional abilities, they are loving and devoted family companions, known for being gentle with children and fiercely protective of their loved ones. With their boundless energy and keen intelligence, they thrive in active households and enjoy tasks that challenge both their minds and bodies.",
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
            image: "../assets/images/dog/Labrador-Retriever.jpg",  
            description: "Labrador Retrievers are known for their friendly, energetic, and outgoing personalities, making them one of the most beloved dog breeds worldwide. They are highly intelligent and eager to please, which makes them easy to train for various roles, including assistance work and therapy. Their playful and loving nature makes them excellent companions for families, especially those with children, as they are patient and gentle. Labradors thrive in active households where they can enjoy plenty of exercise and affection.",
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
            image: "../assets/images/dog/Bulldog.jpg",  
            description: "Bulldogs are cherished for their sturdy, muscular build and their sweet, affectionate disposition. Beneath their tough appearance lies a gentle soul that bonds well with children and other pets, making them ideal family companions. Known for their loyalty, Bulldogs thrive in loving homes where they can enjoy plenty of attention. Their calm and relaxed demeanor makes them well-suited to indoor living, while their playful side ensures they are delightful to be around.",
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
            image: "../assets/images/dog/Beagle.jpg",
            description: "Beagles are small to medium-sized dogs renowned for their exceptional sense of smell and tracking prowess, traits that make them popular as hunting and detection dogs. Their friendly and curious nature makes them delightful companions, especially for active families. Beagles are highly social and thrive in environments where they can engage in play and exploration. Their loyal and cheerful demeanor ensures they quickly become beloved members of any household.",
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
            image: "../assets/images/dog/Shih-Tzu.jpg",
            description: "Shih Tzus are small, toy-sized dogs celebrated for their long, flowing coats and endearing personalities. Known for being affectionate and playful, they form strong bonds with their owners and thrive on companionship. Their friendly and adaptable nature makes them excellent pets for families and individuals alike, especially in apartment settings. Despite their regal appearance, Shih Tzus are low-maintenance when it comes to exercise, preferring short walks and indoor play.",
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
            image: "../assets/images/dog/Pomeranian.jpg",
            description: "Pomeranians are small, fluffy dogs recognized for their fox-like faces and vibrant, outgoing personalities. They are highly energetic and thrive in active households, enjoying playtime and engaging with their owners. Despite their tiny size, they are confident and alert, often serving as excellent watchdogs. Their affectionate nature and adaptability make them delightful companions for both individuals and families.",
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
        "chow-chow": {
            name: "Chow Chow",
            image: "../assets/images/dog/Chow-Chow.jpg",
            description: "Chow Chows are distinguished by their lion-like mane and proud, dignified demeanor. They are independent and reserved but form deep bonds with their families, displaying unwavering loyalty. Known for their calm and composed nature, Chow Chows are best suited to experienced owners who understand their unique personality. Their striking appearance and devoted companionship make them a remarkable addition to any home.",
            origin: "China",
            lifespan: "8–12 years",
            color: "Red, Black, Blue, Cinnamon, Cream",
            personality: [
                "Independent and aloof.",
                "Highly loyal to their family.",
                "Requires socialization and training.",
                "Calm but protective."
            ],
            link: "https://en.wikipedia.org/wiki/Chow_Chow"
        },
        "siberian-husky": {
            name: "Siberian Husky",
            image: "../assets/images/dog/Siberian-Husky.jpg",
            description: "Siberian Huskies are energetic and outgoing dogs, renowned for their striking blue or multi-colored eyes and wolf-like appearance. They are friendly, sociable, and thrive in active households where they can channel their energy. Huskies are also known for their endurance and playful nature, making them excellent companions for those who enjoy outdoor adventures. Their intelligence and charm make them a beloved choice for dog enthusiasts worldwide.",
            origin: "Siberia, Russia",
            lifespan: "12–15 years",
            color: "Black, White, Gray, Red",
            personality: [
                "Energetic and playful.",
                "Highly social and friendly.",
                "Requires regular exercise.",
                "Known for their vocal howls."
            ],
            link: "https://en.wikipedia.org/wiki/Siberian_Husky"
        },
        "shiba-inu": {
            name: "Shiba Inu",
            image: "../assets/images/dog/Shiba-Inu.jpg",
            description: "Shiba Inus are small, agile dogs admired for their fox-like appearance, sharp features, and confident demeanor. They are spirited and independent yet form strong bonds with their families, making them loyal companions. Shibas are known for their clean habits and cat-like agility, thriving in both active households and calmer environments. Their bold and curious nature makes them a standout among dog breeds.",
            origin: "Japan",
            lifespan: "12–16 years",
            color: "Red, Black and Tan, Sesame, Cream",
            personality: [
                "Alert and confident.",
                "Independent yet loyal.",
                "Requires patience in training.",
                "Loves outdoor activities."
            ],
            link: "https://en.wikipedia.org/wiki/Shiba_Inu"
        },
        "great-dane": {
            name: "Great Dane",
            image: "../assets/images/dog/Great-Dane.jpg",
            description: "Great Danes are gentle giants celebrated for their calm and friendly nature, making them wonderful companions despite their imposing size. These affectionate dogs are great with families and often form strong bonds with their human companions. Known for their elegance and patience, Great Danes are equally at home lounging indoors or enjoying outdoor activities. Their loving temperament and loyal disposition make them a favorite among large dog breeds.",
            origin: "Germany",
            lifespan: "7–10 years",
            color: "Fawn, Black, Blue, Brindle, Harlequin",
            personality: [
                "Gentle and friendly.",
                "Affectionate with family.",
                "Needs space due to size.",
                "Calm and easygoing demeanor."
            ],
            link: "https://en.wikipedia.org/wiki/Great_Dane"
        },
        "border-collie": {
            name: "Border Collie",
            image: "../assets/images/dog/Border-Collie.jpg",
            description: "Border Collies are highly intelligent and energetic dogs, often considered the best herding breed.",
            origin: "Scotland and England",
            lifespan: "12–15 years",
            color: "Black and White, Red, Blue Merle",
            personality: [
                "Highly intelligent and trainable.",
                "Energetic and active.",
                "Thrives on mental stimulation.",
                "Excellent herding abilities."
            ],
            link: "https://en.wikipedia.org/wiki/Border_Collie"
        },
        "standard-poodle": {
            name: "Standard Poodle",
            image: "../assets/images/dog/Standard-Poodle.jpg",
            description: "Standard Poodles are highly intelligent and versatile dogs, admired for their hypoallergenic coats and elegant appearance. They excel in various activities, from obedience and agility to hunting and retrieving, showcasing their adaptability. Despite their refined look, they are playful, affectionate, and form strong bonds with their families. Standard Poodles thrive on mental and physical stimulation, making them ideal companions for active households.",
            origin: "Germany, France",
            lifespan: "12–15 years",
            color: "White, Black, Apricot, Brown",
            personality: [
                "Very intelligent and trainable.",
                "Energetic and playful.",
                "Loyal and affectionate.",
                "Hypoallergenic coat, great for people with allergies."
            ],
            link: "https://en.wikipedia.org/wiki/Poodle"
        },

        //  CATS
        persian: {
            name: "Persian Cat",
            image: "../assets/images/cat/persian.jpg",
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
            image: "../assets/images/cat/Siamese.jpeg",
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
            image: "../assets/images/cat/Maine-Coon.jpg", 
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
            image: "../assets/images/cat/Bengal.jpg",
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
            image: "../assets/images/cat/Ragdoll.jpg",
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
            image: "../assets/images/cat/Sphynx.jpg",
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
            image: "../assets/images/cat/Scottish-Fold.jpg",
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
        "japanese-bobtail": {
            name: "Japanese Bobtail",
            image: "../assets/images/cat/Japanese-Bobtail.jpg",
            description: "Japanese Bobtails are known for their distinctive short tails and playful personalities. They are intelligent and bring joy to their owners.",
            origin: "Japan",
            lifespan: "9–15 years",
            color: "Tricolor (Mi-ke), solid, or patterned",
            personality: [
                "Friendly and playful.",
                "Highly intelligent and curious.",
                "Active and enjoys games.",
                "Loyal to their owners."
            ],
            link: "https://en.wikipedia.org/wiki/Japanese_Bobtail"
        },
        "turkish-angora": {
            name: "Turkish Angora",
            image: "../assets/images/cat/Turkish-Angora.jpg",
            description: "Turkish Angoras are elegant, graceful cats known for their silky fur and affectionate nature. They are social and love being around their families.",
            origin: "Turkey",
            lifespan: "12–18 years",
            color: "White, Black, Blue, Cream, and others",
            personality: [
                "Affectionate and social.",
                "Intelligent and playful.",
                "Active and loves attention.",
                "Loyal and forms strong bonds."
            ],
            link: "https://en.wikipedia.org/wiki/Turkish_Angora"
        },
        "british-shorthair": {
            name: "British Shorthair",
            image: "../assets/images/cat/British-Shorthair.jpg",
            description: "The British Shorthair is a sturdy, plush-coated breed known for its round face and dense fur. These cats are calm, affectionate, and good-natured, making them excellent companions for families. They are independent but enjoy spending time with their owners.",
            origin: "United Kingdom",
            lifespan: "12–20 years",
            color: "Blue, Black, White, Cream, Red, Silver, Golden",
            personality: [
                "Calm and easygoing.",
                "Affectionate but not overly demanding.",
                "Loyal and forms strong bonds with owners.",
                "Great with children and other pets."
            ],
            link: "https://en.wikipedia.org/wiki/British_Shorthair"
        },
        "norwegian-forest": {
            name: "Norwegian Forest",
            image: "../assets/images/cat/Norwegian-Forest.jpg",
            description: "The Norwegian Forest Cat is a large, strong breed with a thick, water-resistant coat suited for cold climates. These cats are friendly, intelligent, and playful. They enjoy climbing and exploring but are also affectionate and loyal to their owners.",
            origin: "Norway",
            lifespan: "14–16 years",
            color: "White, Black, Blue, Red, Cream, Silver, Tortoiseshell",
            personality: [
                "Playful and adventurous.",
                "Affectionate but independent.",
                "Enjoys climbing and exploring.",
                "Loyal and bonds well with families."
            ],
            link: "https://en.wikipedia.org/wiki/Norwegian_Forest_cat"
        },
        "russian-blue": {
            name: "Russian Blue",
            image: "../assets/images/cat/Russian-Blue.jpg",
            description: "The Russian Blue is an elegant and intelligent breed known for its short, dense blue-gray coat and striking green eyes. These cats are gentle, reserved, and very affectionate with their families but may be shy around strangers.",
            origin: "Russia",
            lifespan: "15–20 years",
            color: "Blue-Gray",
            personality: [
                "Gentle and reserved.",
                "Affectionate with family but shy with strangers.",
                "Highly intelligent and enjoys interactive play.",
                "Quiet and well-mannered, making them excellent indoor pets."
            ],
            link: "https://en.wikipedia.org/wiki/Russian_Blue"
        },
        // FISH
        goldfish: {
        name: "Goldfish",
        image: "../assets/images/fish/Goldfish.jpg",
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
            image: "../assets/images/fish/Betta.jpg",
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
            image: "../assets/images/fish/Clownfish.jpg",
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
        guppy: {
            name: "Guppy",
            image: "../assets/images/fish/Guppy.jpg",
            description: "Guppies are vibrant and easy-to-care-for fish, ideal for beginners. They come in a variety of colors and patterns.",
            origin: "South America",
            lifespan: "1–3 years",
            color: "Variety including Red, Blue, Yellow, Green",
            personality: [
                "Peaceful and social.",
                "Active swimmers.",
                "Adaptable to different tank conditions.",
                "Easily breeds in captivity."
            ],
            link: "https://en.wikipedia.org/wiki/Guppy"
        },
        angelfish: {
            name: "Angelfish",
            image: "../assets/images/fish/Angelfish.jpg",
            description: "Angelfish are graceful freshwater fish with long fins and striking patterns. They are popular in aquariums for their beauty.",
            origin: "South America",
            lifespan: "10–15 years",
            color: "Silver, Black, Gold, Marble",
            personality: [
                "Semi-aggressive.",
                "Prefers planted tanks.",
                "Needs a peaceful tank environment.",
                "Pairs well with non-aggressive species."
            ],
            link: "https://en.wikipedia.org/wiki/Freshwater_angelfish"
        },
        tetra: {
            name: "Tetra",
            image: "../assets/images/fish/Tetra.jpg",
            description: "Tetras are small, colorful fish that thrive in schools. Their vibrant colors make them a popular choice for community tanks.",
            origin: "South America",
            lifespan: "5–10 years",
            color: "Variety including Neon, Red, Blue",
            personality: [
                "Peaceful and social.",
                "Enjoys living in schools.",
                "Active swimmers.",
                "Easily adapts to tank environments."
            ],
            link: "https://en.wikipedia.org/wiki/Tetra"
        },
        discus: {
            name: "Discus",
            image: "../assets/images/fish/Discus.jpg",
            description: "Discus fish are known for their vibrant colors and unique circular shape. They require more care but are highly rewarding for enthusiasts.",
            origin: "Amazon River Basin",
            lifespan: "10–15 years",
            color: "Variety including Red, Blue, Green",
            personality: [
                "Social and peaceful.",
                "Thrives in planted tanks.",
                "Sensitive to water conditions.",
                "Forms strong bonds with tank mates."
            ],
            link: "https://en.wikipedia.org/wiki/Discus_(fish)"
        },
        zebrafish: {
            name: "Zebrafish",
            image: "../assets/images/fish/Zebrafish.jpg",
            description: "Zebrafish are small, striped fish that are hardy and great for beginner aquarists. They are highly active and social.",
            origin: "South Asia",
            lifespan: "2–5 years",
            color: "Silver with Blue Stripes",
            personality: [
                "Hardy and active.",
                "Enjoys schooling.",
                "Easy to care for.",
                "Adapts well to various tank setups."
            ],
            link: "https://en.wikipedia.org/wiki/Zebrafish"
        },
        "molly": {
            name: "Molly Fish",
            image: "../assets/images/fish/Molly.jpg",
            description: "Molly fish are hardy, easy to care for, and come in a variety of colors. They are often kept in freshwater aquariums as they adapt to various conditions.",
            origin: "North and Central America",
            lifespan: "3–5 years",
            color: "Black, White, Gold, Dalmatian",
            personality: [
                "Friendly and active.",
                "Tolerates a wide range of water conditions.",
                "Best kept in schools.",
                "Can be kept with other peaceful fish."
            ],
            link: "https://en.wikipedia.org/wiki/Molly_fish"
        },
        "oscar": {
            name: "Oscar",
            image: "../assets/images/fish/Oscar.jpg",
            description: "Oscar fish are intelligent and can recognize their owners, often responding to feeding time with excitement. They are territorial and require a spacious tank. Their bold personality makes them fascinating pets for experienced fish keepers.",
            origin: "South America",
            lifespan: "10–15 years",
            color: "Red, Orange, Tiger, Albino",
            personality: [
                "Highly intelligent and interactive.",
                "Territorial and can be aggressive.",
                "Needs a large tank with strong filtration.",
                "Can be trained to recognize their owners."
            ],
            link: "https://en.wikipedia.org/wiki/Oscar_(fish)"
        },
        "corydoras": {
            name: "Corydoras",
            image: "../assets/images/fish/Corydoras.jpg",
            description: "Corydoras catfish are small, peaceful bottom-dwellers that help keep aquariums clean by scavenging leftover food. They are social and prefer to be kept in groups. Their hardy nature makes them great for beginners.",
            origin: "South America",
            lifespan: "5–10 years",
            color: "Bronze, Albino, Panda, Peppered",
            personality: [
                "Peaceful and social.",
                "Active bottom-dweller.",
                "Helps keep the tank clean.",
                "Prefers to be kept in groups."
            ],
            link: "https://en.wikipedia.org/wiki/Corydoras"
        },
        "swordtail": {
            name: "Swordtail",
            image: "../assets/images/fish/Swordtail.jpg",
            description: "Swordtail fish are livebearers known for their distinctive tail extensions in males. They are hardy, easy to care for, and thrive in community tanks. Their active and peaceful nature makes them great for beginners.",
            origin: "Central America",
            lifespan: "3–5 years",
            color: "Red, Green, Black, Yellow",
            personality: [
                "Hardy and easy to care for.",
                "Peaceful and good for community tanks.",
                "Active swimmer and playful.",
                "Males have a distinctive sword-like tail."
            ],
            link: "https://en.wikipedia.org/wiki/Swordtail"
        },

        //BIRD
        "parrot": {
            name: "Parrot",
            image: "../assets/images/bird/Parrot.jpg",
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
        "budgerigar": {
            name: "Budgerigar",
            image: "../assets/images/bird/Budgerigar.jpg",
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
        "cockatiel": {
            name: "Cockatiel",
            image: "../assets/images/bird/Cockatiel.jpg",
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
        "canary": {
            name: "Canary",
            image: "../assets/images/bird/Canary.jpg",
            description: "Canaries are small songbirds known for their beautiful singing abilities. They are relatively easy to care for and come in a variety of colors. Males are particularly vocal and enjoy singing throughout the day.",
            origin: "Macaronesian Islands",
            lifespan: "5–10 years",
            color: "Yellow, Orange, White, Red",
            personality: [
                "Excellent singers and melodious.",
                "Low-maintenance and easy to care for.",
                "Prefers being alone rather than in pairs.",
                "Energetic and enjoys flying around its cage."
            ],
            link: "https://en.wikipedia.org/wiki/Canary_(bird)"
        },
        "finch": {
            name: "Finch",
            image: "../assets/images/bird/Finch.jpg",
            description: "Finches are small, active birds that thrive in social groups. They are known for their soft chirping sounds and are best suited for large cages or aviaries where they can fly freely.",
            origin: "Worldwide",
            lifespan: "4–7 years",
            color: "Brown, White, Black, Red",
            personality: [
                "Social and prefers to live in pairs or groups.",
                "Very active and loves flying around.",
                "Requires a spacious cage or aviary.",
                "Makes soft, pleasant chirping sounds."
            ],
            link: "https://en.wikipedia.org/wiki/Finch"
        },
        "lovebird": {
            name: "Lovebird",
            image: "../assets/images/bird/Lovebird.jpg",
            description: "Lovebirds are small parrots known for their affectionate nature and strong bonds with their companions. They are social, playful, and require regular interaction to stay happy and healthy.",
            origin: "Africa",
            lifespan: "10–15 years",
            color: "Green, Blue, Peach, Yellow",
            personality: [
                "Highly affectionate and social.",
                "Forms strong bonds with humans or other birds.",
                "Playful and energetic, loves toys and interaction.",
                "Needs companionship to prevent loneliness."
            ],
            link: "https://en.wikipedia.org/wiki/Lovebird"
        },
        "cockatoo": {
            name: "Cockatoo",
            image: "../assets/images/bird/Cockatoo.jpg",
            description: "Cockatoos are intelligent and affectionate birds that form deep bonds with their owners. They are known for their playful nature and expressive crests, which they raise when excited or curious.",
            origin: "Australia, Indonesia, Philippines",
            lifespan: "40–60 years",
            color: "White, Pink, Black, Grey",
            personality: [
                "Highly intelligent and social.",
                "Loves human interaction and attention.",
                "Can be loud and demanding.",
                "Requires mental stimulation to stay happy."
            ],
            link: "https://en.wikipedia.org/wiki/Cockatoo"
        },
        "macaw": {
            name: "Macaw",
            image: "../assets/images/bird/Macaw.jpg",
            description: "Macaws are large, colorful parrots known for their intelligence and strong social bonds. They are excellent mimics and can learn words and phrases. They require a lot of space and mental stimulation.",
            origin: "Central and South America",
            lifespan: "30–50 years",
            color: "Red, Blue, Yellow, Green",
            personality: [
                "Highly intelligent and talkative.",
                "Loyal and forms deep bonds with owners.",
                "Needs a lot of space and interaction.",
                "Playful and enjoys learning tricks."
            ],
            link: "https://en.wikipedia.org/wiki/Macaw"
        },
        "pigeon": {
            name: "Pigeon",
            image: "../assets/images/bird/Pigeon.jpg",
            description: "Pigeons are intelligent birds known for their homing abilities. They are gentle and can be trained to recognize their owners. They have been used in history as messengers due to their excellent navigation skills.",
            origin: "Worldwide",
            lifespan: "5–15 years",
            color: "Grey, White, Brown, Black",
            personality: [
                "Highly intelligent with excellent memory.",
                "Gentle and easy to tame.",
                "Can recognize human faces.",
                "Strong homing instinct and navigation skills."
            ],
            link: "https://en.wikipedia.org/wiki/Pigeon"
        },
        "quaker": {
            name: "Quaker Parrot",
            image: "../assets/images/bird/Quaker.jpg",
            description: "Quaker parrots, also known as Monk Parakeets, are social and intelligent birds that can mimic human speech. They are known for their playful and curious nature, making them great pets for interactive owners.",
            origin: "South America",
            lifespan: "20–30 years",
            color: "Green, Blue, Grey, Yellow",
            personality: [
                "Excellent talkers and mimics.",
                "Social and loves attention.",
                "Curious and playful, enjoys exploring.",
                "Can be territorial with their cage."
            ],
            link: "https://en.wikipedia.org/wiki/Monk_parakeet"
        },
        "toucan": {
            name: "Toucan",
            image: "../assets/images/bird/Toucan.jpg",
            description: "Toucans are known for their large, colorful beaks and playful nature. They are social birds that require a spacious environment and a diet rich in fruits. Their intelligence makes them engaging pets, though they need specialized care.",
            origin: "South America",
            lifespan: "15–20 years",
            color: "Black, White, Yellow, Orange",
            personality: [
                "Playful and active.",
                "Social and enjoys human interaction.",
                "Requires a specialized diet of fresh fruits.",
                "Needs a large, enriched enclosure."
            ],
            link: "https://en.wikipedia.org/wiki/Toucan"
        },
        "hornbill": {
            name: "Hornbill",
            image: "../assets/images/bird/Hornbill.jpg",
            description: "Hornbills are striking birds known for their large, curved bills and distinctive casques on top of their beaks. Native to parts of Africa and Asia, they are known for their unique nesting behavior and their diverse and vibrant appearances. Hornbills are social birds and are often found in pairs or small groups.",
            origin: "Africa, Asia",
            lifespan: "30–40 years",
            color: "Black, White, Yellow, Orange",
            personality: [
                "Social birds, often found in pairs or small groups.",
                "Known for their unique beak and casque.",
                "Vocal and can produce a variety of sounds.",
                "Strongly territorial and often use their beaks in courtship rituals."
            ],
            link: "https://en.wikipedia.org/wiki/Hornbill"
        },
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
