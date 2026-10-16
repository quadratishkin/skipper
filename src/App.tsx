import { Route, Routes } from "react-router";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AuthPage } from "./Pages/AuthPage/AuthPage";
import { CatalogPage } from "./Pages/CatalogPage/CatalogPage";
import { CreateRequestPage } from "./Pages/CreateRequestPage/CreateRequestPage";
import { DevelopersPage } from "./Pages/DevelopersPage/DevelopersPage";
import { MainPage } from "./Pages/MainPage/MainPage";
import { MessengerPage } from "./Pages/MessengerPage/MessengerPage";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { RequestPage } from "./Pages/RequestPage/RequestPage";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          {/* ============ ОБЩИЕ ============ */}
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/developers" element={<DevelopersPage />} />

          {/* ============ ЗАЯВКИ НА КОНСУЛЬТАЦИЮ (Request) ============ */}
          <Route path="/requests/new" element={<CreateRequestPage />} />
          <Route
            path="/requests/:requestId/edit"
            element={<CreateRequestPage />}
          />
          <Route path="/requests/:requestId" element={<RequestPage />} />
          {/* <Route path="/requests/my" element={<MyRequestsPage />} /> */}

          {/* ============ ЗАЯВКИ НА МЕНТОРСТВО (MentorApplication) ============ */}
          {/* <Route
            path="/mentor-applications/new"
            element={<CreateMentorApplicationPage />}
          />
          <Route
            path="/mentor-applications/:id/edit"
            element={<CreateMentorApplicationPage />}
          />
          <Route
            path="/mentor-applications/:id"
            element={<MentorApplicationPage />}
          />
          <Route
            path="/mentor-applications/my"
            element={<MyMentorApplicationsPage />}
          /> */}

          {/* ============ АДМИН ============ */}
          {/* <Route
            path="/admin/mentor-applications"
            element={<AdminMentorApplicationsPage />}
          />
          <Route
            path="/admin/mentor-applications/:id"
            element={<AdminMentorApplicationPage />}
          /> */}

          {/* ============ МЕНТОР ============ */}
          {/* <Route path="/mentor/requests" element={<MentorRequestsPage />} /> */}

          {/* ============ ПРОЧЕЕ ============ */}
          <Route path="/messenger" element={<MessengerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
