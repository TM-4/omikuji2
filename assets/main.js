'use strict'
// おみくじ
const $btn = document.getElementById('omikuji');

$btn.addEventListener('click', () => {
    const resalt = [
        '大吉',
        '中吉',
        '小吉',
        '吉',
        '凶',
        '大凶',
    ];

    const key = Math.floor(Math.random() * resalt.length);
    $btn.textContent = resalt[key];
});