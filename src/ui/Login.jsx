const Login = () => {
    return(
        <div>
            <div className="login__modal">
                <div className="login__container">
                    <div className="login__row">
                        <form action="login__form">
                            <input type="email">User Email Address:</input>
                            <input type="password">User Password:</input>
                            <button className="login__btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;