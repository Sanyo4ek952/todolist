import React from 'react';
import {isDisabled} from "@testing-library/user-event/dist/utils";

type ButtonPropsType = {
    title: string;
    onClickHandler?: () => void
    disabled?: boolean
}

export const Button = ({title, onClickHandler, disabled}: ButtonPropsType) => {
    return (
        <button disabled={disabled}
            onClick={onClickHandler}>{title}</button>
    );
};

