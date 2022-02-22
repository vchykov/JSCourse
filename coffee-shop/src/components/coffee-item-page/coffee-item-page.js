import './coffee-item-page.css';
import Header from '../header/header';
import Footer from '../footer/footer';


function CoffeeItemPage() {
    return (
        <>
            <Header page="item-page" namePage="For your pleasure"/>
            <main>
                <article class="article">
                    <div class="article__content-wrapper">
                        <img class="article__image" src="./img/images/coffee-272x355.jpg" alt="Cup of coffee"/>
                    </div>
                    <div class="article__content-wrapper article__content-wrapper--with-description article__content-wrapper--centre">
                        <h2 class="h2">About our goods</h2>
                        <div class="separator separator--black"></div>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <br/>
                        <p>Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.</p>
                        <p>As greatly removed calling pleased improve an. Last ask him cold feel</p>
                        <p>met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                    </div>                
                </article>
                <div class="separator separator--line "></div>
            </main>
            <section class="list">
                <div class="list__row">
                    <a href="/item" class="item">
                        <div class="item__image-wrapper">
                            <img class="item__image" 
                                src="./img/images/item-167x115.jpg" 
                                alt="AROMISTICO Coffee 1 kg"
                            />
                        </div>
                        <div class="item__name">AROMISTICO Coffee 1 kg</div>
                        <div class="item__country">Brasil</div>
                        <div class="item__price">6.99$</div>
                    </a>
                    <a href="/item" class="item">
                        <div class="item__image-wrapper">
                            <img class="item__image" 
                                src="./img/images/item-167x115.jpg" 
                                alt="AROMISTICO Coffee 1 kg"
                            />
                        </div>
                        <div class="item__name">AROMISTICO Coffee 1 kg</div>
                        <div class="item__country">Kenya</div>
                        <div class="item__price">6.99$</div>
                    </a>
                    <a href="/item" class="item">
                        <div class="item__image-wrapper">
                            <img class="item__image" 
                                src="./img/images/item-167x115.jpg" 
                                alt="AROMISTICO Coffee 1 kg"
                            />
                        </div>
                        <div class="item__name">AROMISTICO Coffee 1 kg</div>
                        <div class="item__country">Columbia</div>
                        <div class="item__price">6.99$</div>
                    </a>
                </div>
                <div class="list__row">
                    <a href="/item" class="item">
                        <div class="item__image-wrapper">
                            <img class="item__image" 
                                src="./img/images/item-167x115.jpg" 
                                alt="AROMISTICO Coffee 1 kg"
                            />
                        </div>
                        <div class="item__name">AROMISTICO Coffee 1 kg</div>
                        <div class="item__country">Brasil</div>
                        <div class="item__price">6.99$</div>
                    </a>
                    <a href="/item" class="item">
                        <div class="item__image-wrapper">
                            <img class="item__image" 
                                src="./img/images/item-167x115.jpg" 
                                alt="AROMISTICO Coffee 1 kg"
                            />
                        </div>
                        <div class="item__name">AROMISTICO Coffee 1 kg</div>
                        <div class="item__country">Brasil</div>
                        <div class="item__price">6.99$</div>
                    </a>
                    <a href="/item" class="item">
                        <div class="item__image-wrapper">
                            <img class="item__image" 
                                src="./img/images/item-167x115.jpg" 
                                alt="AROMISTICO Coffee 1 kg"
                            />
                        </div>
                        <div class="item__name">AROMISTICO Coffee 1 kg</div>
                        <div class="item__country">Brasil</div>
                        <div class="item__price">6.99$</div>
                    </a>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default CoffeeItemPage;