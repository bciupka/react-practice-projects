import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  function handleAddFriend(newFriend) {
    setFriends((curFriends) => [...curFriends, newFriend]);
  }

  return (
    <div className="app">
      <Sidebar friends={friends} onAddFriend={handleAddFriend} />
      <FormSplitBill />
    </div>
  );
}

function Sidebar({ friends, onAddFriend }) {
  const [showAddForm, setShowAddForm] = useState(false);
  function handleClickAddFriend() {
    setShowAddForm((cur) => !cur);
  }

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
      {showAddForm && <FormAddFriend onAddFriend={onAddFriend} />}
      <Button onClick={handleClickAddFriend}>
        {showAddForm ? "Close" : "Add friend"}
      </Button>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt="friends portrait" />
      <h3>{friend.name}</h3>
      {friend.balance !== 0 ? (
        <p className={friend.balance > 0 ? "green" : "red"}>
          {friend.balance > 0
            ? `${friend.name} owes you ${friend.balance}$`
            : `You owe ${friend.name} ${Math.abs(friend.balance)}$`}
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )}
      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name && image) {
      const newFriend = {
        name,
        balance: 0,
        image: `https://i.pravatar.cc/48?u=${image}`,
        id: crypto.randomUUID(),
      };
      onAddFriend(newFriend);
      setName("");
      setImage("");
    }
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split bill with friend</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>👦 Your expense</label>
      <input type="text" />
      <label>👩‍💼 Friend's expense</label>
      <input type="text" disabled />
      <label>🤑 Who is paying?</label>
      <select>
        <option value="You">You</option>
        <option value="Friend">Friend</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
