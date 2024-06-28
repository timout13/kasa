import {useLocation} from 'react-router-dom';
import {useState} from 'react';

function Announce() {
    const [currentId, setCurrentId] = useState(0);
    const announce = useLocation().state;
    const totalImgs = announce.pictures.length-1;
    console.log(totalImgs);
    console.log(announce)
    const test = (direction) => {
        const handleDirection = (elValue,setValue)=>{
            const el = document.getElementById(`announceDetail_carousel_imgWp_img_${elValue}`);
            setCurrentId(setValue);
            el.scrollIntoView();
        }
        if (currentId === totalImgs && direction === 'next'){
            const el = document.getElementById(`announceDetail_carousel_imgWp_img_0`);
            setCurrentId(0);
            el.scrollIntoView();
        }else if(currentId==0){
            handleDirection(totalImgs, totalImgs);
        }
        else {
        const nextId = currentId + 1;
        const el = document.getElementById(`announceDetail_carousel_imgWp_img_${nextId}`);
        setCurrentId(nextId);
        el.scrollIntoView();
        console.log(el);
        }
    }
    return (
        <>
            <h1 className="announceDetail_title">{announce.title}</h1>
            <div className="announceDetail_carousel">
                <div className="announceDetail_carousel_btnWp">
                    <button>prev</button>
                    <button className="btn" onClick={()=>test('next')}>next</button>
                </div>
                <div className="announceDetail_carousel_imgWp" id="announceDetail_carousel_imgWp">
                    {announce.pictures.map((pic, index) => (
                        <img className="announceDetail_carousel_imgWp_img" id={`announceDetail_carousel_imgWp_img_${index}`}
                             key={`announceDetail_carousel_imgWp_img_${index}`} src={pic}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Announce
