import './main-page.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import List from '../list/list';


const MainPage = (props) => {
    return (
        <>
            <Header page="main-page" namePage="Everything You Love About Coffee"/>
                <main>
                    <section class="main__section-about-us">

                        <h2 class="h2">About Us</h2>
                        <div class="separator separator--black"></div>
                        <div class="main__text-wrapper">
                            <div class="main__text">
                                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.</p>
                                <br/>
                                <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.</p>
                            </div>
                        </div>
                    </section>
                    <section class="main__section-our-best">

                        <h2 class="h2">Our best</h2>
                        <List data={props.data} isBest={true}/>

                    </section>
                </main>
            <Footer/>
        </>
    )
}
export default MainPage;