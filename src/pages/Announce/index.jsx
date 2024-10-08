import { useParams, Navigate } from 'react-router-dom';
import Carousel from "./carousel.jsx";
import Infos from "./infos.jsx";
import { DataContext } from "../../utils/context";
import { useContext, useEffect, useState } from 'react';

function Announce() {
    const { data, isLoading, error } = useContext(DataContext);
    const { idLocation } = useParams();
    const [announces, setAnnounces] = useState([]);
    const [loadState, setLoadState] = useState(true);
    useEffect(() => {
        if (data) {
            setAnnounces(data);
            setLoadState(false);
        }else{
            setLoadState(true);
        }
    }, [data]);
    const announce = announces.find(announce => announce.id === idLocation);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Erreur: {error.message}</div>;
    }

    if (!announce && !loadState) {
        return <Navigate to="/erreur" replace={true}/>;
    }

    return (
        <>
            {announce ? (
                    <>
                        <Carousel announce={announce} />
                        <Infos announce={announce} />
                    </>
                ) : <div>Annonce non trouvée.</div>
            }
        </>
    );
}

export default Announce;
