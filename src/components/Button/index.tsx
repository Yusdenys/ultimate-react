import { ReactNode } from "react";
import { IoIosSend } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import styles from "./Button.module.css"

type Props = {
    children: ReactNode;
    sent:  boolean;
    onClick: () => void;
};

function Button({ children, sent, onClick }: Props) {
    return (
        <button
            disabled={sent}
            onClick={onClick} className={[styles.btn, styles.btnPrimary].join(" ")}>
            {sent ? "Enviado" : children} {" "}
            <span style={{position: 'relative', top: 2 }}>
                {sent ? <FaCheck color="white"/> : <IoIosSend color="white"/>}
            </span>
        </button>
    );
}

export default Button;
