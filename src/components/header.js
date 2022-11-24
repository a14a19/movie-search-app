import classes from './header.module.scss';

function Header({ searchRes, setSearchRes }) {

    const searchMovie =(e) => {
        setSearchRes(e.target.value)
    }

    return (
        <header className={classes.header}>
            <input type='text' placeholder='Search for movies...' onChange={searchMovie}/>
        </header>
    )
}

export default Header;