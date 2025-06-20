// Показывает нужную страницу
function showPage(pageId) {
    // Скрываем все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Показываем выбранную
    document.getElementById(pageId + '-page').style.display = 'block';

    // Обновляем активный пункт меню
    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.classList.remove('active');
    });
    event.target.parentElement.classList.add('active');

    // Закрываем меню на мобилках
    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').classList.remove('active');
    }
}

// Переключает меню на мобилках
function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('active');
}

// По умолчанию показываем главную
showPage('home');
