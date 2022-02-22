import './nav-bar.css';

function NavBar(prop) {
    
const navBarClass = "nav-bar" + (prop.isHeader ? "" : " nav-bar--in-footer");
const linkWrapperClass = "nav-bar__link-wrapper" + (prop.isHeader ? " nav-bar__link-wrapper--with-white-logo" : " nav-bar__link-wrapper--with-black-logo");

    return (
        <nav class={navBarClass}>
            <div class={linkWrapperClass}>
                <a class="nav-bar__link" href="/">Coffee house</a>
            </div>
            <div class="nav-bar__link-wrapper">
                <a class="nav-bar__link" href="/our-coffee">Our coffee</a>
            </div>
            <div class="nav-bar__link-wrapper">
                <a class="nav-bar__link" href="/for-your-pleasure">For your pleasure</a>
            </div>
        </nav>
    )
}

export default NavBar;