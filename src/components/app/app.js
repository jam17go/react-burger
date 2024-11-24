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
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route.js";
import { checkUserAuth } from "../../services/user/actions.js";
import { Error } from "../error/error.js";
import { ProfileTab } from "../profile/profile-tab.js";
import { OrderHistoryTab } from "../profile/order-history-tab.js";

function App() {
  const dispatch = useDispatch();

  let location = useLocation();
  let state = location.state;

  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(loadIngredients());
  }, []);

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<OnlyUnAuth component={<LoginPage />} />} />
          <Route path="/register" element={<OnlyUnAuth component={<RegisterPage />} /> } />
          <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPasswordPage />} /> } />
          <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPasswordPage />} /> } />
          <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} /> }>
            <Route index element={<ProfileTab />} />
            <Route path="profile-tab" element={<ProfileTab />} />
            <Route path="order-history-tab" element={<OrderHistoryTab />} />
          </Route>
          <Route path="/ingredients/:id" element={<IngredientsPage />} />
          <Route path="*" element={<Error errorText={'Ошибка 404 - страница не найдена'} />} />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
