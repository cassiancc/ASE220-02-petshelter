let animals = [];
let index = 0;
const itemsPerPage = 9;
let animalsVisible = 9;

async function loadIndex() {
    try {
        const response = await fetch("data.json");
        animals = await response.json();
        displayAnimals(0, itemsPerPage, false);
    } catch (error) {
        console.error('Failed to load animals:', error);
    }

    document.getElementById("load-more").addEventListener("click", function() {
      if (index < animals.length) {
          displayAnimals(index, itemsPerPage, true); // Append the next set of animals
          animalsVisible += itemsPerPage;
      }
      if (index >= animals.length) {
          this.style.display = 'none'; // Hide the button if all animals are displayed
      }
  });  
  // below event listeners only need to be attached once
 // Add Pet functionality
 $(document).on('click', '#btn-pet-add', function() {
  let aboutMeFull = $('#add-pet-desc').val();
  let aboutMe = aboutMeFull.split(". ")[0];
  aboutMeFull = aboutMeFull.substring(aboutMe.length).trim();
  const pet = {
      name: $('#add-pet-name').val(),
      type: $('#add-pet-type').val(),
      breed: $('#add-pet-breed').val(),
      sex: $('input[name="add-pet-gender"]:checked').val(),
      age: $('#add-pet-age').val(),
      image: $('#add-pet-image').val(),
      aboutMe: aboutMe,
      aboutMeFull: aboutMeFull
  };

  animals.unshift(pet);
  displayAnimals(0, itemsPerPage);
  $('#addpetModal').modal('hide');
  $(".modal-backdrop").remove();
});
$(document).on('click', '#addpetButton', function() {
  // clear values
  $('#add-pet-name').val(""); 
  $('#add-pet-type').val(""); 
  $('#add-pet-breed').val("");
  $('#add-pet-age').val("");
  $('#add-pet-desc').val("");
  $('[name="add-pet-gender"]').prop("checked", false);
 $("#addpetModal").modal('show'); 
 
});
    

// every close button closes open modals
$(document).on('click', '.btn-close', function() {
  $('.show').modal('hide');
  $(".modal-backdrop").remove();
  document.body.css({overflow: 'visible'});
});
$(document).on('click', '.btn-secondary', function() {
$('.show').modal('hide');
$(".modal-backdrop").remove();
document.body.css({overflow: 'visible'});
});
}

function displayAnimals(start, count, append = false) {
  const container = document.querySelector("#cards-container");
  if (!append) {
      container.innerHTML = ''; // Clear the container if we're not appending
      index = 0; // Reset index if we're not appending
  }

  const end = Math.min(start + count, animals.length);
  for (let i = start; i < end; i++) {
      const animal = animals[i];
      let image = animal.image ? animal.image : `images/${animal.name.toLowerCase()}.webp`;
      const cardHTML = `
          <div class="col-lg-4 col-sm-6 col-md-4 mb-4">
              <div class="card h-100">
                  <img src="${image}" class="card-img-top" alt="${animal.name}">
                  <div class="card-body">
                      <h5 class="card-title">${animal.name}</h5>
                      <p class="card-text">${animal.aboutMe}</p>
                      <button class="btn btn-primary see-more-btn" data-index="${i}">See more</button>
                      <button class="btn btn-info edit-btn" data-index="${i}" data-bs-toggle="modal" data-bs-target="#editPetModal">Edit</button>
                      <button class="btn btn-danger delete-btn" data-index="${i}">Delete</button>
                  </div>
              </div>
          </div>
      `;
      container.innerHTML += cardHTML; // Always append new cards
  }

  index = end; // Update the global index after appending

  // every time animals are reloaded, new event listeners are attached for them
  attachEventListeners();
}


function attachEventListeners() {
    document.querySelectorAll(".see-more-btn").forEach(button => {
        button.addEventListener("click", function() {
            const index = this.getAttribute("data-index");
            animalModalDataFill(index);
        });
    });

    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", function() {
            const index = this.getAttribute("data-index");
            fillEditModal(index);
        });
    });

    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function() {
            const index = this.getAttribute("data-index");
            deleteAnimal(index);
        });
    });
    
     
}

function deleteAnimal(index) {
  animals.splice(index, 1);
  displayAnimals(0, animalsVisible, false); // Refresh the list, showing items up to the current index
}

function fillEditModal(index) {
    const animal = animals[index];
    document.getElementById('edit-pet-name').value = animal.name;
    document.getElementById('edit-pet-type').value = animal.type;
    document.getElementById('edit-pet-breed').value = animal.breed;
    document.getElementById('edit-pet-age').value = animal.age;
    document.getElementById('edit-pet-desc').value = animal.aboutMe;
    document.getElementById('save-pet-changes').setAttribute('data-index', index);
    if (animal.sex == "Male") {
        document.getElementById('edit-pet-gender-male').checked = true
    }
    else {
        document.getElementById('edit-pet-gender-female').checked = true
    }


}


document.getElementById('save-pet-changes').addEventListener('click', function() {
    const index = this.getAttribute('data-index');
    saveEditedAnimal(index);
});

function saveEditedAnimal(index) {
    const animal = animals[index];
    animal.name = document.getElementById('edit-pet-name').value;
    animal.type = document.getElementById('edit-pet-type').value;
    animal.breed = document.getElementById('edit-pet-breed').value;
    animal.age = document.getElementById('edit-pet-age').value;
    animal.aboutMe = document.getElementById('edit-pet-desc').value;
    if (document.getElementById('edit-pet-gender-male').checked == true) {
        animal.sex = "Male"
    }
    else {
        animal.sex = "Female"
    }

    $('#editPetModal').modal('hide');
    displayAnimals(0, animalsVisible, false);
}

function animalModalDataFill(index) {
    const animal = animals[index];
    let modal = document.querySelector("#animal_modal");
    var animalModal = new bootstrap.Modal(modal, {keyboard: false});
    modal.querySelector(".modal-title").innerText = animal.name + " - " + animal.breed;
    modal.querySelector(".modal-body").innerHTML = animal.aboutMe + " " + (animal.aboutMeFull || "");
    let footer = modal.querySelector(".modal-footer");
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