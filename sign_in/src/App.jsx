import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login-formik" element={<LoginForm />} />
        <Route path="/register-formik" element={<RegisterForm />} />
      </Routes>
    </>
  );
};

export default App;
