import './header.css';
import NavBar from '../nav-bar/nav-bar';


function Header(prop) {
    switch (prop.page) {
        case "main-page":
            return (
                <header class="header">
                    <NavBar isHeader="true"/>
                    <h1 class="h1 h1--main-page">{prop.namePage}</h1>
                    <div class="separator"></div>
                    <div class="header__point">
                        We makes every day full of energy and taste
                    </div>
                    <div class="header__point">
                        Want to try our beans?
                    </div>
                    <div class="header__more-wrapper">
                        <a class="header__more-btn " href="/for-your-pleasure">More</a>
                    </div>
                </header>
            )
        case "coffee-page":
            return (
                <header class="header header--coffee-page">
                    <NavBar isHeader="true"/>
                    <h1 class="h1 h1--coffee-page">{prop.namePage}</h1>
                </header>
            )
        default : 
            return (
                <header class="header header--coffee-page">
                    <NavBar isHeader="true"/>
                    <h1 class="h1">{prop.namePage}</h1>
                </header>
            )
    }
   


}

export default Header;