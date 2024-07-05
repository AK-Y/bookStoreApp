import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Books from "./pages/books/Books";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books"
            element={authUser ? <Books /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </>
  );
}

export default App;
