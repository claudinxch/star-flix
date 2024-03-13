import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import Error from "./pages/Error";

import Header from "./components/Header"

function RoutesApp() {
    return(
        <BrowserRouter>
            <HeaderWrapper />
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/movie/:id" element={ <Movie />} />
                <Route path="/favorites" element={ <Favorites/> } />
                <Route path="/top-rated" element={ <TopRated/> } />
                <Route path="/upcoming" element={ <Upcoming/> } />

                <Route path="*" element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    );
}

function HeaderWrapper() {
    const location = useLocation();

    return <Header currentPath={location.pathname} />;
}


export default RoutesApp;