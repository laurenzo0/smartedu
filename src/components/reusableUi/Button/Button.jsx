import "./Button.css";

function Button({ text, type, children }) {
  return (
    <button className={`btn ${type}`}>
      {children}
      {text}
    </button>
  );
}

export default Button;