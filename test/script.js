document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const contentContainer = document.getElementById('contentContainer');
    const menuLinks = document.querySelectorAll('#menu a');

    // Обработчик кнопки меню
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Обработчики для пунктов меню
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Обновляем активный пункт меню
            menuLinks.forEach(l => l.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
            
            // Загружаем контент
            const contentType = this.getAttribute('data-content');
            loadContent(contentType);
        });
    });

    // Функция загрузки контента
    function loadContent(type) {
        if (type === 'home') {
            contentContainer.innerHTML = `
                <div class="content-box">
                    <h1>Добро пожаловать!</h1>
                    <p>Это главная страница нашего сайта.</p>
                </div>
            `;
        } 
        else if (type === 'rules') {
            fetch('rules-content.html')
                .then(response => {
                    if (!response.ok) throw new Error('Ошибка загрузки');
                    return response.text();
                })
                .then(html => {
                    contentContainer.innerHTML = html;
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                    contentContainer.innerHTML = `
                        <div class="content-box">
                            <h1>Ошибка</h1>
                            <p>Не удалось загрузить контент.</p>
                        </div>
                    `;
                });
        }
    }
});
