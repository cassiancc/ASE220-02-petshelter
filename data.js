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
  
  document.querySelector("#addpetButton").addEventListener("click", function() {
    let modal = document.querySelector("#addpetModal");
    var addPetModal = new bootstrap.Modal(modal, {keyboard:false});
    console.log("test");
    addPetModal.show();
  });
}

function displayAnimals(start, count) {
  const container = document.querySelector("#cards-container");
  const end = start + count;
  for (let i = start; i < end && i < animals.length; i++) {
    const animal = animals[i];
    //Read image data if present, default to local image if not.
    if (animal.image != undefined) {
      image = animal.image
    }
    else {
      image = `images/${animal.name.toLowerCase()}.webp`
    }
    container.innerHTML += `
      <div class="col-lg-4 col-sm-6">
        <div class="card">
          <img src="${image}" class="card-img-top" alt="...">
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
      animalModalDataFill(toggle_button.getAttribute("index"));
    });
  });
}

async function animalModalDataFill(index) {
  const animal = animals[index];
  let am = document.querySelector("#animal_modal")
  var animalModal = new bootstrap.Modal(am, {
    keyboard: false
  });
  am.querySelector(".modal-title").innerText = animal.name + " - " + animal.breed;
  am.querySelector(".modal-body").innerHTML = `${animal.aboutMe + animal.aboutMeFull}`
  let footer = am.querySelector(".modal-footer");
  footer.innerHTML = `
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <a href="/detail.html?index=${index}"><button type="button" class="btn btn-primary">Learn more about ${animal.name}</button></a>
  `;

  animalModal.show();
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

var editElement;
$(()=>{
  $('#btn-pet-add').on('click',function(){
    //about me - seperate first sentence from rest of description
    let aboutMeFull = $('#add-pet-desc').val()
    aboutMe = aboutMeFull.split(". ")[0]
    aboutMeFull = aboutMeFull.split(". ")
    aboutMeFull.splice(0, 1)
    //create a pet element from results of the modal.
    const pet = {
      "name": $('#add-pet-name').val(),
      "type": $('#add-pet-type').val(),
      "breed": $('#add-pet-breed').val(),
      "sex": "Female",
      "color": "Tortoiseshell",
      "spayedNeutered": "Yes",
      "age": $('#add-pet-age').val(),
      "image": $('#add-pet-image').val(),
      "animalID": 75432,
      "microchipNumber": 972000321654987,
      "status": [
        "Health checked.",
        "Vaccinations up to date.",
        "Regularly dewormed.",
        "Microchipped."
      ],
      "aboutMe": aboutMe,
      "aboutMeFull":  aboutMeFull
    }

    //add the pet as the first element in our array of pets.
    animals.splice(0,0, pet);

    //re-display the card container with the new pet first.
    document.getElementById("cards-container").innerHTML = ""
    displayAnimals(0, itemsPerPage); // Display initial set of animals

    // hide the add pet modal as the new pet is added.
    $('#addpetModal').modal('hide');
    // clear the textbox - need to redo this after all inputs are there.
    $('#addpetModal textarea').val('');
  });

});
