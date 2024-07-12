import logo from "../../assets/img/logo_white.svg";
function Footer() {
    function getDate(){
        return new Date().getFullYear();
    }
    return (
        <>
            <footer className="footer">
                <img src={logo} />
                <p>@ {getDate()} Kasa. Tous droits réservés.</p>
            </footer>
        </>
    );
}

export default Footer
