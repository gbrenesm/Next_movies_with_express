// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
import { getMovieDetail } from '../../services/index'

const Movie = ({movie}) => {
 
  // Fetching the data with useState and useEffect
  // const [movie, setMovie] = useState(null)
  // const router = useRouter()
  // const { id } = router.query


  // async function fetchData(movieId) {
  //   const movieData = await getMovieDetail(movieId)
  //   setMovie(movieData)
  // }
  
  // useEffect(() => {
  //   fetchData(id)
  // }, [])


  return(
    <>
    {movie &&
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Title: { movie.name }</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4"/>
        <p>Release year: {movie.releaseYear}</p>
        <p>Genre: {movie.genre}</p>
        <p>Rating: {movie.rating}</p>
      </div>
   </div>}
   </>
  )
}

export default Movie

// Fetching the data with getServerSideProps
export async function getServerSideProps(context){
  const movie = await getMovieDetail(context.query.id)
  
  return {
    props: {movie: movie.data[0]},
  }
}