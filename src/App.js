import React, { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

const App = () => {
  // if accessing from an array:
  // const contacts = [
  //   {
  //     avatarURL: "https://via.placeholder.com/150",
  //     name: "test 1",
  //     email: "test 1 email",
  //     age: "test 1 age",
  //   },

  //   {
  //     avatarURL: "https://via.placeholder.com/150",
  //     name: "test 2",
  //     email: "test 2 email",
  //     age: "test 2 age",
  //   },

  //   {
  //     avatarURL: "https://via.placeholder.com/150",
  //     name: "test 3",
  //     email: "test 3 email",
  //     age: "test 3 age",
  //   },
  // ];

  const [results, setResults] = useState([]);

  // fetching data from a API, only does it once :
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
    // useEffect hook will always run for the first time
    // adding in a empty array ([]) will make it so it won't trigger again because there's nothing to be added
  }, []);

  return (
    <div>
      {/* naming of parameter based on api naming */}
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            avatarURL={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
    </div>
  );
};

export default App;
