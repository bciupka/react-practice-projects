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
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
}

function Sidebar() {
  const friends = initialFriends;

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
      {/* <Button>Add friend</Button> */}
      <FormAddFriend />
    </div>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
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

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" />
      <label>🖼 Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}
