import React from "react";
import { useAppSelector } from "../../redux/hooks";

const ListOfPersons = () => {
  // To Fetch list of persons we need App Selector
  const persons = useAppSelector((state) => state.person.persons);
  return (
    <div>
      <p>This is List of Persons</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfPersons;
