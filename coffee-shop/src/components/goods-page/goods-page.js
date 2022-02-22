import './goods-page.css';
import Header from '../header/header';
import Footer from '../footer/footer';


function GoodsPage() {
    return (
        <>
            <Header page="coffee-page" namePage="Our Coffee"/>
            <main>
                <article class="article">
                    <div class="article__content-wrapper">
                        <img class="article__image" src="./img/images/aromistico-392x355.jpg" alt="Aromistico"/>
                    </div>
                    <div class="article__content-wrapper article__content-wrapper--with-description">
                        <h2 class="h2">About It</h2>
                        <div class="separator separator--black"></div>
                        <p><b>Country: </b>Brasil</p>
                        <br/>
                        <p><b>Description: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                             minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                             commodo consequat.
                        </p>
                        <br/>
                        <p><b>Price: </b><span class="article__price">16.99$</span></p>
                    </div>                
                </article>
            </main>
            <Footer/>
        </>
    )
}
export default GoodsPage;