import Edit from './components/Edit';
import Item from './components/item';
import List from './components/list';
import './index.css'

const Home = () => {
    return <div className = "app">
        <Edit />
        <List />
    </div>
}

export default Home