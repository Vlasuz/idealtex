import './assets/initial/css/style.css'
import {Main} from './pages/main/Main';
import {Header} from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";

export const App = () => {
    return (
        <div className={"wrapper"}>
            <Header/>

            <Routes>
                <Route element={<Main/>} path={'/'} />
            </Routes>

            <Footer/>
        </div>
    );
}
