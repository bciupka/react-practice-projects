import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar
        className="avatar"
        source="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
      />
      <div className="data">
        <Intro name="Black White" description="Lorem Ipsum" />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.source} alt="Avatar" />;
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
    <div backgroundColor={props.bgColor}>
      <p>{props.skill}</p>
      <p>{props.emoji}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <Skill skill="first-skill" emoji="💪" bgColor="red" />
      <Skill skill="second-skill" emoji="💪" bgColor="blue" />
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
