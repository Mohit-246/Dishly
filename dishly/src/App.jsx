import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="bg-stone-100">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
