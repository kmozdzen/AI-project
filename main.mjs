import OpenAI from "openai";
import { API_KEY } from './config.mjs';
import fs from 'fs';

const openai = new OpenAI(
    {apiKey: API_KEY}
);

let question = '';

// Ścieżka do pliku z treścią artykułu
const input = './Zadanie dla JJunior AI Developera - tresc artykulu.txt';

// Ścieżka do pliku, do którego zapisuje wynik zapytania
const output = './artykul.html';

// Zapytanie do czatu
const query = 'Wygeneruj kod HTML spełniający podane warunki dla podanego tekstu.\n';

// Warunki
const conditions = 
`
Warunki: 
• Wygeneruj kod HTML dla poniższego tekstu, używając odpowiednich tagów HTML do strukturyzacji treści, w tym <h1> dla tytułu, 
<section> dla każdego akapitu z tytułem, <p>, <figure>, <img> i <figcaption>. Zawartość powinna obejmować odpowiednią strukturę 
i być odpowiednio uporządkowana z obrazami i podpisami. Pod każdym obrazem dodaj <figcaption> z krótkim opisem.
• Przeanalizuj tekst pod kątem umieszczenia grafik w odpowiednich miejscach, tak żeby podkreślały jego znaczenie. 
Oznaczając je z użyciem tagu <img> z atrybutem src="image_placeholder.jpg". Dodaj atrybut alt do
każdego obrazka z dokładnie opisującym promptem, który możemy użyć do wygenerowania grafiki AI, która dokładnie pokaże znaczenie tekstu do którego się odnosi.
Niech atrybut alt będzie szczegółowy. Umieść podpisy pod grafikami używając odpowiedniego tagu HTML.
• Brak kodu CSS ani JavaScript. Zwrócony kod powinien zawierać wyłącznie zawartość do
wstawienia pomiędzy tagami <body> i </body>. Nie dołączaj znaczników <html>,
<head> ani <body>.\n
`

// Funkcja asynchroniczna do odczytu i przetwarzania pliku
async function main() {
    // Odczytanie pliku wejściowego
    fs.readFile(input, 'utf8', async (err, text) => {
        if (err) {
            console.error('Błąd odczytu pliku:', err);
            return;
        }

        // Dostosowanie tekstu
        const adaptedText = 'Tekst: \n' + text;
        const question = query + conditions + adaptedText;

         // Tworzenie zapytania do OpenAI
         try {
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    {
                        role: "user",
                        content: question,
                    },
                ],
            });

            
            // Usunięcie niepotrzebnych znaków
            const answer = completion.choices[0].message.content.replace(/^```html\n/, '').replace(/```$/, '');
            
            // Zapisanie odpowiedzi do pliku wyjściowego
            fs.writeFile(output, answer, 'utf8', (err) => {
                if (err) {
                    console.error('Błąd zapisu pliku:', err);
                    return;
                }
            });

        } catch (error) {
            console.error('Błąd w trakcie komunikacji z OpenAI:', error);
        }
    });
}

// Wywołanie maina
main();