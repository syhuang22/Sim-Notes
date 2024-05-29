const Edit = ( { add } ) => {

    function addItem() {
        add([1,2,3])
    }


    return <div>
        <h1>Notes</h1>
        <p>Event</p>
        <input type = "text"/>
        <p>Date</p>
        <input type = "date"/>
        <p>Time</p>
        <input type = "time"/>
        <button onClick={addItem} className = "add">Add</button>
    </div>
}

export default Edit