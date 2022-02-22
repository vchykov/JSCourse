import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';
import MainPage from '../main-page/main-page';
import CoffeePage from '../coffee-page/coffee-page';
import GoodsPage from '../goods-page/goods-page';
import CoffeeItemPage from '../coffee-item-page/coffee-item-page';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="our-coffee" element={<CoffeePage/>} />
                    <Route path="for-your-pleasure" element={<CoffeeItemPage/>} />
                    <Route path="item" element={<GoodsPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
