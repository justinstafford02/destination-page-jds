const user_input_form = document.getElementById("user_input_form");
const card_container = document.getElementById("cards_container");
const PLACEHOLDER_PHOTO_URL = "./destination-page-jds/image/koh_samui.jpg";

user_input_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const destinationName = document.getElementById("destination_name").value;
    const locationName = document.getElementById("location_name").value;
    const photoUrl = document.getElementById("photo_url").value || PLACEHOLDER_PHOTO_URL;
    const desc = document.getElementById("description").value;

    user_input_form.reset();

    const card = createCard({ destinationName, locationName, photoUrl, desc });
    card_container.appendChild(card);
});

function createCard({ destinationName, locationName, photoUrl, desc }) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", "width: 18rem;");
    card.innerHTML = `
        <img src="${photoUrl}" class="card-img-top" alt="${destinationName} at ${locationName}">
        <div class="card-body">
            <h5 class="card-title">${destinationName}</h5>
            <p class="card-text">${locationName}</p>
            ${desc ? `<p class="card-text">${desc}</p>` : ''}
            <button type="button" class="btn btn-info">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
    `;

    return card;
}

