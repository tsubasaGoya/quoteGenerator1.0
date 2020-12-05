const quotes = [
    {
        name: 'Goya',
        quote: 'What and How you focus on in life will manifest how you live life.'
    },
    {
        name: 'Goya',
        quote: 'What you cannot control in life is OK to go wherever it goes.'
    },
    {
        name: 'Goya',
        quote: 'Whether positive or negative deeds will come back to affect you either way.'
    },
    {
        name: 'Goya',
        quote: 'Today will never come back again. Be happy.'
    }
];

const btn = document.querySelector('#quoteBtn'),
      quote = document.querySelector('#theQuote'),
      author = document.querySelector('#quoteAuthor');

btn.addEventListener('click', generateQuote);

function generateQuote() {
    let number = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[number].quote;
    author.innerHTML = quotes[number].name;
}
