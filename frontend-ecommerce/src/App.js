import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import UserDashboard from "./Components/UserDashboard";
import AdminDashboard from "./Components/AdminDashboard";
import AdminEditProduct from "./Components/AdminEditProduct";
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
            <Route exact path="/user/dashboard" element={<UserDashboard/>}></Route>
            <Route
							exact
							path='/admin/dashboard'
							element={<AdminDashboard />}
						/>
            <Route
							exact
							path='/admin/edit/product/:productId'
							element={<AdminEditProduct />}
						/>
            <Route element={<NotFound/>}></Route>

        </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;
