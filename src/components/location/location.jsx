import { Link } from 'react-router-dom';

function Location({location}) {
    const url = `/location/${location.id}`;

    return (
        <>
            <Link to={url} state={location} className='location' style={{backgroundImage:`url(${location.cover})`}}>
                <h2 className='location_title' style={{fontSize: "16px"}}>{location.title}</h2>
               {/* <img className='location_img' src={location.cover} />*/}
            </Link>
        </>
    )
}

export default Location
