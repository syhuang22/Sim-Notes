import Item from "./item";

const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time } = item;
        return (
          <Item note={note} date={date} time={time} deleteData={deleteData} />
        );
      })}
    </div>
  );
};

export default List;
