import "./App.css";
import LoginPage from "../src/components/LoginPage";
import SignupPage from "../src/components/SignupPage";
import PatientsList from "./components/PatientsList";

function App() {
  return (
    <div className="App container mx-auto">
        {/* <LoginPage /> */}
      <SignupPage />
      {/* <PatientsList /> */}
    </div>
  );
}

export default App;
