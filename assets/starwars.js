const fetchButton = document.getElementById('btn');
const resultBlock = document.getElementById('result');
const errorBlock = document.getElementById('error');
const loaderBlock = document.getElementById('loader');

fetchButton.addEventListener('click', () => {
    const element = document.getElementById('element').value;
    const id = document.getElementById('id').value;
  
    loaderBlock.style.display = 'block';
    fetch(`https://swapi.py4e.com/api/${element}/${id}`)
    .then(response => {
        if (!response.ok) {
            return Promise.reject(new Error(`Сервер не доступен: ${response.status}`));
        }
        return response.json();
    })
    .then(data => {
        if(id <= 10){
            resultBlock.textContent = `Модель: ${data.model}`;
            errorBlock.textContent = '';
        }
        else{
            resultBlock.textContent = '';
            errorBlock.textContent = 'Некорректное число';  
        }
    })
    .catch(error => {
      resultBlock.textContent = '';
      errorBlock.textContent = error.message;
    })
    .finally(() => {
      loaderBlock.style.display = 'none';
    });
});

