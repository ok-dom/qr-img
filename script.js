// Массив с путями к изображениям
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
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
