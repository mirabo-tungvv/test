import Person from "../../components/Person";
import "./style.css";

const personList = [
  {
    name: "Tung 1",
    age: 18,
    address: "Ha Noi",
  },
  {
    name: "Tung 2",
    age: 19,
    address: "Nam Dinh",
  },
  {
    name: "Tung 3",
    age: 20,
    address: "Thai Binh",
  },
  {
    name: "Tung 4",
    age: 21,
    address: "Ha Noi",
  },
];

const PersonPage = () => {
  return (
    <div className="person-list">
      {personList.map((item, index) => {
        return (
          <Person
            name={item.name}
            key={index}
            age={item.age}
            address={item.address}
          />
        );
      })}
    </div>
  );
};

export default PersonPage;
