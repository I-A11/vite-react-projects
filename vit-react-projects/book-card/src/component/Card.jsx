const Card = ({ title, image, author }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{author}</p>
    </div>
  );
};
export default Card;
