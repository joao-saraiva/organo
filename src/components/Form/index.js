import { useState } from "react";
import "./Form.css";
import TextField from "../TextField";
import DropDown from "../DropDown";
import SubmitButton from "../SubmitButton";

const Form = (props) => {
  const teams = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [name, setName] = useState('User');
  const [office, setOffice] = useState('Programmer');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');


  const afterSave = (event) => {
    event.preventDefault();
    props.onEmployeeRegistered({name, office, image, team});
  }

  return (
    <section className="form">
      <form onSubmit={afterSave}>
        <h2>Preencha os Dados para criar o card do colaborador</h2>
        <TextField 
          required={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          value={name}
          changed={value => setName(value)}
        />
        <TextField 
          required={true} 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          value={office}
          changed={value => setOffice(value)}
          />
        <TextField 
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          changed={value => setImage(value)}
          />
        <DropDown 
          required={true}
          itens={teams} 
          label="Time"
          value={team}
          changed={value => setTeam(value)}
        />
        <SubmitButton> 
          Criar Card
        </SubmitButton>
      </form>
    </section>
  );
};

export default Form;
