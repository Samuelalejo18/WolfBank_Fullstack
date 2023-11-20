import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protectectedRoutes";
import { AuthProvider } from "./context/auth.context";
import Bank from "./pages/bank";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={< RegisterPage />} />
           
            <Route element={<ProtectedRoute />}>
            <Route path="/Bank" element={<Bank />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
