// Thanks to Tom is Loading https://www.youtube.com/watch?v=hjbxaYTMhy0
import React, {useRef} from "react"
import { useInView, } from 'framer-motion';

const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <div ref={ref} className={`reveal ${isInView ? 'in-view' : ''}`} style={{position: 'relative', width}}>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Reveal;