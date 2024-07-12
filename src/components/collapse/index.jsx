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
