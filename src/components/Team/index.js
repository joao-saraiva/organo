import Employee from "../Employee";
import "./Team.css";

const Team = (props) => {
  return (
    props.employees.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secundaryColor }}
      >
        <h3 style={{ borderBottomColor: props.primaryColor }}>{props.name}</h3>
        <div className="cardSection">
          {props.employees.map((employee) => (
            <Employee
              name={employee.name}
              office={employee.office}
              image={employee.image}
              backgroundColor={props.primaryColor}
              key={employee.name}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
