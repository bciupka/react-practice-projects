import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar source="https://miro.medium.com/v2/resize:fit:1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg" />
      <div className="data">
        <Intro
          name="Black White"
          description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.source} alt="Avatar" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="first-skill" emoji="💪" bgColor="red" />
      <Skill skill="second-skill" emoji="💪" bgColor="cyan" />
      <Skill skill="third-skill" emoji="💪" bgColor="green" />
      <Skill skill="fourth-skill" emoji="💪" bgColor="pink" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
