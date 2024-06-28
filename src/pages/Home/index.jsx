import {useEffect, useState} from 'react';
import '../../App.css'
import {useFetch} from '../../utils/hooks/index.jsx';
import Location from "../../components/location/location.jsx";

function Home() {
    const [locations, setLocations] = useState({});
    const {data, isLoading, error} = useFetch(`/api/logements.json`);
    const isObjNotEmpty = (obj) => {
        return Object.keys(obj).length > 0;
    }
    useEffect(() => {
        data && setLocations(data);
    }, [data]);
    console.log(locations)
    return (
        <>
            <div className="location_wrapper"
                 style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px"}}>
                {isObjNotEmpty(locations) && locations.map((location, index) => (
                    <Location key={`${location}-${index}`} location={location}/>
                ))}
            </div>
        </>
    )
}

export default Home
