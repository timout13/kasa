import {useEffect, useRef, useState} from "react";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";

function Carousel({announce}) {
    const [currentId, setCurrentId] = useState(0);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const totalImgs = announce.pictures.length;
    const sliderTranslateX = 100 / totalImgs;
    const carouselEl = useRef(null);

    useEffect(() => {
        const handleResize = (entries) => {
            for (let entry of entries) {
                setCarouselWidth(entry.contentRect.width);
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);

        if (carouselEl.current) {
            resizeObserver.observe(carouselEl.current);
        }

        return () => {
            if (carouselEl.current) {
                resizeObserver.unobserve(carouselEl.current);
            }
        };
    }, []);
    const updateSliderPosition = (id) => {
        const slider = document.getElementById("announceDetail_carousel_imgWp_slider");
        const sliderPositionX = sliderTranslateX * id;
        slider.style.transform = `translateX(-${sliderPositionX}%)`;
    };
    const handlePrev = (id) => {
        if (id < 0) {
            id = totalImgs - 1;
        }
        updateSliderPosition(id);
        setCurrentId(id);
    };
    const handleNext = (id) => {
        if (id >= totalImgs) {
            id = 0;
        }
        updateSliderPosition(id);
        setCurrentId(id);
    };
    const test = (direction) => {
        if (direction === 'next') {
            handleNext(currentId + 1);
        } else if (direction === 'prev') {
            handlePrev(currentId - 1);
        }
    };

    return (

            <section className="announceDetail_carousel section_py">
                {totalImgs > 1 &&
                    <>
                        <div className="announceDetail_carousel_btnWp">
                            <button className="btn btn_arrow btn_arrow--prev" onClick={() => test('prev')}>
                                <img src={arrowLeft}/>
                            </button>
                            <button className="btn btn_arrow btn_arrow--next" onClick={() => test('next')}>
                                <img src={arrowRight}/>
                            </button>
                        </div>
                        <p className="announceDetail_carousel_currentImg">{currentId + 1}/{totalImgs}</p>
                    </>
                }
                <div ref={carouselEl} className="announceDetail_carousel_imgWp" id="announceDetail_carousel_imgWp">
                    <div className="announceDetail_carousel_imgWp_slider" id="announceDetail_carousel_imgWp_slider">
                        {announce.pictures.map((pic, index) => (
                            <img className="announceDetail_carousel_imgWp_slider_img"
                                 id={`announceDetail_carousel_imgWp_slider_img_${index}`}
                                 key={`announceDetail_carousel_imgWp_slider_img_${index}`} src={pic}
                                 style={{minWidth: carouselWidth}}/>
                        ))}
                    </div>
                </div>
            </section>
    )
}

export default Carousel
