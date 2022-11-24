import classes from './footer.module.scss';

function Footer() {
    return (
        <footer className={classes.footer}>
            &copy;
            <a href='https://a14a19.github.io/' target='_blank' rel='noreferrer' className={classes.mypage}>
                Anas Ahmed
            </a>
            <div className={classes.social}>
                <a href='https://www.linkedin.com/in/anas-ahmed-3b927913a/' target='_blank' rel='noreferrer' title='Connect on LinkedIn'>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href='https://github.com/a14a19/movie-search-app.git' title='View code on Github' target='_blank' rel='noreferrer'>
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href='mailto:anas31197@gmail.com' target='_blank' rel='noreferrer' title='Email me'>
                    <i className="fa-solid fa-envelope"></i>
                </a>
                <a href='https://wa.me/+18507248774' target='_blank' rel='noreferrer' title='Connect on Whatsapp'>
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;