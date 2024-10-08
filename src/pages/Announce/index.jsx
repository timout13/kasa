import { useParams } from 'react-router-dom';
import Carousel from "./carousel.jsx";
import Infos from "./infos.jsx";
import { DataContext } from "../../utils/context";
import { useContext, useEffect, useState } from 'react';

function Announce() {
    const { data, isLoading, error } = useContext(DataContext);
    const { idLocation } = useParams();
    const [announces, setAnnounces] = useState([]);

    useEffect(() => {
        if (data) {
            setAnnounces(data);
        }
    }, [data]);

    const announce = announces.find(announce => announce.id === idLocation);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Erreur: {error.message}</div>;
    }

    if (!announce) {
        return <div>Annonce non trouvée</div>;
    }

    return (
        <>
            <Carousel announce={announce} />
            <Infos announce={announce} />
        </>
    );
}

export default Announce;
