
function Hero({img,title}) {
    return (
        <div className="hero" aria-hidden="true">
            {img && title ? (
                <>
                    <p className="hero_title">{title}</p>
                    <img className="hero_img" src={img} alt="image du hero" />
                </>
            ) : img ? (
                <img className="hero_img" src={img} alt="image du hero" />
            ) : null}
        </div>
    )
}

export default Hero
