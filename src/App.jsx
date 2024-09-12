import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import Home from "./pages/Home";
import Err from "./pages/Err";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Who from "./pages/Who";
import Footer from "./components/Footer";
import EventOptions from "./pages/eventsDeatails/EventOptions";
import PreviousEvents from "./pages/eventsDeatails/PreviousEvents";
import UploadEvent from "./pages/eventsDeatails/UploadEvent";
import Faqs from "./pages/Faqs";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import ForgetPassword from "./pages/ForgetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alumni from "./pages/Alumni";
import Student from "./pages/studentDetials/Student";
import About from "./pages/About";
import Alumnidetails from "./pages/Alumnidetails";
import { AlumniProvider } from "./context/AlumniContext";
import AllAlumni from "./pages/AllAlumni";
import { ResourceProvider } from "./context/ResourceContext";
import UploadResourcePage from "./pages/UploadResourcePage";
import ResourcesPage from "./pages/ResourcesPage";
import ResourceDetail from "./pages/ResourceDetail";
import Studentdetails from "./pages/studentDetials/StudentDetails";
import AllStudent from "./pages/studentDetials/AllStudent";
import { StudentProvider } from "./context/StudentContext";
import Contact from "./pages/Contact";
import AlumniEvents from "./pages/eventsDeatails/AlumniEvents";
import CollegeEvents from "./pages/eventsDeatails/CollegeEvents";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AlumniProvider>
          <StudentProvider>
            <ResourceProvider>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/header" element={<Header />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/*" element={<Err />} />
                <Route path="/who" element={<Who />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/student" element={<Student />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/faq" element={<Faqs />} />

                <Route path="/events" element={<EventOptions />} />
                <Route path="/uploadEvent" element={<UploadEvent />} />
                <Route path="/previousEvents" element={<PreviousEvents />} />
                <Route path="/alumniEvents" element={<AlumniEvents />} />
                <Route path="/collegeEvents" element={<CollegeEvents />} />

                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/alumni-details" element={<Alumnidetails />} />
                <Route path="/all-alumni" element={<AllAlumni />} />

                <Route path="/student-details" element={<Studentdetails />} />
                <Route path="/all-student" element={<AllStudent />} />

                <Route path="/upload" element={<UploadResourcePage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/resources/:id" element={<ResourceDetail />} />
              </Routes>
            </ResourceProvider>
          </StudentProvider>
        </AlumniProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
