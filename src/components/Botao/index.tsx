import React from "react";
import styles from "./Botao.module.scss"

interface Props {
    onClick: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode
}

function Botao( { onClick, type, children }: Props) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={styles.botao}
        >
            {children}
        </button>
    );
}

export default Botao
