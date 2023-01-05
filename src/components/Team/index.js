import Employee from "../Employee";
import "./Team.css";

const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.secundaryColor }}>
      <h3 style={{ borderBottomColor: props.primaryColor }}>{props.name}</h3>
      <Employee />
    </section>
  );
};

export default Team;
