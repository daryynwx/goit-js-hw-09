const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 1. Обʼєкт formData з початковими порожніми значеннями
let formData = {
    email: '',
    message: ''
};

// 2. Відновлюємо дані з локального сховища, якщо є
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    try {
        formData = JSON.parse(savedData);
        form.elements.email.value = formData.email || '';
        form.elements.message.value = formData.message || '';
    } catch (error) {
        console.error('Error parsing saved form data:', error);
    }
}

// 3. Обробка введення користувача
form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value.trim(); // обираємо по name
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4. Обробка сабміту форми
form.addEventListener('submit', e => {
    e.preventDefault();

    const { email, message } = formData;

    if (email === '' || message === '') {
        alert('Fill please all fields');
        return;
    }

    console.log('Form submitted:', formData);

    // Очищення форми та даних
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
});
