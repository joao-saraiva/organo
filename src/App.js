import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secundaryColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82cffa",
      secundaryColor: "#e8f8ff",
    },
    {
      name: "Data Science",
      primaryColor: "#a6d157",
      secundaryColor: "#f0f8e2",
    },
    {
      name: "Devops",
      primaryColor: "#e06b69",
      secundaryColor: "#fde7e8",
    },
    {
      name: "UX e Design",
      primaryColor: "#db6ebf",
      secundaryColor: "#fae9f5",
    },
    {
      name: "Mobile",
      primaryColor: "#ffba05",
      secundaryColor: "#fff5d9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#ff8a29",
      secundaryColor: "#ffeedf",
    },
  ];

  const [employees, setEmployee] = useState([]);

  const onEmployeeRegistered = (employee) => {
    setEmployee([...employees, employee]);
  };

  return (
    <div className="App">
      <Banner />
      <Form onEmployeeRegistered={onEmployeeRegistered} />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secundaryColor={team.secundaryColor}
        />
      ))}
    </div>
  );
}

export default App;
