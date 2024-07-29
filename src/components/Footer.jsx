const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__row">
                <ul className="footer__link--list">
                    <li className="list__item">
                        <a href="/" className="item__link footer--link click">Login</a>
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <h6>tomoroxa studios</h6>
                <h4>Copyright &copy; 2024</h4>
            </div>
        </footer>
    );
}

export default Footer