import { SxProps, Theme } from '@mui/material/styles'
import { ButtonColor, ButtonSize, ButtonTextColor, ButtonVariant } from './types';
import { getColors } from './utils';


export const button = (
    color: ButtonColor,
    variant: ButtonVariant,
    textColor: ButtonTextColor,
    size: ButtonSize,
): SxProps<Theme> => ({
    height: '51px',
    borderRadius: '10px',
    flexShrink: '0',
    border: '5px solid transparent',
    
    ...(size === ButtonSize.SMALL && {
        width: '120px',
    }),
    ...(size === ButtonSize.MEDIUM && {
        width: '230px',
    }),
    ...(variant === ButtonVariant.OUTLINED && {
        borderColor: getColors(color, variant, textColor).borderColor,
    }),
    backgroundColor: getColors(color, variant, textColor)
        .backgroundColor,
});

export const text = (
    color: ButtonColor,
    variant: ButtonVariant,
    textColor: ButtonTextColor,
): SxProps<Theme> => ({
    color: getColors(color, variant, textColor)
    .textColor,

});



