import Modal from './Modal'
import FromCreateMovie from './FormCreateMovie'

// Import services
import { createMovie } from '../services/index'
// import { createMovie } from '../pages/api/movies' 

const SideMenu = ({categories}) => {

  const  createMovieSumbit = movie => {
    createMovie(movie).then(movies => console.log(movies))
    // createMovie(movie).then(movies => console.log(movies))
  }

  return (
    <div>
      <Modal>
        <FromCreateMovie categories={categories} createMovieSumbit={createMovieSumbit}/>
      </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories.map(category => (
          <a href="#" key={category.id} className="list-group-item">{category.name}</a>
        ))}
      </div>
    </div>
  )
}

export default SideMenu