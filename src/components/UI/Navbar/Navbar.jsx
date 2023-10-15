import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css'
import {AuthContext} from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={cl.navbar}>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>

            <div className={cl.navbar__links}>
                <Link to="about">About</Link>
                <Link to="posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;