
function Hero({img,title}) {
    return (
        <div className="hero" aria-hidden="true">
            {img && title ? (
                <img  src={img} alt="image du hero" />
            ) : img ? (
                <img src={img} alt="image du hero" />
            ) : null}
        </div>
    )
}

export default Hero
