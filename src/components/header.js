import classes from './header.module.scss';

function Header({ setSearchRes }) {

    const searchMovie =(e) => {
        setSearchRes(e.target.value)
    }

    return (
        <header className={classes.header}>
            <input type='text' placeholder='Search for movies...' onChange={searchMovie} title='Search for movies...'/>
        </header>
    )
}

export default Header;