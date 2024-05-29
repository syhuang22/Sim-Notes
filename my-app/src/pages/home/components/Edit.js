import { useState } from "react";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");

  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");

  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");

  function timeChange(e) {
    setTime(e.target.value);
  }
  function addItem() {
    add(function (prevData) {
      return [
        ...prevData,
        {
          note,
          date,
          time,
        },
      ];
    });
  }

  return (
    <div>
      <h1>Notes</h1>
      <p>Event</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>Date</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        Add
      </button>
    </div>
  );
};

export default Edit;
