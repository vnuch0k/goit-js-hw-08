import { throttle } from 'lodash';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
    button: document.querySelector('button')
}

const STORAGE_KEY = 'feedback-msg';
const formData = {}


refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onValueInput), 500)
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value
    // console.log(formData);
})

populateTexarea()


function onFormSubmit(e) {
    e.preventDefault();

    console.log('Отправляем форму');
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log(formData);
}


function onValueInput(e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onTextareaInput(e) {
    // const value = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function populateTexarea() {
    const savedDataObject = localStorage.getItem(STORAGE_KEY);

    if (savedDataObject) {
        const parsedData = JSON.parse(savedDataObject);
        const keys = Object.keys(parsedData);
        for (const key of keys) {
            refs.form.elements[key].value = parsedData[key];
            formData[key] = parsedData[key]
        }
    }
}