
function Hero({img,title}) {
    return (
        <>
            {img && title ? (
                <img src={img} alt={title} />
            ) : img ? (
                <img src={img} alt="Default description" />
            ) : null}
        </>
    )
}

export default Hero
