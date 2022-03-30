import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';
import MainPage from '../main-page/main-page';
import CoffeePage from '../coffee-page/coffee-page';
import GoodsPage from '../goods-page/goods-page';
import CoffeeItemPage from '../coffee-item-page/coffee-item-page';


const App = (prop) => {
    const data = {
 
        items: [
            {
                href: "/item",
                img: "./img/images/item-167x115.jpg",
                imgLarge: "./img/images/aromistico-392x355.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                altImg: "AROMISTICO Coffee 1 kg",
                title: "AROMISTICO Coffee 1 kg",
                origin: "Brasil",
                isBest: false,
                price: 6.99
            },

            {
                href: "/item",
                img: "./img/images/item-167x115.jpg",
                imgLarge: "./img/images/aromistico-392x355.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                altImg: "AROMISTICO Coffee 1 kg",
                title: "AROMISTICO Coffee 1 kg",
                origin: "Kenya",
                isBest: false,
                price: 6.99
            },

            {
                href: "/item",
                img: "./img/images/item-167x115.jpg",
                imgLarge: "./img/images/aromistico-392x355.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                altImg: "AROMISTICO Coffee 1 kg",
                title: "AROMISTICO Coffee 1 kg",
                origin: "Brasil",
                isBest: false,
                price: 6.99
            },

            {
                href: "/item",
                img: "./img/images/item-167x115.jpg",
                imgLarge: "./img/images/aromistico-392x355.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                altImg: "AROMISTICO Coffee 1 kg",
                title: "AROMISTICO Coffee 1 kg",
                origin: "Columbia",
                isBest: false,
                price: 6.99
            },

            {
                href: "/item",
                img: "./img/images/item-167x115.jpg",
                imgLarge: "./img/images/aromistico-392x355.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                altImg: "AROMISTICO Coffee 1 kg",
                title: "AROMISTICO Coffee 1 kg",
                origin: "Brasil",
                isBest: false,
                price: 6.99
            },

            {
                href: "/item",
                img: "./img/images/item-167x115.jpg",
                imgLarge: "./img/images/aromistico-392x355.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                altImg: "AROMISTICO Coffee 1 kg",
                title: "AROMISTICO Coffee 1 kg",
                origin: "Brasil",
                isBest: false,
                price: 6.99
            },

            {
                href: "/item",
                img: "./img/best_items/Solimo Coffee Beans 2 kg.png",
                imgLarge: "./img/images/aromistico-392x355.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                altImg: "Solimo Coffee Beans 2 kg",
                title: "Solimo Coffee Beans 2 kg",
                origin: "Brasil",
                isBest: true,
                price: 10.73
            },
            
            {
                href: "/item",
                img: "./img/best_items/Presto Coffee Beans 1 kg.png",
                imgLarge: "./img/images/aromistico-392x355.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                altImg: "Presto Coffee Beans 1 kg",
                title: "Presto Coffee Beans 1 kg",
                origin: "Brasil",
                isBest: true,
                price: 15.99
            },

            {
                href: "/item",
                img: "./img/best_items/AROMISTICO Coffee 1 kg.png",
                imgLarge: "./img/images/aromistico-392x355.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                altImg: "AROMISTICO Coffee 1 kg",
                title: "AROMISTICO Coffee 1 kg",
                origin: "Brasil",
                isBest: true,
                price: 6.99
            },
        ]
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage data={data}/>} />
                    <Route path="our-coffee" element={<CoffeePage data={data}/>} />
                    <Route path="for-your-pleasure" element={<CoffeeItemPage data={data}/>} />
                    <Route path="item" element={<GoodsPage data={data}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
