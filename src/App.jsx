import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      {/* <h1>React with Appwrite</h1> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
