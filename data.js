// TÜM FİLMLER (IMDB puanı yüksek, ünlü, Oscar'lı)
const allMovies = [
    { id: 1, title: "Esaretin Bedeli", year: 1994, rating: 9.3, duration: "2s 22dk", category: "drama", type: "movie" },
    { id: 2, title: "Baba", year: 1972, rating: 9.2, duration: "2s 55dk", category: "drama", type: "movie" },
    { id: 3, title: "Kara Şövalye", year: 2008, rating: 9.0, duration: "2s 32dk", category: "action", type: "movie" },
    { id: 4, title: "Yüzüklerin Efendisi: Kralın Dönüşü", year: 2003, rating: 8.9, duration: "3s 21dk", category: "fantasy", type: "movie" },
    { id: 5, title: "Pulp Fiction", year: 1994, rating: 8.9, duration: "2s 34dk", category: "crime", type: "movie" },
    { id: 6, title: "Forrest Gump", year: 1994, rating: 8.8, duration: "2s 22dk", category: "drama", type: "movie" },
    { id: 7, title: "Başlangıç", year: 2010, rating: 8.8, duration: "2s 28dk", category: "sci-fi", type: "movie" },
    { id: 8, title: "Matrix", year: 1999, rating: 8.7, duration: "2s 16dk", category: "sci-fi", type: "movie" },
    { id: 9, title: "İyi, Kötü ve Çirkin", year: 1966, rating: 8.8, duration: "2s 58dk", category: "western", type: "movie" },
    { id: 10, title: "Fight Club", year: 1999, rating: 8.8, duration: "2s 19dk", category: "drama", type: "movie" },
    { id: 11, title: "Yıldızlararası", year: 2014, rating: 8.7, duration: "2s 49dk", category: "sci-fi", type: "movie" },
    { id: 12, title: "Leon", year: 1994, rating: 8.5, duration: "1s 50dk", category: "action", type: "movie" },
    { id: 13, title: "Yeşil Yol", year: 1999, rating: 8.6, duration: "3s 9dk", category: "drama", type: "movie" },
    { id: 14, title: "Gladyatör", year: 2000, rating: 8.5, duration: "2s 35dk", category: "action", type: "movie" },
    { id: 15, title: "Parazit", year: 2019, rating: 8.5, duration: "2s 12dk", category: "drama", type: "movie" },
    { id: 16, title: "Titanik", year: 1997, rating: 7.9, duration: "3s 14dk", category: "romance", type: "movie" },
    { id: 17, title: "Joker", year: 2019, rating: 8.4, duration: "2s 2dk", category: "drama", type: "movie" },
    { id: 18, title: "Whiplash", year: 2014, rating: 8.5, duration: "1s 47dk", category: "drama", type: "movie" },
    { id: 19, title: "Mad Max: Fury Road", year: 2015, rating: 8.1, duration: "2s", category: "action", type: "movie" },
    { id: 20, title: "The Social Network", year: 2010, rating: 7.7, duration: "2s", category: "drama", type: "movie" }
];

// TÜM DİZİLER
const allSeries = [
    { id: 101, title: "Breaking Bad", year: 2008, rating: 9.5, seasons: 5, category: "crime", type: "series" },
    { id: 102, title: "Game of Thrones", year: 2011, rating: 9.2, seasons: 8, category: "fantasy", type: "series" },
    { id: 103, title: "Chernobyl", year: 2019, rating: 9.3, seasons: 1, category: "drama", type: "series" },
    { id: 104, title: "The Wire", year: 2002, rating: 9.3, seasons: 5, category: "crime", type: "series" },
    { id: 105, title: "Sopranos", year: 1999, rating: 9.2, seasons: 6, category: "crime", type: "series" },
    { id: 106, title: "Friends", year: 1994, rating: 8.9, seasons: 10, category: "comedy", type: "series" },
    { id: 107, title: "Sherlock", year: 2010, rating: 9.1, seasons: 4, category: "crime", type: "series" },
    { id: 108, title: "Stranger Things", year: 2016, rating: 8.7, seasons: 4, category: "sci-fi", type: "series" },
    { id: 109, title: "The Crown", year: 2016, rating: 8.6, seasons: 6, category: "drama", type: "series" },
    { id: 110, title: "Black Mirror", year: 2011, rating: 8.7, seasons: 6, category: "sci-fi", type: "series" },
    { id: 111, title: "The Office", year: 2005, rating: 8.9, seasons: 9, category: "comedy", type: "series" },
    { id: 112, title: "Dark", year: 2017, rating: 8.8, seasons: 3, category: "sci-fi", type: "series" },
    { id: 113, title: "The Mandalorian", year: 2019, rating: 8.7, seasons: 3, category: "sci-fi", type: "series" },
    { id: 114, title: "Rick and Morty", year: 2013, rating: 9.1, seasons: 7, category: "animation", type: "series" },
    { id: 115, title: "The Last of Us", year: 2023, rating: 8.8, seasons: 1, category: "action", type: "series" }
];