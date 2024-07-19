import {useRef, useState, useEffect} from "react";

function Collapse({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const handleToggle = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        } else {
            contentRef.current.style.height = '0px';
        }
    }, [isOpen]);
    return (
        <>
            <details open={isOpen} onClick={handleToggle}>
                <summary>Click to expand</summary>
            </details>
            <div
                ref={contentRef}
                className={`content ${isOpen ? 'open' : 'closed'}`}
            >
                <p>
                    Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes àl station de la gare de l'est (7 minutes à pied).
                </p>
            </div>
        </>
);
}

export default Collapse
