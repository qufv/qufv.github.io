function loadPage(page) {
    const container = document.getElementById('content-container');
    
    // Убираем активный класс у всех пунктов меню
    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.classList.remove('active');
    });
    
    // Добавляем активный класс текущему пункту
    event.target.parentElement.classList.add('active');
    
    if (page === 'home') {
        container.innerHTML = `
            <div id="home-content" class="content-box">
                <h1>Добро пожаловать!</h1>
                <p>Выберите раздел в меню слева.</p>
            </div>
        `;
    } 
    else if (page === 'rules') {
        fetch('rules.html')
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => {
                container.innerHTML = `
                    <div class="content-box">
                        <h1>Ошибка</h1>
                        <p>Не удалось загрузить правила.</p>
                    </div>
                `;
            });
    }
}

// Для мобильного меню (если нужно)
function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('active');
}
