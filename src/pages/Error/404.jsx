import { useState } from 'react'

function Error404() {
    return (
        <>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <a href={"/"}>Retourner sur la page d'accueil</a>
        </>
    );
}

export default Error404
