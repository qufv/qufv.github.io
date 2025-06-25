let homeHTML;
document.addEventListener('DOMContentLoaded', () => {
    const template = document.getElementById('content-container');
    homeHTML = `'${template.innerHTML}'`;});



function loadPage(page) {
    const container = document.getElementById('content-container');
    
    // Убираем активный класс у всех пунктов меню
    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.classList.remove('active');
    });
    
    // Добавляем активный класс текущему пункту
    event.target.parentElement.classList.add('active');
    
    if (page === 'home') {
        container.innerHTML = eval(homeHTML);
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
    else if (page === 'info') {
        fetch('info.html')
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => {
                container.innerHTML = `
                    <div class="content-box">
                        <h1>Ошибка</h1>
                        <p>Не удалось загрузить информацию.</p>
                    </div>
                `;
            });
    }
    else if (page === 'contacts') {
        fetch('contacts.html')
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => {
                container.innerHTML = `
                    <div class="content-box">
                        <h1>Ошибка</h1>
                        <p>Не удалось загрузить ссылки.</p>
                    </div>
                `;
            });
    }
}
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});

document.querySelectorAll('.sidebar-menu a').forEach(link => {
  link.addEventListener('click', function() {
    // Закрываем меню только на мобильных
    if (window.innerWidth <= 768) {
      document.querySelector('.sidebar').classList.remove('active');
    }
  });
});
