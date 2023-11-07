import { ButtonTextColor } from "../../button/types";
import { TaskColor, TaskColorsMap } from "../types";




const taskColorMap: TaskColorsMap = {
  [TaskColor.DARK]: {
    backgroundColor: 'accent.primary',
    headingColor: 'backgroundLight.primary',
    descriptionColor: 'secondary.main',
    dashColor: 'secondary.main',
    buttonColor:  ButtonTextColor.LIGHT,
  },
  [TaskColor.LIGHT]: {
    backgroundColor: 'primary.main',
    headingColor: 'textDark.primary',
    descriptionColor: 'textDark.primary',
    dashColor: 'secondary.main',
    buttonColor: ButtonTextColor.DARK,
  },
  [TaskColor.WHITE]: {
    backgroundColor: 'backgroundLight.primary',
    headingColor: 'textDark.primary',
    descriptionColor: 'textDark.primary',
    dashColor: 'secondary.main',
    buttonColor: ButtonTextColor.DARK,
  },
};

export const getColors = (
  color: TaskColor,
) => {
  return {
    backgroundColor: taskColorMap[color].backgroundColor,
    headingColor: taskColorMap[color].headingColor,
    descriptionColor: taskColorMap[color].descriptionColor,
    dashColor: taskColorMap[color].dashColor,
    buttonColor: taskColorMap[color].buttonColor,
  };
};

