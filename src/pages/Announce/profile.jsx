
function Profile({name, img}) {
    return (
            <div className="announceDetail_infos_right_profile">
                <p>{name}</p>
                <img src={img}/>
            </div>
    );
}

export default Profile
