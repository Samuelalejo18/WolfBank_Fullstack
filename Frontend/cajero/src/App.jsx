import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protectectedRoutes";
import { AuthProvider } from "./context/auth.context";
import Bank from "./pages/bank";
import LoginPage from "./pages/login";
function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Bank" element={<Bank />} />
        <Route element={<ProtectedRoute />}>
     
        </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
