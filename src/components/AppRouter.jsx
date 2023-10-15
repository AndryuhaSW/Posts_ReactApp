import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../Pages/Login";
import Posts from "../Pages/Posts";
import {useContext} from "react";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<route.element/>} key={route.path}/>
                )}
                <Route path="*" element={<Posts/>} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={<route.element/>} key={route.path}/>
                )}
                <Route path="*" element={<Login/>} />
            </Routes>
    );
};

export default AppRouter;