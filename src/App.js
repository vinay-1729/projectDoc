import logo from "./logo.svg";
import "./App.css";
import LoginPage from "../src/components/LoginPage";
import PatientsList from "./components/PatientsList";

function App() {
  return (
    <div className="App">
      <div className="">
        <LoginPage />
      {/* <PatientsList /> */}
      </div>
    </div>
  );
}

export default App;
