import './coffee-item-page.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import List from '../list/list';


const CoffeeItemPage = (props) => {
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
            <List data={props.data}/>
            <Footer/>
        </>
    )
}
export default CoffeeItemPage;