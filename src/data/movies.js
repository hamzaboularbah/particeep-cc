const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMjg0NjU1MjgyNF5BMl5BanBnXkFtZTgwNzc5NjYyNDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTcxMjUwNjQ5N15BMl5BanBnXkFtZTgwNjk4MzI4NjM@._V1_.jpg"
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg"
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg"
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,639,1000_AL_.jpg"
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SY1000_CR0,0,678,1000_AL_.jpg"
  }
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
