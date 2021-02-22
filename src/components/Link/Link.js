import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import './Link.scss';

const Link = ({children, className, to}) => {
    return (
        <div>
            <RouterLink to={to} className={`app-link ${className}`}>
                {children}
            </RouterLink>
        </div>
    )
}

export default Link
