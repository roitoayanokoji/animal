// タブ切り替えの処理
function switchTab(tab) {
    // ここでタブの切り替えに対応した処理を行います
    // 例えば、現在のページの表示を変更するなど
    if (tab === 'home') {
        window.location.href = '../index.html';  // Homeへ遷移
    } else if (tab === 'orders') {
        window.location.href = '../orders/orders.html';  // Ordersページへ遷移
    } else if (tab === 'staff') {
        // 現在のページにいるので、何もしない
        console.log("Already on Staff page");
    }
}

// スタッフ情報の表示（サンプル）
function displayStaff() {
    const staffList = document.querySelector('.staff-list');

    // サンプルのスタッフ情報
    const staffMembers = [
        { title: 'オーナー', name: '綾小路 ろいと' },
        { title: '店長', name: '海雲 めかぶ' }
    ];

    // スタッフ情報を表示する
    staffMembers.forEach(member => {
        const staffItem = document.createElement('div');
        staffItem.classList.add('staff-member');
        staffItem.innerHTML = `
            <h3>${member.title}</h3>
            <p>${member.name}</p>
        `;
        staffList.appendChild(staffItem);
    });
}

// ページがロードされた時にスタッフ情報を表示
window.onload = displayStaff;
