import { Routes, Route } from "react-router-dom"
import "./App.css";
import Mainpost from "./pages/MainPost/MainPost"
import NewPost from "./pages/NewPost/NewPost"


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Mainpost />} />
                <Route path="/new-post" element={<NewPost />} />
            </Routes>
        </>
    );
}

export default App;
