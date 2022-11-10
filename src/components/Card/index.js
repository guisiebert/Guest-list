import "./styles.css";

function Card({ name, timing }) {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{timing}</small>
    </div>
  );
}

export default Card;
