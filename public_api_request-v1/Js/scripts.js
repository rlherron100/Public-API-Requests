const gallery = document.getElementById('gallery')
const modalArray = [];
const cards = document.getElementsByClassName('card');
///HELPER FUNCTIONS

//displayCard displays the 12 profiles sent back from the fetch request
function displayCard (data) {
    for (i = 0; i<data.results.length; i++) {
        const card = document.createElement('DIV');
        card.classList = "card";
        gallery.appendChild(card);
        const html = `<div class="card-img-container">
                    <img class="card-img" src='${data.results[i].picture.medium}' alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                    <p class="card-text">${data.results[i].email}</p>
                    <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
                </div>
            </div>`
            card.innerHTML=html; 
        }
}

//getModals structures modal cards for each profile into an array.
function getModals(data) {
    
   
    for (i=0; i<data.results.length; i++) {
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

    
        modalArray.push(modal);
        // modalArray.join('');
        addEvents()

    }
   
}

//fetchProfile function handles fetch requests
function fetchProfile (url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {displayCard(data); getModals(data)})
        .then()
        
}


function saveModals (modals) {
    const modalsArray = modals.map(x=>x)
    return modalsArray
}

///FETCH REQUESTS
fetchProfile('https://randomuser.me/api/?results=12')



///EVENT HANDLERS
function addEvents () {
for (i=0; i<cards.length; i++) {
    cards[i].addEventListener('click', () => {
        console.log(modalArray[i])
    })

}};


//************MODALARRAY[I] IS COMING BACK AS UNDEFINED NO MATTER WHAT FORM A DEFINE IT IN.

















































// function cardMod (data) {
//     const card = document.getElementsByClassName('card');

//     for (i = 0; i<card.length; i++) {
//         card[i].addEventListener('click', () => {
//             for (i = 0; i<card.length; i++) {
//                 const modalContainer = document.createElement('DIV');
//                 modalContainer.classList = "modal-container";
//                 document.querySelector('body').appendChild(modalContainer);
//                 //TROUBLE CONNECTING CARD VARIABLE TO THE REST OF FUNCTION AS EVENT LISTENER IS NESTED SO VALUES NESTED ELSEWHERE AREN'T VALID
//                 const modHTML = `<div class="modal">
//                                     <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//                                     <div class="modal-info-container">
//                                         <img class="modal-img" src='${data.results[i].picture.large}' alt="profile picture">
//                                         <h3 id="name" class="modal-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
//                                         <p class="modal-text">${data.results[i].email}</p>
//                                         <p class="modal-text cap">${data.results[i].location.city}</p>
//                                         <hr>
//                                         <p class="modal-text">${data.results[i].cell}</p>
//                                         <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
//                                         <p class="modal-text">Birthday: 10/21/2015</p>
//                                     </div>`
//                                     modalContainer.innerHTML = modHTML;}
                
                
//                 }) }

// };





// Promise.all([
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
//     fetchProfile('https://randomuser.me/api'),
// ])
// .catch(error => console.log('Looks like there was a problem!', error))



// const card = document.createElement('DIV');
// card.classList = "card";
// document.getElementById('gallery').appendChild(card);
// const html = `<div class="card-img-container">
//             <img class="card-img" src='${data.results[0].picture.medium}' alt="profile picture">
//         </div>
//         <div class="card-info-container">
//             <h3 id="name" class="card-name cap">${data.results[0].name.first} ${data.results[0].name.last}</h3>
//             <p class="card-text">${data.results[0].email}</p>
//             <p class="card-text cap">${data.results[0].location.city}, ${data.results[0].location.state}</p>
//         </div>
//     </div>`
//     card.innerHTML=html;
    



// card.addEventListener('click', () => {
        //     const modalContainer = document.createElement('DIV');
        //     modalContainer.classList = "modal-container";
        //     document.querySelector('body').appendChild(modalContainer);
            
        //     const modHTML = `<div class="modal">
        //                         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        //                         <div class="modal-info-container">
        //                             <img class="modal-img" src='${data.results[0].picture.large}' alt="profile picture">
        //                             <h3 id="name" class="modal-name cap">${data.results[0].name.first} ${data.results[0].name.last}</h3>
        //                             <p class="modal-text">${data.results[0].email}</p>
        //                             <p class="modal-text cap">${data.results[0].location.city}</p>
        //                             <hr>
        //                             <p class="modal-text">${data.results[0].cell}</p>
        //                             <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
        //                             <p class="modal-text">Birthday: 10/21/2015</p>
        //                         </div>`
        //                         modalContainer.innerHTML = modHTML;
            
            
        //     })





// <!-- =======================
//             Modal markup:

//             You can use the commented out markup below as a template
//             for your modal, but you must use JS to create and append 
//             it to `body`.

//             IMPORTANT: Altering the arrangement of the markup and the 
//             attributes used may break the styles or functionality.

//             <div class="modal-container">
//                 <div class="modal">
//                     <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//                     <div class="modal-info-container">
//                         <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
//                         <h3 id="name" class="modal-name cap">name</h3>
//                         <p class="modal-text">email</p>
//                         <p class="modal-text cap">city</p>
//                         <hr>
//                         <p class="modal-text">(555) 555-5555</p>
//                         <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
//                         <p class="modal-text">Birthday: 10/21/2015</p>
//                     </div>
//                 </div>

//                 // IMPORTANT: Below is only for exceeds tasks 
//                 <div class="modal-btn-container">
//                     <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
//                     <button type="button" id="modal-next" class="modal-next btn">Next</button>
//                 </div>
//             </div>
//         ======================== --></div>