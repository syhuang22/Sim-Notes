const Item = ({ id, note, date, time, deleteData }) => {
  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <botton onClick={deleteItem} className="remove">
        Remove
      </botton>
    </div>
  );
};

export default Item;
