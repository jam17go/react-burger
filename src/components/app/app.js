import AppHeader from "../app-header/app-header.js";
import styles from "./app.module.css";
import { loadIngredients } from "../../services/burger-ingredients/actions.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HomePage } from "../../pages/home-page.js";
import { RegisterPage } from "../../pages/register-page.js";
import { LoginPage } from "../../pages/login-page.js";
import { ForgotPasswordPage } from "../../pages/forgot-password-page.js";
import { ResetPasswordPage } from "../../pages/reset-password-page.js";
import { ProfilePage } from "../../pages/profile-page.js";
import { IngredientsPage } from "../../pages/ingredients-page.js";
import { NotFound404Page } from "../../pages/not-found-404-page.js";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";

function App() {
  const dispatch = useDispatch();
  
  let location = useLocation();
  let state = location.state;

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/ingredients/:id" element={<IngredientsPage />} />
          <Route path="*" element={<NotFound404Page />} />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
