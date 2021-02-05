import { useState } from 'react';

const MovieCreateForm = ({categories, createMovieSumbit}) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    rating: '',
    image: '',

  })

  const handleChange = e => {
    setForm({...form, 
      [e.target.name]: e.target.value})
  }

  const handelSubmit = e => {
    e.preventDefault(e)
    createMovieSumbit({...form})
  }


  return (
    <form onSubmit={handelSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm" htmlFor="name">Name</span>
        <input  name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"  aria-describedby="emailHelp" placeholder="Lord of the Rings" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm" htmlFor="description">Description</span>
        <input  name="description"
                id="description"
                value={form.description}
                onChange={handleChange}
                type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"  placeholder="Somewhere in Middle-earth..." />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm" htmlFor="description">Rating</span>
        <input  name="rating"
                id="rating"
                value={form.rating}
                onChange={handleChange}
                type="number" max="5" min="0" className="input-group-text" placeholder="3" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm" htmlFor="image">Image</span>
        <input  name="image"
                id="image"
                value={form.image}
                onChange={handleChange}
                type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"   placeholder="http://....." />
      </div>
      <div className="col-auto">
        <select name="genre" onChange={handleChange} className="form-select" id="autoSizingSelect" id="genre">
          <option default>Choose a genre...</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary"  data-bs-dismiss="modal">Save changes</button>
    </form>
  )
}

export default MovieCreateForm