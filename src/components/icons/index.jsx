import React from 'react';
import '../../assets/img/icons/icons.svg';

const Icon = ({ id, width = 24, height = 24 }) => (
    <svg width={width} height={height}>
        <use xlinkHref={`/icons.svg#${id}`} />
    </svg>
);
export default Icon
