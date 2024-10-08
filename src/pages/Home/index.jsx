import {useEffect, useState, useContext} from 'react';
import {useFetch} from '../../utils/hooks/index.jsx';
import Location from "../../components/location/location.jsx";
import Hero from "../../components/hero/index.jsx";
import heroImg from "../../assets/img/homepage.png"
import {DataContext} from "../../utils/context";

function Home() {
    const [locations, setLocations] = useState({});
    const { data, isLoading, error } = useContext(DataContext);
    //const {data, isLoading, error} = useFetch(`/api/logements.json`);
    const heroTitle = "Chez vous, partout et ailleurs"
    const isObjNotEmpty = (obj) => {
        return Object.keys(obj).length > 0;
    }
    useEffect(() => {
        data && setLocations(data);
    }, [data]);
    return (
        <section className="homepage section_py">
            <Hero title={heroTitle} img={heroImg}/>
            <div className="homepage_locationWp">
                {isObjNotEmpty(locations) && locations.map((location, index) => (
                    <Location key={`${location}-${index}`} location={location}/>
                ))}
            </div>
        </section>
    )
}

export default Home
