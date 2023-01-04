import "./TextField.css";
const TextField = (props) => {

  let textFieldValue = 'Gustavinho';

  const afterType = (event) => {
    textFieldValue = event.target.value
  }

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={textFieldValue} onChange={afterType} required={props.required} placeholder={props.placeholder} />
    </div>
  );
};

export default TextField;
