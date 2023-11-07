export enum ButtonColor {
    DARK = 'dark',
    LIGHT = 'light',
    WHITE = 'white',
}

export enum ButtonTextColor {
    LIGHT = 'light',
    DARK = 'dark',
    BEIGHE = 'beighe',
}

export enum ButtonSize {
    MEDIUM = 'medium',
    SMALL = 'small',
}

export enum ButtonVariant {
    FILLED = 'filled',
    OUTLINED = 'outlined',
}

export enum ButtonState {
    DEFAULT = 'default',
    HOVER = 'hover',
    ACTIVE = 'active',
    FOCUSED = 'focused',
    DISABLED = 'disabled',
}

export interface ButtonColorsStruct {
    backgroundColor: string[];
    textColor: string[];
    borderColor: string[];
}

interface ButtonStyle {
    backgroundColor: string;
    [ButtonTextColor.DARK]: { textColor: string; borderColor: string };
    [ButtonTextColor.LIGHT]: { textColor: string; borderColor: string };
    [ButtonTextColor.BEIGHE]: { textColor: string; borderColor: string };
}

interface ButtonVariantMap {
    [ButtonColor.DARK]: ButtonStyle;
    [ButtonColor.LIGHT]: ButtonStyle;
    [ButtonColor.WHITE]: ButtonStyle;
}

export type ButtonColorsMap = {
    [ButtonVariant.FILLED]: ButtonVariantMap;
    [ButtonVariant.OUTLINED]: ButtonVariantMap;
}
