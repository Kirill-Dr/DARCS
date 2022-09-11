import React, { useContext } from "react";
import { authContext } from "../../contexts/authContextProvider";
import "../../styles/loginPage.css";

const Login = () => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError, handleLogout, user } = useContext(authContext);

    return (
        <div>
            {user ? (
                <div className="auth-enter">
                    <div className="auth-info">
                        <h1 className="auth-info-one">Вы уже авторизованы!</h1>
                        <h2 className="auth-info-two">Ваш аккаунт: {user.email}</h2>
                    </div>
                    <div>
                        <button onClick={handleLogout} className="auth-logout">Выйти</button>
                    </div>
                </div>
            ) : (
                <div className="auth">
                    {emailError}<br />
                    {passwordError}<br />
                    <div className="auth-title">
                        {hasAccount ? (
                            <h1>Войти</h1>
                        ) : (
                            <h1>Зарегестрироваться</h1>
                        )}
                    </div>
                    <div className="auth-inputs">
                        <input type="text" placeholder="Введите почту" value={email} onChange={(e) => setEmail(e.target.value)} className="auth-input-one" />
                        <input type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} className="auth-input-two" />
                    </div>
                    <div className="auth-btns">
                        {hasAccount ? (
                            <button onClick={handleLogin} className="auth-login">Войти</button>
                        ) : (
                            <button onClick={handleSignUp} className="auth-register">Зарегестрироваться</button>
                        )}
                    </div>
                    <div className="auth-handle">
                        <h2>У вас уже есть аккаунт?</h2>
                        {hasAccount ? (
                            <button onClick={() => setHasAccount(false)} className="auth-no">Нет, зарегестрироваться</button>
                        ) : (
                            <button onClick={() => setHasAccount(true)} className="auth-yes">Да, войти</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;