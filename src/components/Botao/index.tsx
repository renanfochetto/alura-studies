import React from "react";
import styles from "./Botao.module.scss"

interface BotaoProps {
    children: React.ReactNode
}

class Botao extends React.Component<BotaoProps> {
    render() {
        return (
            <button className={styles.botao}>
                {this.props.children }
            </button>
        );
    }
}

export default Botao
