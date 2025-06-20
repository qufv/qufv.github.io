document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const menuLinks = document.querySelectorAll('.sidebar-menu a');
    const contentSections = {
        'home': document.getElementById('home-content'),
        'rules': document.getElementById('rules-content')
    };

    // Мобильное меню
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Переключение контента
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Убираем активный класс у всех пунктов
            menuLinks.forEach(item => {
                item.parentElement.classList.remove('active');
            });
            
            // Добавляем активный класс текущему пункту
            this.parentElement.classList.add('active');
            
            // Скрываем все разделы
            Object.values(contentSections).forEach(section => {
                section.style.display = 'none';
            });
            
            // Показываем нужный раздел
            const target = this.getAttribute('href').substring(1);
            if (contentSections[target]) {
                contentSections[target].style.display = 'block';
            }
        });
    });
});
