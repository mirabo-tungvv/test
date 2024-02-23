/* eslint-disable react/prop-types */
import "./style.css";

const Person = ({ name, age, address }) => {
  const handleClick = () => {
    console.log(name, age, address);
  };
  return (
    <div
      className={`person ${age > 20 ? "bg-pink" : "bg-green"}`}
      onClick={handleClick}
    >
      <h4>This is person {name}</h4>
      <h4>Age is {age}</h4>
      <h4>Address is {address}</h4>
    </div>
  );
};

export default Person;
