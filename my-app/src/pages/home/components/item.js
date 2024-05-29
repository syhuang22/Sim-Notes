
const Item = ({note, date, time}) => {
    return <div className = 'item'>
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <botton className = 'remove'>Remove</botton>
    </div>
}

export default Item