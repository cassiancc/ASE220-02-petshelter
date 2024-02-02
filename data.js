let animals = [];
let index = 0;
const itemsPerPage = 9;

async function loadIndex() {
  try {
    let connection = await fetch("data.json");
    animals = await connection.json();
    displayAnimals(0, itemsPerPage); // Display initial set of animals
  } catch (error) {
    console.error(error);
  }

  document.getElementById("load-more").addEventListener("click", function() {
    if (index < animals.length) {
      displayAnimals(index, itemsPerPage);
    } else {
      this.style.display = 'none'; // Hide button if there are no more animals to show
    }
  });
}

function displayAnimals(start, count) {
  const container = document.querySelector("#cards-container");
  const end = start + count;
  for (let i = start; i < end && i < animals.length; i++) {
    const animal = animals[i];
    container.innerHTML += `
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
              <img src="images/${animal.sex.toLowerCase()}_gender_icon.png" alt="${animal.sex} Gender Icon" width="20" height="20"> ${animal.sex}
            </li>
            <li class="list-group-item">
              <img class="age" src="images/age_${animal.age}.png" alt="${animal.age} Years Old"> ${animal.age} Years Old
            </li>
          </ul>
          <div class="card-body">
            <button class="btn btn-primary" index="${i}">See more about ${animal.name}</button>
          </div>
        </div>
      </div>
    `;
  }
  index = end; // Update the index to the end of the current view
  attachEventListeners(); // Re-attach event listeners to new buttons
}

function attachEventListeners() {
  let toggle_buttons = document.querySelectorAll(".card-body button");
  toggle_buttons.forEach(function (toggle_button) {
    toggle_button.addEventListener("click", function() {
      modalDataFill(toggle_button.getAttribute("index"));
    });
  });
}

async function modalDataFill(index) {
  try {
    let connection = await fetch("data.json");
    animals = await connection.json();
  }
  catch (error) {
      console.log(error)
  }
  const animal = animals[index];
  var modal = new bootstrap.Modal(document.querySelector("#animal_modal"), {
    keyboard: false
  });
  document.querySelector(".modal-title").innerText = animal.name + " - " + animal.breed;

  let footer = document.querySelector(".modal-footer");
  footer.innerHTML = `
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <a href="/detail.html?index=${index}"><button type="button" class="btn btn-primary">Details page for ${animal.name}</button></a>
  `;

  modal.show();
}

async function loadDetail(index) {
  try {
    let connection = await fetch("data.json");
    animals = await connection.json();
  }
  catch (error) {
      console.log(error)
  }
  const animal = animals[index];
  document.getElementById('animalImage').innerHTML += 
  `<img src="/images/${animal.name.toLowerCase()}.webp" class="card-max" alt="${animal.name} the ${animal.breed}">`;
  document.getElementById('details').innerHTML += 
  `
  <div class="card more-info">
    <div class="card-body">
      <h5 class="card-title"><h1 id="content"></h1></h5>
      <p class="card-text">${animal.aboutMe + animal.aboutMeFull}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${animal.type} / ${animal.breed}</li>
      <li class="list-group-item">${animal.spayedNeutered ? animal.sex == "Male" ? "✅ Neutered" : "✅ Spayed" : "Not Fixed"}</li>
      <li class="list-group-item">
        <img src="images/${animal.sex.toLowerCase()}_gender_icon.png" alt="${animal.sex} Gender Icon" width="20" height="20"> ${animal.sex}
      </li>
      <li class="list-group-item">
        <img class="age" src="images/age_${animal.age}.png" alt="${animal.age} Years Old"> ${animal.age} Years Old
      </li>
      <li class="list-group-item">⚕️ ${animal.status[0]}</li>
      <li class="list-group-item">💉 ${animal.status[1]}</li>
      <li class="list-group-item">✅ ${animal.status[2]}</li>
      <li class="list-group-item">🗃️ ${animal.status[3]}</li>
      <li class="list-group-item"><strong>Animal ID:</strong> ${animal.animalID}</li>
      <li class="list-group-item"><strong>Microchip #:</strong> ${animal.microchipNumber}</li>
    </ul>
  </div>
  `;
}


loadIndex();
