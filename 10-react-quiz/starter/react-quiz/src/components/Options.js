function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button className="btn btn-option" id={option}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
