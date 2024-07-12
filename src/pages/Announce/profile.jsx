
function Profile({name, img}) {
    return (
        <>
            <div>
                <p>{name}</p>
                <img src={img}/>
            </div>
        </>
    );
}

export default Profile
