import React from 'react'
import styles from "./Sidebar.module.scss";

export const SidebarItem = ({ name, active, handleClick }) => {
    return (
        <button onClick={handleClick} className={`${styles.sidebar_item} ${active ? styles.sidebar_item_active : ''}`}>{name}</button>
    )
}
