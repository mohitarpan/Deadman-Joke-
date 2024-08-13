// fetch('https://icanhazdadjoke.com/slack')
// .then(data => data.json())
// .then(jokeData => {
//     const jokeText = jokeData.attachments[0].text;
//     const jokeElement = document.getElementById('jokeElement')
//     jokeElement.innerHTML = jokeText;

//     })
//  here udate by AI
const jokeElement = document.getElementById('jokeElement');
const nextJokeBtn = document.getElementById('nextJokeBtn');

function getNewJoke() {
    fetch('https://icanhazdadjoke.com/slack')
        .then(data => data.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            jokeElement.textContent = jokeText;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            jokeElement.textContent = 'Sorry, there was an error fetching a joke.';
        });
}

nextJokeBtn.addEventListener('click', getNewJoke);

// Fetch an initial joke
getNewJoke();
