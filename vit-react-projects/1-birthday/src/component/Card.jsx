const Card = ({ name, age, image }) => {
  return (
    <article className="person">
      <img className="img" src={image} alt={name} />
      <div>
        <p>{name}</p>
        <p>{age} year</p>
      </div>
    </article>
  );
};
export default Card;
