import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
// import './App.css';

function App() {
  return (
   
    <BrowserRouter>
       
      <Header/>
      <main>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/signin" element={<Signin/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
            <Route element={<NotFound/>}></Route>
        </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;
