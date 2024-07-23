import {useState} from 'react'
import Collapse from "../../components/collapse";
import Hero from "../../components/hero";
import hero from "../../assets/img/about.png";

function About() {
    const faq = [
        {
        "title": "Fiabilité",
        "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
    },
        {
            "title":"Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "title":"Service",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "title":"Sécurité",
            "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        },
    ]
    return (
        <section className="about section_py">
            <Hero img={hero} />
            <div className="about_wp">
                {faq.map((section,index)=> <Collapse key={section.title+index} title={section.title}>{section.content}</Collapse>)}
            </div>

        </section>
    )
}

export default About
