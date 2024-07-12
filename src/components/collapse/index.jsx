import {useRef, useState, useEffect} from "react";

function Collapse({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const detailRef = useRef(null);

    const handleToggle = () => {
        const isOpen = detailRef.current.open;
        console.log(isOpen)
        if (isOpen) {
            contentRef.current.style.height = '0px';
        } else {
            contentRef.current.style.height = `1000px`;
        }
    };

    return (
        <>
            <details ref={detailRef} onClick={handleToggle}>
                <summary>Click to expand</summary>
            </details>
            <div
                ref={contentRef}
                className={`content ${isOpen ? 'open' : 'closed'}`}
            >
                <p>
                    This content is revealed with an animation when the element is clicked.
                </p>
                <img src="https://placebear.com/400/200" alt="Example" />
                <p>
                    Additional content here. Facilis ducimus iure officia quos possimus quaerat iusto.
                </p>
            </div>
        </>
);
}

export default Collapse
