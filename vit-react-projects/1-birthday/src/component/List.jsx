import Card from "./Card";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        const { id } = person;
        return <Card key={id} {...person} />;
      })}
    </section>
  );
};
export default List;
