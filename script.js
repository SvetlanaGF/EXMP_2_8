document.addEventListener('DOMContentLoaded', () => {
    // 1. Поиск элементов и изменение содержимого
    const header = document.querySelector('h1');
    header.innerText = 'Заголовок изменился';

    const listItems = document.querySelectorAll('ul li');
    listItems.forEach((item, index) => {
        item.innerText += ` (${index + 1})`;
    });

    // 2. Редактирование атрибутов
    const image = document.getElementById('image');
    image.setAttribute('src', 'img/monstera.jpg');

    const link = document.getElementById('link');
    link.setAttribute('href', 'https://ru.wikipedia.org/wiki/JavaScript');
    link.innerHTML = 'Новая ссылка';

    // 3. Манипуляции с элементами
    const itemList = document.getElementById('item-list');

    document.getElementById('add-item').addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.innerText = `Элемент списка ${itemList.children.length + 1}`;
        itemList.appendChild(newItem);
    });

    document.getElementById('remove-item').addEventListener('click', () => {
        if (itemList.children.length > 0) {
            itemList.removeChild(itemList.lastChild);
        }
    });

    // 4. Манипуляции со стилями CSS
    const paragraph = document.querySelector('p');

    document.getElementById('change-color').addEventListener('click', () => {
        paragraph.style.color = paragraph.style.color === 'blue' ? 'black' : 'blue';
    });

    document.getElementById('toggle-paragraph').addEventListener('click', () => {
        paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
    });

    // 5. Работа с геометрией элементов
    const sizeElement = document.getElementById('size-element');

    document.getElementById('get-dimensions').addEventListener('click', () => {
        const rect = sizeElement.getBoundingClientRect();
        console.log(`Ширина: ${rect.width}, Высота: ${rect.height}`);
        alert(`Ширина: ${rect.width}, Высота: ${rect.height}`);
    });

    // Дополнительное задание: форма
    const form = document.getElementById('myForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!name || !email) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        alert(`Имя: ${name}, Email: ${email}`);
        
        // Очистка формы после успешной отправки
        form.reset();
    });
});
