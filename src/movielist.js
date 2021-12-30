import MovieCard from "./moviecard";

function MovieList({ moviedata, rate, title }) {

    return (
        <div>
            {
                moviedata.filter(el => el.rate >= rate && el.title.toUpperCase().includes(title.toUpperCase())).map((el, i) =><MovieCard el={el} /> )
            }

        </div>
    )
}
export default MovieList