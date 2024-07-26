import NavLogo from '../assets/dndampersand.png'

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <div className="nav__row">
                    <div className="nav__top">
                        <figure className="nav__logo--wrapper">
                            <a href="/" className='logo__link'>
                                <img src={NavLogo} className="nav--logo click" />
                            </a>
                        </figure>
                        <button className='init__btn'>Let's Roll</button>
                        <ul className="nav__link--list">
                            <li className="list__item">
                                <a href="" className="item__link click">Log In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav