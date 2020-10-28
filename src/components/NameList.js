import React from "react";
import Person from "./Person";

const NameList = () => {
  const names = ["Hop", "Thu", "An"];
  const persons = [
    {
      id: 1,
      first_name: "Gary",
      last_name: "Ortiz",
      email: "gortiz0@mapy.cz",
      country: "Indonesia",
      modified: "2015-05-16",
      vip: false,
    },
    {
      id: 2,
      first_name: "Albert",
      last_name: "Williamson",
      email: "awilliamson1@narod.ru",
      country: "China",
      modified: "2015-03-11",
      vip: true,
    },
    {
      id: 3,
      first_name: "Mildred",
      last_name: "Fuller",
      email: "mfuller2@npr.org",
      country: "Peru",
      modified: "2015-02-15",
      vip: true,
    },
  ];
const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);
//   const personList = persons.map(person => (
//     <Person key={person.id} person={person}></Person>
//   ))
  return <div>{nameList}</div>;
};

export default NameList;
