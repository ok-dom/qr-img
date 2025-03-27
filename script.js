// Массив с путями к изображениям
const images = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    // Добавьте сюда пути к другим изображениям
];

// Функция для выбора случайного изображения
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Установка фона при загрузке страницы
window.onload = function() {
    const randomImage = getRandomImage();
    document.body.style.backgroundImage = `url('${randomImage}')`;
};
