import profile from "./profile.jsx";
import titles from "./titles.jsx";
import tag from "./tag.jsx";
import star from "./star.jsx";
import collapse from "../../components/collapse/index.jsx";
import Titles from "./titles.jsx";
import Profile from "./profile.jsx";
import Tag from "./tag.jsx";
import Star from "./star.jsx";
import Collapse from "../../components/collapse/index.jsx";
function Infos({announce}) {
    console.log(announce.equipements)

    const stars = [];
    const redStarNb = parseInt(announce.rating);
    for (let i = 1; i <= 5; i++) {
        if (i <= redStarNb) {
            stars.push(<Star key={`star-${i}`} color="#FF6060"/>);
        } else {
            stars.push(<Star key={`star-${i}`} color="#E3E3E3"/>);
        }
    }
    function getEquipments(announce){
       return  announce.equipments.map((item,index)=><li key={index}>{item}</li>)
    }
    return (
        <>
            <Titles title={announce.title} subtitle={announce.location} />
            <Profile name={announce.host.name} img={announce.host.picture}/>
            {announce.tags.map((tag,index)=> <Tag key={tag+index} label={tag} />)}
            {stars}
            <Collapse title="Description"  >{announce.description}</Collapse>
            <Collapse title="Équipements">
                <ul>
                    {getEquipments(announce)}
                </ul>
            </Collapse>
        </>
    )
}

export default Infos
