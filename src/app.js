import Nav from './component/nav';
import Search from './component/serach';
import Products from './component/product';
import About from './component/about';
import Foot from './component/foot';


function App() {
    return (
        <div>
            <Nav></Nav>
            <Search></Search>
            <Products></Products>
            <About></About>
            <Foot></Foot>
        </div>
    )
}

export default App