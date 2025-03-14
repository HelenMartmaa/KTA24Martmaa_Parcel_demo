let memeIndex = 0;

const memes = [
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1vaI9m.img?w=700&h=558&m=6",
    "https://amazinganimalphotos.com/wp-content/uploads/2014/11/funny-cat-and-animal-nenes.jpg",
    "https://i.pinimg.com/736x/35/6b/9d/356b9d48e43277cfa2829aaa71fc2572.jpg"
];

function getCurrentMeme() {
    return memes[memeIndex];
}

function nextMeme() {
    if (memeIndex < memes.length - 1) memeIndex++;
    return getCurrentMeme();
}

function prevMeme() {
    if (memeIndex > 0) memeIndex--;
    return getCurrentMeme();
}

function getMemeIndex() {
    return memeIndex;
}

function setMemeIndex(index) {
    memeIndex = index;
  }

  export { memes, getCurrentMeme, nextMeme, prevMeme, getMemeIndex, setMemeIndex };
