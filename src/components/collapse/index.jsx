import {useEffect, useRef, useState} from "react";

function Collapse({title,children}) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const handleToggle = (e) => {
        e.preventDefault();
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
            <div className="collapse">
                <details className="collapse-details" open={isOpen == true ? true: null} onClick={(e)=>handleToggle(e)}>
                    <summary className="collapse-details-summary">
                        <span className="collapse-details-summary-title" role="term" aria-details="collapse-content">{title}</span>
                    </summary>
                </details>
                <div role="definition" id="collapse-content"  ref={contentRef}
                     className={`collapse-content  ${isOpen ? 'collapse_content--open' : 'collapse_content--closed'}`}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Collapse