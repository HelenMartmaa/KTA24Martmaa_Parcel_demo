// Filmide massiiv, et nende seast soovitada
const movies = [
    { title: "Cube", year: 1997 },
    { title: "Cube Zero", year: 2004 },
    { title: "Hypercube", year: 2002 },
    { title: "Midsommar", year: 2019 },
    { title: "Sinister", year: 2012 },
    { title: "The Belko Experiment", year: 2016 },
    { title: "The Cell", year: 2000 },
    { title: "Jurassic Park", year: 1993 },
    { title: "Year One", year: 2009 },
    { title: "Coherence", year: 2013 },
    { title: "Groundhog Day", year: 1993 },
    { title: "Children of Men", year: 2006 },
    { title: "2012", year: 2009 },
    { title: "Memoirs of a Geisha", year: 2005 },
    { title: "Seven", year: 1995 },
    { title: "Shutter Island", year: 2010 },
    { title: "The Last Duel", year: 2021 },
    { title: "The Hateful Eight", year: 2015 },
    { title: "The Butterfly Effect", year: 2004 },
    { title: "The Imitation Game", year: 2014 },
    { title: "The Boy in the Striped Pyjamas", year: 2008 },
    { title: "Girl in the Basement", year: 2021 },
    { title: "Law Abiding Citizen", year: 2009 },
    { title: "As Above, So Below", year: 2014 }
  ];  

// Funktsioon, mis valib suvalise filmi
function getRandomMovie() {
    return movies[Math.floor(Math.random() * movies.length)];
}

export { movies, getRandomMovie };
