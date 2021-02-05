import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const MOVIE_DATA = []

export const categories = [
  {"id": "c-1", "name": "Drama"},
  {"id": "c-2", "name": "Action"},
  {"id": "c-3", "name": "Adventure"},
  {"id": "c-4", "name": "Historical"},
  {"id": "c-5", "name": "Music"}
]



export const getCategories = () => {
  return new Promise((resolve, reject) => {
      resolve(categories)
    }
  )
}

export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/movies`).then(res => res.data)
}

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 5)
  return axios.post(`${BASE_URL}/api/movies`, movie).then(res => res.data)
}

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/movies/${id}`).then(res => res.data)
}

export const updateMovie = (movie) => {
  return axios.patch(`${BASE_URL}/api/movies/${movie.id}`, movie)
    .then(res => res.data)
}

export const deleteMovie = (id) => {
  return axios.delete(`${BASE_URL}/api/movies/${id}`).then(res => res.data)
}



export const getPosts = () => {
  return axios.get(`${BASE_URL}/api/posts`).then(res => res.data)
}