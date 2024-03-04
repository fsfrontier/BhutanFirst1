// JavaScript to populate travel packages and states to visit

// Sample data for travel packages and states to visit
const travelPackagesData = [
    // Add your travel packages data here
];

const statesData = [
    // Add your states data here
];

// Function to create card for travel package
function createTravelPackageCard(package) {
    const card = document.createElement('div');
    card.classList.add('card');
    const image = document.createElement('img');
    image.src = package.image;
    const title = document.createElement('h2');
    title.textContent = package.title;
    const description = document.createElement('p');
    description.textContent = package.description;
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    return card;
}

// Function to create card for state
function createStateCard(state) {
    const card = document.createElement('div');
    card.classList.add('state');
    const image = document.createElement('img');
    image.src = state.image;
    const title = document.createElement('h2');
    title.textContent = state.title;
    const description = document.createElement('p');
    description.textContent = state.description;
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    return card;
}

// Function to populate travel packages
function populateTravelPackages() {
    const travelPackagesSection = document.getElementById('travel-packages');
    travelPackagesData.forEach(package => {
        const card = createTravelPackageCard(package);
        travelPackagesSection.appendChild(card);
    });
}

// Function to populate states to visit
function populateStates() {
    const statesSection = document.getElementById('states');
    statesData.forEach(state => {
        const card = createStateCard(state);
        statesSection.appendChild(card);
    });
}

// Populate travel packages on index.html
if (document.getElementById('travel-packages')) {
    populateTravelPackages();
}

// Populate states on tour.html
if (document.getElementById('states')) {
    populateStates();
}
