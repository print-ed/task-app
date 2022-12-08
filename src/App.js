import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Comments from "./components/Comments";
import Task from "./components/Task";
import Login from "./components/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/task' element={<Task/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;