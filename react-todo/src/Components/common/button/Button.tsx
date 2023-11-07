import React, { FC, MouseEventHandler, ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import * as styles from './Button.styles';
import { ButtonColor, ButtonSize, ButtonTextColor, ButtonVariant } from './types';
import mergeSx from 'merge-sx';
import Typography from '@mui/material/Typography'


interface ButtonProps {
    children?: ReactNode;
    text?: string;
    color?: ButtonColor;
    variant?: ButtonVariant;
    textColor?: ButtonTextColor;
    textColorManual?: string;
    size?: ButtonSize;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    sx?: SxProps<Theme>;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href?: string;
    type?: 'button' | 'reset' | 'submit';
}

const Button: FC<ButtonProps> =({
    children = <></>,
    text = " text ",
    textColor = ButtonTextColor.DARK,
    color = ButtonColor.DARK,
    variant = ButtonVariant.FILLED,
    size = ButtonSize.SMALL,
    sx = {},
    ...rest
  }) => {
    return (
        <>
            <MuiButton
            sx={mergeSx(styles.button(color, variant, textColor, size), sx)}
                onClick = {() => console.log(styles.button(color, variant, textColor, size))}
                {...rest}
            > 
            <Typography variant='h5Medium'sx={styles.text(color, variant, textColor)}> {text} </Typography>
            {children}
            </MuiButton>

        </>
    );
};

export default Button;