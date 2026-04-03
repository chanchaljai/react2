import React from "react";
import Card from "./components/Card";
import Ex from "./components/Ex";

const App = () => {
  const users = [
  {
    "name": "Rahul Sharma",
    "city": "Delhi",
    "age": 25,
    "profession": "Software Developer",
    "profilePic": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "name": "Priya Verma",
    "city": "Mumbai",
    "age": 28,
    "profession": "UI/UX Designer",
    "profilePic": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "name": "Amit Kumar",
    "city": "Bangalore",
    "age": 30,
    "profession": "Data Analyst",
    "profilePic": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "name": "Sneha Gupta",
    "city": "Kolkata",
    "age": 24,
    "profession": "Frontend Developer",
    "profilePic": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "name": "Vikash Singh",
    "city": "Patna",
    "age": 27,
    "profession": "Backend Developer",
    "profilePic": "https://randomuser.me/api/portraits/men/5.jpg"
  }
]


  return (
    <>
      <div className="p-4 flex gap-4">
       {users.map(function(elem,idx){
          return <Card key={idx} name={elem.name} city={elem.city} age={elem.age} profession={elem.profession} profilePic={elem.profilePic}/>
       })}
      </div>
      <Ex name="Rahul" />
       
    </>
  );
};

export default App;
