import {useLocation} from 'react-router-dom';
import Carousel from "./carousel.jsx";
import Infos from "./infos.jsx";
function Announce() {
    const announce = useLocation().state;
    return (
        <>
            <Carousel announce={announce} />
            <Infos announce={announce}/>
        </>
    )
}

export default Announce
