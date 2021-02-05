const Carousel = ({images}) => {

  return (
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{paddingBottom: '48px' }}>
    <ol className="carousel-indicators">
      {images.map((_, i) => (
        <li key={i} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className={i === 0 ? 'active' : ''}></li>
      ))}
    </ol>
    <div className="carousel-inner">
      {images.map((image, i) => (
        <div key={image.id} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
          <img src={image.url} className="d-block w-100" alt={image.name} style={{maxHeight: '348px' }}/>
        </div>
      ))}
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </a>
  </div>
  )
}

export default Carousel
