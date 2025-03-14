let jokeIndex = 0; //algus 0-st

const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why can't you give Elsa a balloon? Because she will let it go.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What do you call fake spaghetti? An impasta.",
    "Why don’t oysters donate to charity? Because they are shellfish.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I used to play piano by ear, but now I use my hands.",
    "What do you call a pile of cats? A meow-tain.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    "Why don’t eggs tell jokes? Because they might crack up.",
    "What’s orange and sounds like a parrot? A carrot.",
    "I can't trust stairs because they are always up to something.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What did the grape do when it got stepped on? Nothing but let out a little wine.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out."
  ];
  

function getCurrentJoke() {
    return jokes[jokeIndex];
}

function nextJoke() {
    if (jokeIndex < jokes.length - 1) jokeIndex++;
    return getCurrentJoke();
}

function prevJoke() {
    if (jokeIndex > 0) jokeIndex--;
    return getCurrentJoke();
}

function getJokeIndex() {
    return jokeIndex;
}

function setJokeIndex(index) {
    jokeIndex = index;
}

export { jokes, getCurrentJoke, nextJoke, prevJoke, getJokeIndex, setJokeIndex };