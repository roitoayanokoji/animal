// 車両データ
const cars = [
    { manufacturer: 'Toyota', model: 'GR86', price: '5,000,000€' },
    { manufacturer: 'Ferrari', model: '488 Pista Spider', price: '30,000,000€' },
    // 他の車両データを追加
];

// 車両リストを読み込む関数
function loadCars() {
    const carList = document.querySelector('.car-list');
    carList.innerHTML = ''; // 既存の内容をクリア
    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        // Catalogページのみで価格を表示
        if (window.location.pathname.includes('catalog.html')) {
            carItem.innerHTML = `<h3>${car.model}</h3><p>${car.price}</p>`;
        }
        carList.appendChild(carItem);
    });
}

// 車両をメーカーでフィルターする関数
function filterCars(manufacturer) {
    const filteredCars = manufacturer === 'all' ? cars : cars.filter(car => car.manufacturer === manufacturer);
    const carList = document.querySelector('.car-list');
    carList.innerHTML = '';
    filteredCars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        // Catalogページでは価格も表示
        if (window.location.pathname.includes('catalog.html')) {
            carItem.innerHTML = `<h3>${car.model}</h3><p>${car.price}</p>`;
        }
        carList.appendChild(carItem);
    });
}

// ページ読み込み時に車両を表示
window.onload = loadCars;
