import {
  ButtonColor,
  ButtonColorsMap,
  ButtonVariant,
  ButtonTextColor,
} from '../types';


const buttonColorsMap: ButtonColorsMap = {
  [ButtonVariant.FILLED]: {
    [ButtonColor.DARK]: {
      backgroundColor: 'accent.primary',
      [ButtonTextColor.DARK]: {borderColor: 'transparent', textColor: 'textDark.primary' },
      [ButtonTextColor.LIGHT]: {borderColor: 'transparent', textColor: 'textLight.primary' },
      [ButtonTextColor.BEIGHE]: {borderColor: 'transparent', textColor: 'secondary.main' },
    },
    [ButtonColor.LIGHT]: {
      backgroundColor: 'primary.main',
      [ButtonTextColor.DARK]: {borderColor: 'transparent', textColor: 'textDark.primary' },
      [ButtonTextColor.LIGHT]: {borderColor: 'transparent', textColor: 'textLight.primary' },
      [ButtonTextColor.BEIGHE]: {borderColor: 'transparent', textColor: 'secondary.main' },
    },
    [ButtonColor.WHITE]: {
      backgroundColor: 'backgroundLight.main',
      [ButtonTextColor.DARK]: {borderColor: 'transparent', textColor: 'textDark.primary' },
      [ButtonTextColor.LIGHT]: {borderColor: 'transparent', textColor: 'textLight.primary' },
      [ButtonTextColor.BEIGHE]: {borderColor: 'transparent', textColor: 'secondary.main' },
      
    },
  },
  [ButtonVariant.OUTLINED]: {
    [ButtonColor.DARK]: {
      backgroundColor: 'accent.primary',
      [ButtonTextColor.DARK]: {
        borderColor: 'textDark.primary',
        textColor: 'textDark.primary'
      },
      [ButtonTextColor.LIGHT]: {
        borderColor: 'textLight.primary',
        textColor: 'textLight.primary'
      },
      [ButtonTextColor.BEIGHE]: {
        borderColor: 'secondary.main',
        textColor: 'secondary.main'
      },
    },
    [ButtonColor.LIGHT]: {
      backgroundColor: 'primary.main',
      [ButtonTextColor.DARK]: {
        borderColor: 'textDark.primary',
        textColor: 'textDark.primary'
      },
      [ButtonTextColor.LIGHT]: {
        borderColor: 'textLight.primary',
        textColor: 'textLight.primary'
      },
      [ButtonTextColor.BEIGHE]: {
        borderColor: 'textLight.primary',
        textColor: 'secondary.main'
      },
    },
    [ButtonColor.WHITE]: {
      backgroundColor: 'backgroundLight.primary',
      [ButtonTextColor.DARK]: {
        borderColor: 'textDark.primary',
        textColor: 'textDark.primary'
      },
      [ButtonTextColor.LIGHT]: {
        borderColor: 'textLight.primary',
        textColor: 'textLight.primary'
      },
      [ButtonTextColor.BEIGHE]: {
        borderColor: 'secondary.main',
        textColor: 'secondary.main'
      },
    },
  }
};


export const getColors = (
  buttonColor: ButtonColor,
  variant: ButtonVariant,
  textcolor: ButtonTextColor,
) => {
  return {
    backgroundColor: buttonColorsMap[variant][buttonColor].backgroundColor,
    borderColor: buttonColorsMap[variant][buttonColor][textcolor]?.borderColor,
    textColor: buttonColorsMap[variant][buttonColor][textcolor]?.textColor,
  };
};