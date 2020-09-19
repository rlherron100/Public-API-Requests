const gallery = document.getElementById('gallery'); //creates variable for gallery div
const modalArray = []; //creates an empty array in which future modal objects will be stored
const cards = []; //creates an empty array in which future card objects will be stored



///FETCH REQUESTS
fetchProfile('https://randomuser.me/api/?results=12') //fetches 12 random users from the randomuser api


///HELPER FUNCTIONS


//fetchProfile function handles fetch requests
function fetchProfile (url) {
    fetch(url)
        .then(response => response.json()) //parses response to json
        .then(data => {displayCard(data); getModals(data);addEvents(); closeModal()}) //sends the parsed data to the various functions
        
}


//displayCard displays the 12 profiles sent back from the fetch request
function displayCard (data) {
    for (i = 0; i<data.results.length; i++) { //runs through each of the .results objects in the returned data
        const card = document.createElement('DIV'); //creates a new card for each user profile
        card.classList = "card";
        gallery.appendChild(card);
        //html is the template literal for what the cards will look like
        const html = `<div class="card-img-container">          
                    <img class="card-img" src='${data.results[i].picture.medium}' alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                    <p class="card-text">${data.results[i].email}</p>
                    <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
                </div>
            </div>`
            card.innerHTML=html; //displays the cards
            cards.push(card); //adds the cards to the empty cards array
        }
}

//getModals structures modal cards for each profile into an array.
function getModals(data) {
    
   
    for (i=0; i<data.results.length; i++) {//runs through each of the .results objects in the returned data
        //modal is a template literal for the modal windows
        const modal =  `<div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${data.results[i].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                <p class="modal-text">${data.results[i].email}</p>
                <p class="modal-text cap">${data.results[i].location.city}</p>
                <hr>
                <p class="modal-text">${data.results[i].cell.replace('-', ' ')}</p>
                <p class="modal-text">${data.results[i].location.street.number} ${data.results[i].location.street.name}, ${data.results[i].location.city}, ${data.results[i].location.state} ${data.results[i].location.postcode}</p>
                <p class="modal-text">Birthday: ${data.results[i].dob.date.substring(0,10).replace(/'-'/g, '/')}</p>
            </div>
        </div>
    </div>`
        modalArray.push(modal); //adds the modal windows, with their html template, into the modalArray array for further use
    }
}

///EVENT HANDLERS
function addEvents () {             //an event handler function that listens at each card element for a click event, upon which it displays a modal card
    for (i=0; i<cards.length; i++) { //runs through each card and adds a click listener to each
        cards[i].addEventListener('click', (e) => {
            const clickedCardIndex = [...cards].indexOf(e.currentTarget); //identifies which card has been clicked
            const clickedModal = modalArray[clickedCardIndex];
            gallery.insertAdjacentHTML('afterbegin', clickedModal) //displays an adjacent html template over the gallery with the 
                                                            //modal window that corresponds to the clicked card
            
        });
        
}};

function closeModal () {            //event handler function listens for a click event on the X button of the modal windows, and closes the modal window
   
    gallery.addEventListener('click', (e) => { //targets both the button and the 'x' text and closes the modal window if they are clicked
    const modalClose = document.getElementById('modal-close-btn');
    const modalContainer = document.getElementsByClassName('modal-container')[0];
        if ((e.target === modalClose) || (e.target === modalClose.children[0])) {
            modalContainer.style.display = 'none'
            
        }
})
};



