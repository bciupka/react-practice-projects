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
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  function handleAddFriend(newFriend) {
    setFriends((curFriends) => [...curFriends, newFriend]);
    setShowAddForm((cur) => !cur);
  }

  function handleClickAddFriend() {
    setShowAddForm((cur) => !cur);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddForm(false);
  }

  function handleUpdateBalance(balanceToAdd) {
    setFriends((curFriends) =>
      curFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + balanceToAdd }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <Sidebar
        friends={friends}
        onAddFriend={handleAddFriend}
        showAddForm={showAddForm}
        onClickAddFriend={handleClickAddFriend}
        onSetFriends={setFriends}
        selectedFriend={selectedFriend}
        onSelectFriend={handleSelectFriend}
      />
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onUpdateBalance={handleUpdateBalance}
        />
      )}
    </div>
  );
}

function Sidebar({
  friends,
  onAddFriend,
  showAddForm,
  onClickAddFriend,
  onSetFriends,
  selectedFriend,
  onSelectFriend,
}) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            selected={selectedFriend}
            onSelectFriend={onSelectFriend}
            key={friend.id}
          />
        ))}
      </ul>
      {showAddForm && <FormAddFriend onAddFriend={onAddFriend} />}
      <Button onClick={onClickAddFriend}>
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

function Friend({ friend, selected, onSelectFriend }) {
  const isSelected = selected?.id === friend.id;

  return (
    <li className={isSelected && "selected"}>
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
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
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

function FormSplitBill({ selectedFriend, onUpdateBalance }) {
  const [bill, setBill] = useState("");
  const [paidByYou, setPaidByYou] = useState("");
  const [payer, setPayer] = useState("you");
  const paidByFriend = bill && paidByYou ? bill - paidByYou : "";
  const balanceToAdd = payer === "you" ? paidByFriend : -paidByYou;

  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        e.preventDefault();
        onUpdateBalance(balanceToAdd);
      }}
    >
      <h2>Split bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label>👦 Your expense</label>
      <input
        type="text"
        value={paidByYou}
        onChange={(e) =>
          +e.target.value > bill ? paidByYou : setPaidByYou(+e.target.value)
        }
      />
      <label>👩‍💼 {selectedFriend.name}'s expense</label>
      <input type="text" value={paidByFriend} disabled />
      <label>🤑 Who is paying?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
