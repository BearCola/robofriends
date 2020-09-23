import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

const App = () => {
  const [robot, setRobot] = useState([]);
  const [filteredRobot, setFilteredRobot] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await response.json();
      setRobot(users);
      setFilteredRobot(users);
    };

    getData();

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((users) => {
    //     console.log(users);
    //     setRobot(users);
    //     setFilteredRobot(users);
    //   });
  }, []);

  useEffect(() => {
    filterRobots();
  }, [searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
    // setSearchField((state) => {
    //   const filteredRobots = robots.filter((currentRobot) => {
    //     console.log(currentRobot.name, searchField);
    //
    //     return currentRobot.name.toLowerCase().includes(state.toLowerCase());
    //   });
    //   setRobot(filteredRobots);
    //   return state;
    // });
  };

  const filterRobots = () => {
    const filteredRobots = robot.filter((currentRobot) => {
      console.log(currentRobot.name, searchField);

      return currentRobot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    setFilteredRobot(filteredRobots);
  };

  console.log(robot);

  if (robot.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobot} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
