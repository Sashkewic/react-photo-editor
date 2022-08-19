import React from 'react';
import styles from "./Slider.module.scss";

export const Slider = ({ min, max, value, handleChange }) => {
    return (
        <div className={styles.slider_container}>
            <input type="range" className={styles.slider}
                min={min}
                max={max}
                value={value}
                onChange={handleChange} />
        </div>
    )
}
