import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
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
    </div>
  );
}

export default App;
