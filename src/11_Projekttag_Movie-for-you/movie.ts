type movieItem = {
  title: string;
  year: number;
  director: string;
  duration: string;
  genre: string[];
  rating: number;
};

const movies: movieItem[] = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rating: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rating: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    rating: 9.0,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rating: 9.0,
  },
  {
    title: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    rating: 8.9,
  },
  {
    title: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    rating: 8.9,
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    rating: 8.9,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rating: 8.9,
  },
  {
    title: "Il buono, il brutto, il cattivo",
    year: 1966,
    director: "Sergio Leone",
    duration: "3h 2min",
    genre: ["Western"],
    rating: 8.9,
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    duration: "2h 19min",
    genre: ["Drama"],
    rating: 8.8,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rating: 8.8,
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    duration: "2h 22min",
    genre: ["Comedy", "Drama", "Romance"],
    rating: 8.8,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    duration: "2h 4min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 8.8,
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    rating: 8.8,
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    duration: "2h 59min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rating: 8.7,
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    year: 1975,
    director: "Milos Forman",
    duration: "2h 13min",
    genre: ["Drama"],
    rating: 8.7,
  },
  {
    title: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    duration: "2h 26min",
    genre: ["Crime", "Drama"],
    rating: 8.7,
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski",
    duration: "2h 16min",
    genre: ["Action", "Sci-Fi"],
    rating: 8.7,
  },
  {
    title: "Shichinin no samurai",
    year: 1954,
    director: "Akira Kurosawa",
    duration: "3h 27min",
    genre: ["Adventure", "Drama"],
    rating: 8.7,
  },
  {
    title: "Star Wars",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 8.7,
  },
  {
    title: "Cidade de Deus",
    year: 2002,
    director: "Fernando Meirelles",
    duration: "2h 10min",
    genre: ["Crime", "Drama"],
    rating: 8.7,
  },
  {
    title: "Se7en",
    year: 1995,
    director: "David Fincher",
    duration: "2h 7min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    rating: 8.6,
  },
  {
    title: "The Silence of the Lambs",
    year: 1991,
    director: "Jonathan Demme",
    duration: "1h 58min",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.6,
  },
  {
    title: "It's a Wonderful Life",
    year: 1946,
    director: "Frank Capra",
    duration: "2h 10min",
    genre: ["Drama", "Family", "Fantasy"],
    rating: 8.6,
  },
  {
    title: "La vita è bella",
    year: 1997,
    director: "Roberto Benigni",
    duration: "1h 56min",
    genre: ["Comedy", "Drama", "War"],
    rating: 8.6,
  },
  {
    title: "The Usual Suspects",
    year: 1995,
    director: "Bryan Singer",
    duration: "1h 46min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    rating: 8.6,
  },
  {
    title: "Léon",
    year: 1988,
    director: "Luc Besson",
    duration: "1h 50min",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.6,
  },
  {
    title: "Saving Private Ryan",
    year: 1998,
    director: "Steven Spielberg",
    duration: "2h 49min",
    genre: ["Drama", "War"],
    rating: 8.6,
  },
  {
    title: "Sen to Chihiro no kamikakushi",
    year: 2001,
    director: "Hayao Miyazaki",
    duration: "2h 5min",
    genre: ["Animation", "Adventure", "Family", "Fantasy", "Mystery"],
    rating: 8.6,
  },
  {
    title: "American History X",
    year: 1998,
    director: "Tony Kaye",
    duration: "1h 59min",
    genre: ["Crime", "Drama"],
    rating: 8.5,
  },
  {
    title: "C'era una volta il West",
    year: 1968,
    director: "Sergio Leone",
    duration: "2h 44min",
    genre: ["Western"],
    rating: 8.6,
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "2h 49min",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
  },
  {
    title: "Psycho",
    year: 1960,
    director: "Alfred Hitchcock",
    duration: "1h 49min",
    genre: ["Horror", "Mystery", "Thriller"],
    rating: 8.5,
  },
  {
    title: "The Green Mile",
    year: 1999,
    director: "Frank Darabont",
    duration: "3h 9min",
    genre: ["Crime", "Drama", "Fantasy", "Mystery"],
    rating: 8.5,
  },
  {
    title: "Casablanca",
    year: 1942,
    director: "Michael Curtiz",
    duration: "1h 42min",
    genre: ["Drama", "Romance", "War"],
    rating: 8.5,
  },
  {
    title: "City Lights",
    year: 1931,
    director: "Charles Chaplin",
    duration: "1h 27min",
    genre: ["Comedy", "Drama", "Romance"],
    rating: 8.6,
  },
  {
    title: "Intouchables",
    year: 2011,
    director: "Olivier Nakache",
    duration: "1h 52min",
    genre: ["Biography", "Comedy", "Drama"],
    rating: 8.6,
  },
  {
    title: "Modern Times",
    year: 1936,
    director: "Charles Chaplin",
    duration: "1h 27min",
    genre: ["Comedy", "Drama", "Family", "Romance"],
    rating: 8.5,
  },
  {
    title: "Raiders of the Lost Ark",
    year: 1981,
    director: "Steven Spielberg",
    duration: "1h 55min",
    genre: ["Action", "Adventure"],
    rating: 8.5,
  },
  {
    title: "The Pianist",
    year: 2002,
    director: "Roman Polanski",
    duration: "2h 30min",
    genre: ["Biography", "Drama", "Music", "War"],
    rating: 8.5,
  },
  {
    title: "The Departed",
    year: 2006,
    director: "Martin Scorsese",
    duration: "2h 31min",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.5,
  },
  {
    title: "Rear Window",
    year: 1954,
    director: "Alfred Hitchcock",
    duration: "1h 52min",
    genre: ["Mystery", "Thriller"],
    rating: 8.5,
  },
  {
    title: "Terminator 2: Judgment Day",
    year: 1991,
    director: "James Cameron",
    duration: "2h 17min",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.5,
  },
  {
    title: "Back to the Future",
    year: 1985,
    director: "Robert Zemeckis",
    duration: "1h 56min",
    genre: ["Adventure", "Comedy", "Sci-Fi"],
    rating: 8.5,
  },
  {
    title: "Whiplash",
    year: 2014,
    director: "Damien Chazelle",
    duration: "1h 47min",
    genre: ["Drama", "Music"],
    rating: 8.5,
  },
  {
    title: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    duration: "2h 35min",
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.5,
  },
  {
    title: "The Prestige",
    year: 1994,
    director: "Christopher Nolan",
    duration: "2h 10min",
    genre: ["Drama", "Mystery", "Sci-Fi", "Thriller"],
    rating: 8.5,
  },
  {
    title: "The Lion King",
    year: 1994,
    director: "Roger Allers",
    duration: "1h 28min",
    genre: ["Animation", "Adventure", "Drama", "Family", "Musical"],
    rating: 8.5,
  },
  {
    title: "Memento",
    year: 2000,
    director: "Christopher Nolan",
    duration: "1h 53min",
    genre: ["Mystery", "Thriller"],
    rating: 8.5,
  },
  {
    title: "Apocalypse Now",
    year: 1979,
    director: "Francis Ford Coppola",
    duration: "2h 27min",
    genre: ["Drama", "War"],
    rating: 8.5,
  },
  {
    title: "Alien",
    year: 1979,
    director: "Ridley Scott",
    duration: "1h 57min",
    genre: ["Horror", "Sci-Fi"],
    rating: 8.5,
  },
  {
    title: "The Great Dictator",
    year: 1940,
    director: "Charles Chaplin",
    duration: "2h 5min",
    genre: ["Comedy", "Drama", "War"],
    rating: 8.5,
  },
  {
    title: "Sunset Blvd.",
    year: 1950,
    director: "Billy Wilder",
    duration: "1h 50min",
    genre: ["Drama", "Film-Noir"],
    rating: 8.5,
  },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
    director: "Stanley Kubrick",
    duration: "1h 35min",
    genre: ["Comedy"],
    rating: 8.5,
  },
  {
    title: "Nuovo Cinema Paradiso",
    year: 1988,
    director: "Giuseppe Tornatore",
    duration: "2h 35min",
    genre: ["Drama"],
    rating: 8.5,
  },
  {
    title: "Das Leben der Anderen",
    year: 2006,
    director: "Florian Henckel von Donnersmarck",
    duration: "2h 17min",
    genre: ["Drama", "Thriller"],
    rating: 8.5,
  },
  {
    title: "Hotaru no haka",
    year: 1988,
    director: "Isao Takahata",
    duration: "1h 29min",
    genre: ["Animation", "Drama", "War"],
    rating: 8.5,
  },
  {
    title: "Blade Runner 2049",
    year: 2017,
    director: "Denis Villeneuve",
    duration: "2h 44min",
    genre: ["Mystery", "Sci-Fi", "Thriller"],
    rating: 8.5,
  },
  {
    title: "Paths of Glory",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    rating: 8.4,
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "2h 45min",
    genre: ["Drama", "Western"],
    rating: 8.4,
  },
  {
    title: "The Shining",
    year: 1980,
    director: "Stanley Kubrick",
    duration: "2h 26min",
    genre: ["Drama", "Horror"],
    rating: 8.4,
  },
  {
    title: "WALL·E",
    year: 2008,
    director: "Andrew Stanton",
    duration: "1h 38min",
    genre: ["Animation", "Adventure", "Family", "Sci-Fi"],
    rating: 8.4,
  },
  {
    title: "American Beauty",
    year: 1999,
    director: "Sam Mendes",
    duration: "2h 2min",
    genre: ["Drama", "Romance"],
    rating: 8.4,
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    duration: "2h 44min",
    genre: ["Action", "Thriller"],
    rating: 8.4,
  },
  {
    title: "Mononoke-hime",
    year: 1997,
    director: "Hayao Miyazaki",
    duration: "2h 14min",
    genre: ["Animation", "Adventure", "Fantasy"],
    rating: 8.4,
  },
  {
    title: "Oldboy",
    year: 2003,
    director: "Chan-wook Park",
    duration: "2h",
    genre: ["Action", "Drama", "Mystery", "Thriller"],
    rating: 8.4,
  },
  {
    title: "Aliens",
    year: 1986,
    director: "James Cameron",
    duration: "2h 17min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    rating: 8.4,
  },
  {
    title: "Witness for the Prosecution",
    year: 1957,
    director: "Billy Wilder",
    duration: "1h 56min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    rating: 8.4,
  },
  {
    title: "Once Upon a Time in America",
    year: 1984,
    director: "Sergio Leone",
    duration: "3h 49min",
    genre: ["Crime", "Drama"],
    rating: 8.4,
  },
  {
    title: "Das Boot",
    year: 1981,
    director: "Wolfgang Petersen",
    duration: "2h 29min",
    genre: ["Adventure", "Drama", "Thriller", "War"],
    rating: 8.4,
  },
  {
    title: "Citizen Kane",
    year: 1941,
    director: "Orson Welles",
    duration: "1h 59min",
    genre: ["Drama", "Mystery"],
    rating: 8.4,
  },
  {
    title: "Dangal",
    year: 2016,
    director: "Nitesh Tiwari",
    duration: "2h 41min",
    genre: ["Action", "Biography", "Drama", "Sport"],
    rating: 8.6,
  },
  {
    title: "Vertigo",
    year: 2001,
    director: "Alfred Hitchcock",
    duration: "2h 8min",
    genre: ["Mystery", "Romance", "Thriller"],
    rating: 8.4,
  },
  {
    title: "North by Northwest",
    year: 1959,
    director: "Alfred Hitchcock",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Mystery", "Thriller"],
    rating: 8.4,
  },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
    director: "Richard Marquand",
    duration: "2h 11min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 8.4,
  },
  {
    title: "Braveheart",
    year: 1995,
    director: "Mel Gibson",
    duration: "2h 58min",
    genre: ["Biography", "Drama", "History", "War"],
    rating: 8.4,
  },
  {
    title: "Reservoir Dogs",
    year: 1992,
    director: "Quentin Tarantino",
    duration: "1h 39min",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.3,
  },
  {
    title: "M",
    year: 1931,
    director: "Fritz Lang",
    duration: "1h 57min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    rating: 8.4,
  },
  {
    title: "Requiem for a Dream",
    year: 2000,
    director: "Darren Aronofsky",
    duration: "1h 42min",
    genre: ["Drama"],
    rating: 8.3,
  },
  {
    title: "Le fabuleux destin d'Amélie Poulain",
    year: 2001,
    director: "Jean-Pierre Jeunet",
    duration: "2h 2min",
    genre: ["Comedy", "Romance"],
    rating: 8.4,
  },
  {
    title: "Taare Zameen Par",
    year: 2007,
    director: "Aamir Khan",
    duration: "2h 45min",
    genre: ["Drama", "Family"],
    rating: 8.5,
  },
  {
    title: "A Clockwork Orange",
    year: 1971,
    director: "Stanley Kubrick",
    duration: "2h 16min",
    genre: ["Crime", "Drama", "Sci-Fi"],
    rating: 8.3,
  },
  {
    title: "Kimi no na wa.",
    year: 2016,
    director: "Makoto Shinkai",
    duration: "1h 46min",
    genre: ["Animation", "Drama", "Fantasy", "Romance"],
    rating: 8.5,
  },
  {
    title: "Lawrence of Arabia",
    year: 1962,
    director: "David Lean",
    duration: "3h 36min",
    genre: ["Adventure", "Biography", "Drama", "History", "War"],
    rating: 8.3,
  },
  {
    title: "Double Indemnity",
    year: 1944,
    director: "Billy Wilder",
    duration: "1h 47min",
    genre: ["Crime", "Drama", "Film-Noir", "Mystery", "Thriller"],
    rating: 8.3,
  },
  {
    title: "Amadeus",
    year: 1984,
    director: "Milos Forman",
    duration: "2h 40min",
    genre: ["Biography", "Drama", "History", "Music"],
    rating: 8.3,
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    director: "Michel Gondry",
    duration: "1h 48min",
    genre: ["Drama", "Romance", "Sci-Fi"],
    rating: 8.3,
  },
  {
    title: "Taxi Driver",
    year: 1976,
    director: "Martin Scorsese",
    duration: "1h 53min",
    genre: ["Crime", "Drama"],
    rating: 8.3,
  },
  {
    title: "To Kill a Mockingbird",
    year: 1962,
    director: "Robert Mulligan",
    duration: "2h 9min",
    genre: ["Crime", "Drama"],
    rating: 8.3,
  },
  {
    title: "Dunkirk",
    year: 2017,
    director: "Christopher Nolan",
    duration: "1h 46min",
    genre: ["Action", "Drama", "History", "Thriller", "War"],
    rating: 8.3,
  },
  {
    title: "Full Metal Jacket",
    year: 1987,
    director: "Stanley Kubrick",
    duration: "1h 56min",
    genre: ["Drama", "War"],
    rating: 8.3,
  },
  {
    title: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    duration: "2h 29min",
    genre: ["Adventure", "Sci-Fi"],
    rating: 8.3,
  },
  {
    title: "Singin' in the Rain",
    year: 1952,
    director: "Stanley Donen",
    duration: "1h 43min",
    genre: ["Comedy", "Musical", "Romance"],
    rating: 8.3,
  },
  {
    title: "Toy Story 3",
    year: 2010,
    director: "Lee Unkrich",
    duration: "1h 43min",
    genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    rating: 8.3,
  },
  {
    title: "Toy Story",
    year: 1995,
    director: "John Lasseter",
    duration: "1h 21min",
    genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    rating: 8.3,
  },
  {
    title: "The Sting",
    year: 1973,
    director: "George Roy Hill",
    duration: "2h 9min",
    genre: ["Comedy", "Crime", "Drama"],
    rating: 8.3,
  },
  {
    title: "3 Idiots",
    year: 2009,
    director: "Rajkumar Hirani",
    duration: "2h 50min",
    genre: ["Adventure", "Comedy", "Drama", "Romance"],
    rating: 8.4,
  },
  {
    title: "Ladri di biciclette",
    year: 1948,
    director: "Vittorio De Sica",
    duration: "1h 29min",
    genre: ["Drama"],
    rating: 8.3,
  },
  {
    title: "Inglourious Basterds",
    year: 2009,
    director: "Quentin Tarantino",
    duration: "2h 33min",
    genre: ["Adventure", "Drama", "War"],
    rating: 8.3,
  },
  {
    title: "The Kid",
    year: 1921,
    director: "Charles Chaplin",
    duration: "1h 8min",
    genre: ["Comedy", "Drama", "Family"],
    rating: 8.3,
  },
  {
    title: "Snatch",
    year: 2000,
    director: "Guy Ritchie",
    duration: "1h 44min",
    genre: ["Comedy", "Crime"],
    rating: 8.3,
  },
  {
    title: "Monty Python and the Holy Grail",
    year: 1975,
    director: "Terry Gilliam",
    duration: "1h 31min",
    genre: ["Adventure", "Comedy", "Fantasy"],
    rating: 8.3,
  },
  {
    title: "Good Will Hunting",
    year: 1997,
    director: "Gus Van Sant",
    duration: "2h 6min",
    genre: ["Drama"],
    rating: 8.3,
  },
  {
    title: "Jagten",
    year: 2012,
    director: "Thomas Vinterberg",
    duration: "1h 55min",
    genre: ["Drama"],
    rating: 8.3,
  },
  {
    title: "Per qualche dollaro in più",
    year: 1965,
    director: "Sergio Leone",
    duration: "2h 12min",
    genre: ["Western"],
    rating: 8.3,
  },
  {
    title: "L.A. Confidential",
    year: 1997,
    director: "Curtis Hanson",
    duration: "2h 18min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    rating: 8.3,
  },
  {
    title: "Scarface",
    year: 1983,
    director: "Brian De Palma",
    duration: "2h 50min",
    genre: ["Crime", "Drama"],
    rating: 8.3,
  },
  {
    title: "The Apartment",
    year: 1960,
    director: "Billy Wilder",
    duration: "2h 5min",
    genre: ["Comedy", "Drama", "Romance"],
    rating: 8.3,
  },
  {
    title: "Metropolis",
    year: 1927,
    director: "Fritz Lang",
    duration: "2h 33min",
    genre: ["Drama", "Sci-Fi"],
    rating: 8.3,
  },
  {
    title: "Jodaeiye Nader az Simin",
    year: 2011,
    director: "Asghar Farhadi",
    duration: "2h 3min",
    genre: ["Drama", "Mystery"],
    rating: 8.4,
  },
  {
    title: "Rashômon",
    year: 1950,
    director: "Akira Kurosawa",
    duration: "1h 28min",
    genre: ["Crime", "Drama", "Mystery"],
    rating: 8.3,
  },
  {
    title: "Indiana Jones and the Last Crusade",
    year: 1989,
    director: "Steven Spielberg",
    duration: "2h 7min",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: 8.3,
  },
  {
    title: "All About Eve",
    year: 1950,
    director: "Joseph L. Mankiewicz",
    duration: "2h 18min",
    genre: ["Drama"],
    rating: 8.3,
  },
  {
    title: "Yôjinbô",
    year: 1961,
    director: "Akira Kurosawa",
    duration: "1h 50min",
    genre: ["Action", "Drama", "Thriller"],
    rating: 8.3,
  },
  {
    title: "Babam ve Oglum",
    year: 2005,
    director: "Çagan Irmak",
    duration: "1h 48min",
    genre: ["Drama"],
    rating: 8.5,
  },
  {
    title: "Up",
    year: 2009,
    director: "Pete Docter",
    duration: "1h 36min",
    genre: ["Animation", "Adventure", "Comedy", "Family"],
    rating: 8.3,
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Adventure", "Thriller"],
    rating: 8.3,
  },
  {
    title: "Some Like It Hot",
    year: 1959,
    director: "Billy Wilder",
    duration: "2h 1min",
    genre: ["Comedy", "Romance"],
    rating: 8.3,
  },
  {
    title: "The Treasure of the Sierra Madre",
    year: 1948,
    director: "John Huston",
    duration: "2h 6min",
    genre: ["Adventure", "Drama", "Western"],
    rating: 8.3,
  },
  {
    title: "Unforgiven",
    year: 1992,
    director: "Clint Eastwood",
    duration: "2h 10min",
    genre: ["Drama", "Western"],
    rating: 8.2,
  },
  {
    title: "Der Untergang",
    year: 2004,
    director: "Oliver Hirschbiegel",
    duration: "2h 36min",
    genre: ["Biography", "Drama", "History", "War"],
    rating: 8.2,
  },
  {
    title: "Die Hard",
    year: 1988,
    director: "John McTiernan",
    duration: "2h 11min",
    genre: ["Action", "Thriller"],
    rating: 8.2,
  },
  {
    title: "Raging Bull",
    year: 1980,
    director: "Martin Scorsese",
    duration: "2h 9min",
    genre: ["Biography", "Drama", "Sport"],
    rating: 8.2,
  },
  {
    title: "Heat",
    year: 1995,
    director: "Michael Mann",
    duration: "2h 50min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rating: 8.2,
  },
  {
    title: "The Third Man",
    year: 1949,
    director: "Carol Reed",
    duration: "1h 44min",
    genre: ["Film-Noir", "Mystery", "Thriller"],
    rating: 8.3,
  },
];

