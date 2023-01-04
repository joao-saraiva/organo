import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
function App() {

  const [employees, setEmployee] = useState([]);

  const onEmployeeRegistered = (employee) => {
    console.log(employee);
    setEmployee([...employees, employee]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onEmployeeRegistered={onEmployeeRegistered}/>
      <Team name="Programação"/>
      <Team name="Front-End"/>
      <Team name="Data Science" />
      
    </div>
  );
}

export default App;
