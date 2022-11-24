import classes from './header.module.scss';
import { useContext } from 'react';
import movieContext from '../context/movie-context';

function Header() {

    const header = useContext(movieContext)

    const searchMovie = (e) => {
        if (e.target.value.length > 2) {
            header.setSearchRes(e.target.value)
        }
    }

    return (
        <header className={classes.header}>
            <input type='text' placeholder='Search for movies...' onChange={searchMovie} title='Please enter min 3 character' />
        </header>
    )
}

export default Header;