console.log(movies);

// ! HTML und TS verheiraten
const movieContainer = document.querySelector(".all-movies");
const sortAscBtn = document.querySelector(".year-asc");
const sortDescBtn = document.querySelector(".year-desc");
const sortRatingBtn = document.querySelector(".best-rating");
const searchBtn = document.querySelector(".search-btn");
const userSearchInput = document.querySelector("input");

// ! mit einer Funktion Movie-Array entgegennehmen und für jeden Film HTML-Struktur erstellen, um die Filme visuell wiederzugeben bzw. zu rendern

function renderMovies(movies: movieItem[]) {
  if (movieContainer) movieContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-item");

    const title = document.createElement("h2");
    title.innerText = movie.title;
    // # Number to String
    const year = document.createElement("p");
    year.innerText = `${movie.year}`;

    const director = document.createElement("p");
    director.innerText = movie.director;

    const duration = document.createElement("p");
    duration.innerText = movie.duration;
    // # Array to String
    const genre = document.createElement("p");
    genre.innerText = movie.genre.join(", ");
    // # Number to String
    const rating = document.createElement("p");
    rating.innerText = `${movie.rating}`;

    movieCard.append(title, year, director, duration, genre, rating);

    if (movieContainer) {
      movieContainer.appendChild(movieCard);
    }
  });
}

