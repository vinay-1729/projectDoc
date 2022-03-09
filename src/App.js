import "./App.css";
// import LoginPage from "../src/components/LoginPage";
// import SignupPage from "../src/components/SignupPage";
import PatientsList from "./components/PatientsList";
import HomePage from "../src/components/HomePage";
import PatientDashboard from "./components/Patient/PatientDashboard"
import Dashboard from "../src/components/Dashboard/Dashboard"

function App() {
  return (
    <div className="App container mx-auto">
        {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      {/* <PatientsList /> */}
      {/* <HomePage /> */}
      <PatientDashboard />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
