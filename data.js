
async function loadIndex() {
  try {
    let connection = await fetch("data.json");
    animals = await connection.json();
  }
  catch (error) {
      console.log(error)
  }
  index = 0
  animals.forEach(function(animal) {
    document.querySelector(".row").innerHTML +=
    `
    <div class="col">
    <div class="card">
      <img src="images/${animal.name.toLowerCase()}.webp" class="card-img-top" alt="...">
      <div class="card-body about-me">
        <h5 class="card-title">${animal.name}</h5>
        <p class="card-text">${animal.aboutMe}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${animal.type} / ${animal.breed}</li>
        <li class="list-group-item">
          <img src="images/${animal.sex.toLowerCase()}_gender_icon.png" alt="Female Gender Icon" width="20" height="20"> ${animal.sex}
        </li>
        <li class="list-group-item">
          <img class="age" src="images/age_${animal.age}.png" alt="${animal.age} Years Old"> Years Old
        </li>
      </ul>
      <div class="card-body">
        <a href="detail.html?index=${index}" class="btn btn-primary">See more about ${animal.name}</a>
      </div>
    </div>
    </div>
    `
    index++
  })
}

async function loadDetail(index) {
  try {
    let connection = await fetch("data.json");
    animals = await connection.json();
  }
  catch (error) {
      console.log(error)
  }
  const animal = animals[index]
  document.getElementById('animalImage').innerHTML +=
  `<img src="/images/${animal.name.toLowerCase()}.webp" class="card-max" alt="${animal.name} the ${animal.breed}">`
  document.getElementById(`details`).innerHTML += 
  `
  <div class="card more-info">
          <div class="card-body">
            <h5 class="card-title"><h1 id="content"></h1></h5>
            <p class="card-text">${animal.aboutMe + animal.aboutMeFull}
              </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${animal.type} / ${animal.breed}</li>
            <li class="list-group-item">${animal.spayedNeutered ? animal.sex=="Male" ? "✅ Neutered" : "✅ Spayed" : "Not Fixed"}</li>
            <li class="list-group-item">
            <img src="images/${animal.sex.toLowerCase()}_gender_icon.png" alt="${animal.sex} Gender Icon" width="20" height="20"> ${animal.sex}
            </li>
            <li class="list-group-item">
            <img class="age" src="images/age_${animal.age}.png" alt="${animal.age} Years Old"> Years Old
            </li>
            <li class="list-group-item">⚕️ ${animal.status[0]}</li>
            <li class="list-group-item">💉 ${animal.status[1]}</li>
            <li class="list-group-item">✅ ${animal.status[2]}</li>
            <li class="list-group-item">🗃️ ${animal.status[3]}</li>
            <li class="list-group-item"><strong>Animal ID:</strong> ${animal.animalID}</li>
            <li class="list-group-item"><strong>Microchip #:</strong> ${animal.microchipNumber}</li>
          </ul>
        </div>
  `
}