import Item from './item';

const List = ( {listData} ) => {

    return <div className='list'>
        {
            listData.map(item => {
                const {note, date, time} = item
                return <Item note={note} date={date} time={time}/>
            })
            
        }
        
    </div>

    
}

export default List