function Collapse({title,children}) {
    return (
        <>
            <div className="collapse">
                <details className="collapse-details">
                    <summary className="collapse-details-summary">
                        <span className="collapse-details-summary-title" role="term" aria-details="collapse-content">{title}</span>
                    </summary>
                </details>
                <div role="definition" id="collapse-content" className="collapse-content">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Collapse
