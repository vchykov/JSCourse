import './coffee-page.css';
import Header from '../header/header';
import Footer from '../footer/footer';


function CoffeePage() {
    return (
        <>
            <Header page="coffee-page" namePage="Our Coffee"/>
            <article class="article">
                <div class="article__content-wrapper">
                    <img class="article__image" src="./img/images/girl-272x355.jpg" alt="Cup of coffee"/>
                </div>
                <div class="article__content-wrapper article__content-wrapper--with-description article__content-wrapper--centre">
                    <h2 class="h2">About our beans</h2>
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
            <div class="search-panel">
                <div class="search-panel__input-group">
                    <div class="search-panel__label" >Looking for</div>
                    <input type="text" class="search-panel__input" placeholder="start typing here..." />
                </div>
                <div class="search-panel__input-group">
                    <div class="search-panel__label" >Or filter</div>
                    <div class="search-panel__filters-group">
                        <button type="button" class="search-panel__filter-item" key="Brazil">Brazil</button>
                        <button type="button" class="search-panel__filter-item" key="Kenya">Kenya</button>
                        <button type="button" class="search-panel__filter-item" key="Columbia">Columbia</button>
                    </div>
                </div>
            </div>
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
export default CoffeePage;