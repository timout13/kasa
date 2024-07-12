import logo from "../../assets/img/logo.svg";
function Header() {
    return (
        <>
            <header className="header">
                <img src={logo} />
                <ul className="header_linkswp">
                    <li className="header_linkswp_item"><a className="header_linkswp_item_link" href="/">Accueil</a></li>
                    <li className="header_linkswp_item"><a className="header_linkswp_item_link" href="/a-propos">À propos</a></li>
                </ul>
            </header>
        </>
    );
}

export default Header
