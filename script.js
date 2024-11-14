fetch('./artykul.html')
    .then(response => response.text())
    .then(data => {
        console.log(data);
        document.getElementById('article-content').innerHTML = data;
    })
    .catch(error => console.error('Błąd ładowania artykułu:', error));