renderMovies(movies);

// ! EventListener

sortAscBtn?.addEventListener("click", sortYearAscending);
sortDescBtn?.addEventListener("click", sortYearDescending);
sortRatingBtn?.addEventListener("click", sortRating);
searchBtn?.addEventListener("click", () =>
  filterMovies(userSearchInput ? userSearchInput.value : "")
);
userSearchInput?.addEventListener("keyup", () =>
  filterMovies(userSearchInput ? userSearchInput.value : "")
);

// # sortieren nach Jahr aufsteigend
function sortYearAscending() {
  // Kopie erstellen
  const sortedMovies = [...movies];
  sortedMovies.sort((a, b) => a.year - b.year);
  console.log(sortedMovies);
  renderMovies(sortedMovies);
}
// # sortieren nach Jahr absteigend

function sortYearDescending() {
  // Kopie erstellen
  const sortedMovies = [...movies];
  sortedMovies.sort((a, b) => b.year - a.year);
  console.log(sortedMovies);
  renderMovies(sortedMovies);
}

// # sortieren nach bester Bewertung
function sortRating() {
  // Kopie erstellen
  const sortedMovies = [...movies];
  sortedMovies.sort((a, b) => a.rating - b.rating);
  console.log(sortedMovies);
  renderMovies(sortedMovies);
}

// # filtern nach
function filterMovies(searchTerm: string) {
  // Kopie erstellen & Suchbegriff in Kleinbuchstaben umwandeln
  let lowerCaseSearchTerm = searchTerm.toLowerCase();
  let filteredMovies = [...movies];
  filteredMovies = filteredMovies.filter(
    (item) =>
      // # titel
      item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      // # director
      item.director.toLowerCase().includes(lowerCaseSearchTerm) ||
      // # year
      String(item.year).includes(searchTerm)
  );

  renderMovies(filteredMovies);
}
