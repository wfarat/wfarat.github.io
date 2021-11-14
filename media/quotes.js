const quotes = {
    'Marcus Aurelius' : ['When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.',
                        'Our life is what our thoughts make it.', 'Waste no more time arguing about what a good man should be. Be one.', 
                        'You have power over your mind - not outside events. Realize this, and you will find strength.', 
                        'Everything that happens happens as it should, and if you observe carefully, you will find this to be so.',
                        'He who lives in harmony with himself lives in harmony with the universe.' ],
    'Lao Tzu' : ['Great acts are made up of small deeds.', 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
                'When I let go of what I am, I become what I might be.', 'Mastering others is strength. Mastering yourself is true power.' ],
    'Johann Wolfgang von Goethe' : ['Knowing is not enough; we must apply. Willing is not enough; we must do.', 'Everything is hard before it is easy.', 
    'As soon as you trust yourself, you will know how to live.', 'Magic is believing in yourself, if you can do that, you can make anything happen.', 
    'Let everyone sweep in front of his own door, and the whole world will be clean.'],
    'William James' : ['It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.',
                        'The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.',
                        'Act as if what you do makes a difference. It does.'],
    'Confucius' : ['Our greatest glory is not in never falling, but in rising every time we fall.', "Real knowledge is to know the extent of one's ignorance.",
                  'Wherever you go, go with all your heart.', 'The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.']                               
}

const authors = ['Marcus Aurelius', 'Lao Tzu', 'Johann Wolfgang von Goethe', 'William James', 'Confucius'];
const quoteContainer = document.getElementById('quote');
const pickquote = () => {
    const rnd = Math.floor(Math.random() * authors.length);
    const author = authors[rnd];
    const quote = Math.floor(Math.random() * quotes[author].length);
    quoteContainer.innerHTML = '<blockquote>' + quotes[author][quote] + '</blockquote>' + '<figcaption>'+ author + '</figcaption>';
}
pickquote();
setInterval(pickquote, 15000);
const quotesSection = document.querySelector('section');
quotesSection.addEventListener('click', pickquote);
