const dialogues = [
    {
        quote: "Why so serious?",
        movie: "The Dark Knight"
    },
    {
        quote: "I'll be back.",
        movie: "The Terminator"
    },
    {
        quote: "May the Force be with you.",
        movie: "Star Wars"
    },
    {
        quote: "You can't handle the truth!",
        movie: "A Few Good Men"
    },
    {
        quote: "I see dead people.",
        movie: "The Sixth Sense"
    },
    {
        quote: "Houston, we have a problem.",
        movie: "Apollo 13"
    }
];

document.getElementById('generateButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * dialogues.length);
    const randomDialogue = dialogues[randomIndex];
    const quote = randomDialogue.quote;
    const movie = randomDialogue.movie;
    document.getElementById('dialogue').textContent = `${quote} - ${movie}`;
});
