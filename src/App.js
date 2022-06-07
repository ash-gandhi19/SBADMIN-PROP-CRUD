import "./App.css";
import Siderbar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import AllStudents from "./Components/AllStudents";
import AddStudents from "./Components/AddStudents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditStudent from "./Components/EditStudent";
import { useState } from "react";

function App() {
  let data = {
    annual: "20,000",
    earning: "2,40,000",
    pending: "12",
    task: "20",
  };

  let [students, setStudents] = useState([
    {
      name: "Aishwarya",
      email: "ash@gmail.com",
      mobile: "8983662057",
      class: "B30WD",
    },
    {
      name: "Rucha",
      email: "rucha@gmail.com",
      mobile: "7894561230",
      class: "B30WD",
    },
    {
      name: "Dheeraj",
      email: "dheeraj@gmail.com",
      mobile: "7523698412",
      class: "B30WD",
    },
  ]);
  return (
    <>
      <Router>
        <div style={{ display: "grid", gridTemplateColumns: "17% 83%" }}>
          <div>
            <Siderbar />
          </div>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard value={data} />} />
              <Route
                path="/all-students"
                element={<AllStudents value={{ students, setStudents }} />}
              />
              <Route
                path="/add-students"
                element={<AddStudents value={{ students, setStudents }} />}
              />
              <Route
                path="/edit-student/:id"
                element={<EditStudent value={{ students, setStudents }} />}
              />
              <Route path="/" element={<Dashboard value={data} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
