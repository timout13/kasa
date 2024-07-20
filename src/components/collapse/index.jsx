import {useEffect, useRef, useState} from "react";

function Collapse({title,children}) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const handleToggle = (e) => {
        e.preventDefault();
        setIsOpen((prevIsOpen) => !prevIsOpen);
        console.log(isOpen);
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
                <details className="collapse_details" open={isOpen == true ? true: null} onClick={(e)=>handleToggle(e)}>
                    <summary className="collapse_details_summary">
                        <span className="collapse_details_summary_title" role="term" aria-details="collapse_content">{title}</span>
                    </summary>
                </details>
                <div role="definition" id="collapse_content"  ref={contentRef}
                     className={`collapse_content  ${isOpen ? 'collapse_content--open' : 'collapse_content--closed'}`}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Collapse