import { Route, Routes } from "react-router";
import { Header } from "./components/Header/Header";
import { MainPage } from "./Pages/MainPage/MainPage";
import { DevelopersPage } from "./Pages/DevelopersPage/DevelopersPage";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { UsersPage } from "./Pages/UsersPage/UsersPage";
import { Footer } from "./components/Footer/Footer";
import { MessengerPage } from "./Pages/MessengerPage/MessengerPage";
import { RegistrationPage } from "./Pages/RegistrationPage/RegisrationPage";
import { AuthorizationPage } from "./Pages/AuthorizationPage/AuthorizationPage";
import { RequestListPage } from "./Pages/RequestListPage/RequestListPage";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/messenger" element={<MessengerPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/request-list" element={<RequestListPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
