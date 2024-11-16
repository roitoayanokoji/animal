// 車両データ
const cars = [
    { manufacturer: 'Toyota', model: 'GR86', price: '5,000,000€' },
    { manufacturer: 'Ferrari', model: '488 Pista Spider', price: '30,000,000€' },
    { manufacturer: 'Ferrari', model: 'LaFerrari Aperta', price: '¥100,000,000' },
    { manufacturer: 'Ferrari', model: '488 スパイダー', price: '¥44,000,000' },
    { manufacturer: 'Ferrari', model: 'LaFerrari', price: '¥80,000,000' },
    { manufacturer: 'Ferrari', model: 'ふぇらーり', price: '¥50,000,000' },
    { manufacturer: 'Ferrari', model: 'SF90', price: '¥60,000,000' }
];

// 車両リストを読み込む関数
function loadCars() {
    const carList = document.querySelector('.car-list');
    carList.innerHTML = ''; // 既存の内容をクリア
    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        carItem.innerHTML = `<h3>${car.model}</h3><p>${car.price}</p>`;
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
        carItem.innerHTML = `<h3>${car.model}</h3><p>${car.price}</p>`;
        carList.appendChild(carItem);
    });
}

// ページ読み込み時に車両を表示
window.onload = loadCars;
