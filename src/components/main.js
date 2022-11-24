import classes from './main.module.scss';
import { useContext } from 'react';
import movieContext from '../context/movie-context';

function Main() {

    const main = useContext(movieContext)

    const movieArr = main.movie.map((item, i) => {
        return (
            <div
                key={i}
                className={classes.card}
                title={item.Title}
            >
                <div className={classes.imgContainer}>
                    <img src={item.Poster} alt='Not Found' />
                    <div className={classes.title}>
                        {item.Title}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <main className={main.error ? classes.error : classes.main}>
            {main.error ?
                <div className={classes.notFound}>
                    It's not you, its us! - {main.error} Please refresh.
                </div>
                : movieArr
            }
        </main>
    )
}

export default Main;