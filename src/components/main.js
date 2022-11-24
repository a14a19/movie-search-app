import classes from './main.module.scss';

function Main({ movie, searchRes }) {

    const movieArr = movie.map((item, i) => {
        return (
            <div 
                key={i} 
                className={classes.card} 
                title={searchRes ? item.title : item.Title}
            >
                <div className={classes.imgContainer}>
                    <img 
                        src={searchRes ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}` : item.Poster} 
                        alt='Not Found' 
                    />
                </div>
                <div className={classes.title}>
                    {searchRes ? item.title : item.Title}
                </div>
            </div>
        )
    })

    return (
        <main className={classes.main}>
            {movie.length === 0 ? <div className={classes.notFound}>No movie found</div> : movieArr}
        </main>
    )
}

export default Main;