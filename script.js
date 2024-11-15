const cars = [
    { manufacturer: 'Toyota', model: 'GR86', price: '5,000,000€' },
    { manufacturer: 'Ferrari', model: '488 Pista Spider', price: '30,000,000€' },
];

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "demo@example.com" && password === "password123") {
        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("inventory-page").classList.remove("hidden");
        loadCars();
    } else {
        alert("Invalid credentials");
    }
}
function loadCars() {
    const carList = document.querySelector('.car-list');
    carList.innerHTML = ''; // Clear existing content
    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        carItem.innerHTML = `<h3>${car.model}</h3><p>${car.price}</p>`;
        carList.appendChild(carItem);
    });
}

function filterCars(manufacturer) {
    const filteredCars = manufacturer === 'all' ? cars : cars.filter(car => car.manufacturer === manufacturer);
    const carList = document.querySelector('.car-list');
    carList.innerHTML = '';
    filteredCars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        carItem.innerHTML = `<h3>${car.model}</h3><p>${car.price}</p>`;
        carList.appendChild(carItem);
    });
}
