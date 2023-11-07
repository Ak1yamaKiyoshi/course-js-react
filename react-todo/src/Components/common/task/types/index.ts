import { ButtonTextColor } from "../../button/types";

export enum TaskColor {
    DARK = 'dark',
    LIGHT = 'light',
    WHITE = 'white',
}

export enum TaskSize {
    MEDIUM = 'medium',
    SMALL = 'small',
}

export enum ButtonState {
    DEFAULT = 'default',
    HOVER = 'hover',
    ACTIVE = 'active',
    FOCUSED = 'focused',
    DISABLED = 'disabled',
}

export interface TaskColorsStruct {
    backgroundColor: string;
    headingColor: string;
    descriptionColor: string;
    dashColor: string;
    buttonColor: ButtonTextColor;
}

export interface TaskColorsMap {
    [TaskColor.DARK]: TaskColorsStruct;
    [TaskColor.LIGHT]: TaskColorsStruct;
    [TaskColor.WHITE]: TaskColorsStruct;
}


