function Movie({ data }) {
    return (
        <div className="container d-flex flex-column gap-3">
            <div className="d-flex justify-content-center">
                <div className="mt-4 p-4 text-center bg-primary text-white rounded">
                    <h1>MyMovie is Here!</h1>
                    <p>Find your movies with ease. Discover movies with ease. Find detailed information on your favourite films. Your one-stop destination for all things movies.</p>
                </div>
            </div>
            <h2 className="text-bg-dark m-0">Movies</h2>
            <div className="d-flex gap-3 flex-wrap">
                {data ? (data.map(el => (
                    <div className="flex-grow-1 card" style={{ width: '300px' }} key={el.imdbID}>
                        <div className="card-img-top">
                            <img src={el.Poster} alt="..." style={{width: '100%'}} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{el.Title}</h5>
                            <p className="card-text">Film {el.Title}, produced in {el.Year}</p>
                        </div>
                    </div>
                ))) : (
                        <p className="rounded-2 p-3 bg-secondary fw-bold text-bg-secondary">There are no movies found!</p>
                )}
            </div>
        </div>
    )
}

export default Movie
