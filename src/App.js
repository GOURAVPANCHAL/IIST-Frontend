import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CenterLogin from "./Components/centerLogin/CenterLogin";
import "../src/style.css";
import About from "./Pages/About/About";
import VerifyCenterCode from "./Pages/VerifyCenterCode/VerifyCenterCode";
import Franchise from "./Pages/Franchise/Franchise";
import Programs from "./Pages/Programs/Programs";
import Contact from "./Pages/Contact/Contact";
import "./style.css";
import DocumentVerification from "./Pages/DocumentVerification/DocumentVerification";
import Examination from "./Pages/Examination/Examination";
import AdvanceLearning from "./Pages/AdvanceLearning/AdvanceLearning";
import Studentlogin from "./Pages/Studentlogin/Studentlogin";
import ApplicationFormInformation from "./Pages/AllForms/ApplicationFormInformation";
import RegistrationForm from "./Pages/AllForms/RegistrationExaminationForm";
import EstablishmentForm from "./Pages/AllForms/EstablishmentForm";
import CandidateTraningForm from "./Pages/AllForms/CandidateTraningForm";
import ComputerScience from "./Pages/ProgramCourseList/ComputerScience";
import TeacherTraining from "./Pages/ProgramCourseList/TeacherTraining";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="centre-login" element={<CenterLogin />} />
        <Route
          path="/student-services/verify-center-code"
          element={<VerifyCenterCode />}
        />
        <Route
          path="/student-services/IISD-franchise"
          element={<Franchise />}
        />
        <Route path="/programs" element={<Programs />} />
        <Route
          path="/student-zone/document-verifications"
          element={<DocumentVerification />}
        />
        <Route path="/student-zone/Examination" element={<Examination />} />
        <Route
          path="/student-services/advance-learning"
          element={<AdvanceLearning />}
        />
        <Route path="/student-login" element={<Studentlogin />} />
        {/* all form */}
        <Route
          path="/application-form"
          element={<ApplicationFormInformation />}
        />
        <Route path="/student-zone/registration-form" element={<RegistrationForm />} />
        <Route
          path="/application-form-for-establishmen"
          element={<EstablishmentForm />}
        />
        <Route
          path="/student-zone/candidate-training-form"
          element={<CandidateTraningForm />}
        />
        {/* all form end */}
        <Route path="/contact" element={<Contact />} />

        {/* all program list  */}
        <Route
          path="/programs/computer-science-&-IT"
          element={<ComputerScience />}
        />
        <Route
          path="/programs/teacher-training"
          element={<TeacherTraining />}
        />
        {/* all program list end */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
