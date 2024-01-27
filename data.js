
const animals = [
  {
    name: "Baxter",
    type: 'Dog',
    breed: 'Beagle',
    sex: 'Male',
    color: 'Tri-color (Black, Brown, White)',
    spayedNeutered: 'Yes',
    age: 5,
    animalID: 34621,
    microchipNumber: 982000364789210,
    status: [
      'Health checked.',
      'Vaccinations up to date.',
      'Regularly dewormed.',
      'Microchipped.'
    ],
    aboutMe: "Meet Baxter, a lovable Beagle with a knack for sniffing out fun! Baxter was rescued from a shelter and has blossomed into a friendly and outgoing boy. He loves long walks and has a keen sense of smell. He's great with kids and other dogs, making him the perfect family pet. His favorite pastime is chasing squirrels in the park and curling up for naps. Baxter is looking for a loving home where he can share his endless affection and playful spirit."
  },
  {
    name: "Luna",
    type: 'Cat',
    breed: 'Maine Coon',
    sex: 'Female',
    color: 'Grey with white markings',
    spayedNeutered: 'Yes',
    age: 3,
    animalID: 57281,
    microchipNumber: 981120019776432,
    status: [
      'Health checked.',
      'Vaccinations up to date.',
      'Regularly dewormed.',
      'Microchipped.'
    ],
    aboutMe: "Luna is a majestic Maine Coon with a fluffy grey coat and striking white markings. She was found as a stray and has since become a gentle and affectionate companion. Luna enjoys perching on windowsills, watching birds, and being the center of attention. She's a bit shy at first but warms up quickly, especially if you have treats! Luna would thrive in a calm environment where she can relax and be pampered like the queen she is."
  },
  {
    name: "Sandy",
    type: 'Dog',
    breed: 'Golden Retriever',
    sex: 'Female',
    color: 'Golden',
    spayedNeutered: 'Yes',
    age: 7,
    animalID: 41382,
    microchipNumber: 985112004567890,
    status: [
      'Health checked.',
      'Vaccinations up to date.',
      'Regularly dewormed.',
      'Microchipped.'
    ],
    aboutMe: "Sandy is a heartwarming Golden Retriever with a golden coat as bright as her personality. Rescued from a neglectful situation, she has shown incredible resilience and love for life. Sandy is great with children and other pets, making her an ideal family dog. She enjoys outdoor adventures, especially swimming and fetching. Sandy is looking for a forever home where she can spread her joy and love."
  },
  {
    name: "Oliver",
    type: 'Cat',
    breed: 'Siamese',
    sex: 'Male',
    color: 'Seal Point',
    spayedNeutered: 'Yes',
    age: 2,
    animalID: 62894,
    microchipNumber: 981120025678902,
    status: [
      'Health checked.',
      'Vaccinations up to date.',
      'Regularly dewormed.',
      'Microchipped.'
    ],
    aboutMe: "Oliver is a sleek Siamese cat with striking blue eyes and a seal point coat. Found wandering in a neighborhood, he's adapted well to shelter life but is eager for a permanent home. Oliver is vocal, expressing his thoughts freely, and enjoys interactive playtime. He's affectionate and loves to be close to his human companions, often following them around the house. Oliver would do best in a home where he can receive plenty of attention and love."
  },
  {
    name: "Max",
    type: 'Dog',
    breed: 'Labrador Retriever',
    sex: 'Male',
    color: 'Chocolate',
    spayedNeutered: 'Yes',
    age: 4,
    animalID: 47920,
    microchipNumber: 985120031478902,
    status: [
      'Health checked.',
      'Vaccinations up to date.',
      'Regularly dewormed.',
      'Microchipped.'
    ],
    aboutMe: "Max is a charming Chocolate Labrador with a love for life and a tail that never stops wagging. Rescued from an overcrowded shelter, Max has shown immense gratitude and loyalty to his caregivers. He is full of energy and would thrive in a home with a backyard or regular access to outdoor activities. Max is great with children and other dogs, and he's always up for a game of fetch or a leisurely walk. His ideal home would be with an active family who can match his energy and zest for life."
  },
  {
    name: "Daisy",
    type: 'Cat',
    breed: 'Persian',
    sex: 'Female',
    color: 'White',
    spayedNeutered: 'Yes',
    age: 6,
    animalID: 58329,
    microchipNumber: 981120036712345,
    status: [
      'Health checked.',
      'Vaccinations up to date.',
      'Regularly dewormed.',
      'Microchipped.'
    ],
    aboutMe: "Daisy is a stunning white Persian cat with a luxurious coat and gentle demeanor. She was surrendered by an owner who could no longer care for her. Daisy is a bit of a diva and loves being the center of attention. She enjoys being groomed and will happily sit in your lap for hours. She's not fond of loud noises or fast movements, so a quiet and calm household would be ideal. Daisy is looking for a loving home where she can be pampered and adored."
  },
  {
    name: "Charlie",
    type: 'Dog',
    breed: 'Dachshund',
    sex: 'Male',
    color: 'Dapple (Black and Gray)',
    spayedNeutered: 'Yes',
    age: 3,
    animalID: 49583,
    microchipNumber: 982000367829101,
    status: [
      'Health checked.',
      'Vaccinations up to date.',
      'Regularly dewormed.',
      'Microchipped.'
    ],
    aboutMe: "Charlie is a spirited Dapple Dachshund with a playful personality. He was found as a stray and has since shown an incredible zest for life. Charlie loves exploring, whether it's a new trail or the corners of his home. He's a bit mischievous and enjoys hiding his toys. Charlie would do well in a home with an individual or family who enjoys fun and adventure. He's small but has a big heart and a lot of love to give."
  },
  {
    name: "George",
    type: 'Cat',
    breed: 'British Shorthair',
    sex: 'Male',
    color: 'Blue (Gray)',
    spayedNeutered: 'Yes',
    age: 4,
    animalID: 61029,
    microchipNumber: 985112007651234,
    status: [
      'Health checked.',
      'Vaccinations up to date.',
      'Regularly dewormed.',
      'Microchipped.'
    ],
    aboutMe: "George is a robust British Shorthair with a striking blue-gray coat and a calm, dignified demeanor. Rescued from a busy city environment, he's adapted well to a quieter life. George enjoys leisurely days, lounging in sunny spots, and watching the world go by. He's not overly demanding for attention but appreciates a good chin scratch and will purr loudly in response. George is a bit reserved at first but becomes a loyal companion once he feels comfortable. He would be perfect for someone seeking a low-maintenance, independent cat."
  },
  {
    name: "Bella",
    type: 'Dog',
    breed: 'Boxer',
    sex: 'Female',
    color: 'Fawn with white markings',
    spayedNeutered: 'Yes',
    age: 6,
    animalID: 50824,
    microchipNumber: 982000360234567,
    status: [
      'Health checked.',
      'Vaccinations up to date.',
      'Regularly dewormed.',
      'Microchipped.'
    ],
    aboutMe: "Bella is a spirited Boxer with a fawn coat and charming white markings. She was rescued from a neglectful situation and has shown immense love and gratitude to her caregivers. Bella is energetic and playful, enjoying activities like running and playing fetch. She's great with older children and would thrive in a home where she can be active and engaged. Bella has a big personality and would be a fantastic companion for someone who loves adventure and fun."
  },
  {
    name: "Sophie",
    type: 'Cat',
    breed: 'Ragdoll',
    sex: 'Female',
    color: 'Seal point with blue eyes',
    spayedNeutered: 'Yes',
    age: 1,
    animalID: 63845,
    microchipNumber: 985112008765432,
    status: [
      'Health checked.',
      'Vaccinations up to date.',
      'Regularly dewormed.',
      'Microchipped.'
    ],
    aboutMe: "Sophie is a young Ragdoll cat with a soft seal point coat and mesmerizing blue eyes. She was found as a kitten and raised in a foster home. Sophie is incredibly affectionate, often seeking out laps to curl up in. She's playful and enjoys interactive toys, but she's also content to relax and watch the world go by. Sophie gets along well with other pets and would be an excellent addition to a loving family or individual looking for a gentle and loving companion."
  }
];


animals.forEach(function(animal) {
  document.querySelector(".row").innerHTML +=
  `
  <div class="col">
  <div class="card">
    <img src="./images/${animal.name.toLocaleLowerCase()}.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${animal.name}</h5>
      <p class="card-text">${animal.aboutMe}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${animal.type} / ${animal.breed}</li>
      <li class="list-group-item">
        <img src="images/female_gender_icon.png" alt="Female Gender Icon" width="20" height="20"> Female
      </li>
      <li class="list-group-item">
        <img src="images/six_candle.png" alt="${animal.age} Years Old" width="35" height="35"> Years Old
      </li>
    </ul>
    <div class="card-body">
      <a href="bella/index.html" class="btn btn-primary">See more about ${animal.name}</a>
    </div>
  </div>
  </div>
  `
})