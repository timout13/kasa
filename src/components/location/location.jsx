import { Link } from 'react-router-dom';

function Location({location}) {
    //console.log(location);
    const url = `/location/${location.id}`;

    return (
        <>
            <Link to={url} state={location} className='location'
                  style={{backgroundColor: '#FD6160', display: 'block', width: '150px', cursor: "pointer"}}>
                <h2 style={{fontSize: "16px"}}>{location.title}</h2>
            </Link>
        </>
    )
}

export default Location
