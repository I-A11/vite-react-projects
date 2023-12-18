import Card from "./Card";

const List = ({ books }) => {
  return (
    <div className="booksContainer">
      {books.map((book) => {
        return <Card key={book.id} {...book} />;
      })}
    </div>
  );
};
export default List;
