document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const menuLinks = document.querySelectorAll('.sidebar-menu a');
    const homeContent = document.getElementById('home-content');
    const rulesContainer = document.getElementById('rules-container');

    // Мобильное меню
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Загрузка контента
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Убираем активный класс у всех пунктов
            menuLinks.forEach(item => {
                item.parentElement.classList.remove('active');
            });
            
            // Добавляем активный класс текущему пункту
            this.parentElement.classList.add('active');
            
            const page = this.getAttribute('data-page');
            
            if (page === 'home') {
                homeContent.style.display = 'block';
                rulesContainer.style.display = 'none';
            } 
            else if (page === 'rules') {
                homeContent.style.display = 'none';
                
                // Загружаем фрагмент правил
                fetch('rules-content.html')
                    .then(response => response.text())
                    .then(html => {
                        rulesContainer.innerHTML = html;
                        rulesContainer.style.display = 'block';
                    })
                    .catch(error => {
                        rulesContainer.innerHTML = '<p>Ошибка загрузки правил</p>';
                        rulesContainer.style.display = 'block';
                    });
            }
            
            // Закрываем меню на мобилках
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
});
