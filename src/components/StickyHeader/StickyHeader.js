import React from 'react';
import "./style.sass"

function StickyHeader() {
    return (
        <div className="stickyHead d-flex justify-content-center align-items-center">
            <p className="sticky-p">50% discount only valid for 00:15:49</p>
        </div>
    );
}

export default StickyHeader;