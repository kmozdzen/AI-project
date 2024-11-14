# Projekt AI

Projekt OpenAI API do generowania kodu HTML na podstawie zadanego tekstu. Program odczytuje tekst z pliku wejściowego, przetwarza go przy użyciu modelu OpenAI i zapisuje wygenerowany kod HTML w pliku wyjściowym. <br></br>

## Wymagania
- Node.js (w wersji 16 lub wyższej)
- Konto na OpenAI i klucz API

## Instalacja

1. **Pobierz lub sklonuj repozytorium:**

   ```bash
   git clone https://github.com/kmozdzen/AI-project.git
   cd AI-project
   ```

2. **Zainstaluj zależności:**

    Upewnij się, że masz zainstalowany Node.js. Jeśli nie, możesz pobrać go z oficjalnej strony Node.js.
    
    Następnie zainstaluj zależności:

   ```bash
   npm install
   ```

   ```bash
   npm install openai
   ```
## Konfiguracja
   
Ustaw swój klucz API OpenAI:

W pliku config.mjs musisz dodać swój klucz API OpenAI. Otwórz plik config.mjs i zamień wartość "YOUR API KEY" na swój rzeczywisty klucz API, który możesz uzyskać na stronie [OpenAI](https://platform.openai.com/api-keys).

```javascript
const API_KEY = "YOUR API KEY";  // Zmień na swój klucz API

export { API_KEY };
```
## Uruchomienie programu
Aby uruchomić program, użyj poniższego polecenia w terminalu:

```bash
node main.mjs
 ```
## Działanie programu
  1.
    - Odczyta plik Zadanie dla JJunior AI Developera - tresc artykulu.txt
    - Wyśle zapytanie do OpenAI API
    - Otrzyma odpowiedź, która zawiera kod HTML
    - Zapisze ten kod do pliku artykul.html
  2.
    - Plik szablon.html pozwala na wklejenie artykułu
    - Plik podglad.html korzysta z pliku script.js, który automatycznie pobiera treść z pliku artykul.html
