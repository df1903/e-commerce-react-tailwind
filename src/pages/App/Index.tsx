// Core
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

// Routes
import AppRouter from "../Routes/Index";
import NavBar from "../../components/Navbar/Index";

// Styles
import "../../App.css";

const App: FC = () => (
  <BrowserRouter>
    <NavBar />
    <AppRouter />
  </BrowserRouter>
);

export default App;
