import React, { ButtonHTMLAttributes } from "react";
import { Conteiner } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
    <Conteiner type="button" {...rest}>
        {loading? 'Carregando...': children}

    </Conteiner>
);

export default Button;
