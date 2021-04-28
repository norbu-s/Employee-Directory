import './App.css';
import Table from './components/Table';
import React from "react";

function App() {
  //API call to get employee details//
  React.useEffect(function () {
    fetch("https://randomuser.me/api?results=10")
    .then(res => {
      return(res.json())
    }).then(users => {
      setUsers(users.results) 
    })
    },[])
  const[users, setUsers] = React.useState(
    []
  )
  console.log("return",users)
  return (
    <div className="App">
      <h1>Employees Directory</h1>
      <Table users={users}/>
    </div>
  );
}


export default App;
