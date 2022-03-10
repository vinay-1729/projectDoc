import "./App.css";
// import LoginPage from "./components/Login/LoginPage";
// import SignupPage from "./components/Login/SignupPage";
// import PatientsList from "./components/PatientsList";
// import HomePage from "../src/components/HomePage";
import PatientDashboard from "./components/Patient/PatientDashboard"
import Prescription from "./components/Patient/AddPrescription.jsx"
// import ChatBody from "./components/Chat/components/chatBody/ChatBody"

function App() {
  return (
    <div className="App container mx-auto">
        {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      {/* <PatientsList /> */}
      {/* <HomePage /> */}
      {/* <PatientDashboard /> */}
      <Dashboard />
      {/* <ChatBody /> */}
      {/* <Prescription /> */}
    </div>
  );
}

export default App;
