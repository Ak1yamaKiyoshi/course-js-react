
import { Box, Typography } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

import * as styles from './Task.styles';
import mergeSx from 'merge-sx';
import { TaskColor, TaskSize } from './types';
import Button from '../button';
import { ButtonColor, ButtonVariant } from '../button/types';
import { getColors } from './utils';

interface TaskProps {
    taskColor: TaskColor;
    header?: string;
    description?: string;
    done?: boolean;
    size?: TaskSize;
    sx?: SxProps<Theme>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}


const Task: FC<TaskProps> =({
    taskColor = TaskColor.DARK,
    header = ".",
    description = ".",
    size= TaskSize.SMALL,
    sx = {},
  }) => {

    const translateColor = {
        [TaskColor.DARK]:  ButtonColor.DARK,
        [TaskColor.WHITE]: ButtonColor.WHITE,
        [TaskColor.LIGHT]: ButtonColor.LIGHT,
    }
    console.log(getColors(taskColor).descriptionColor)
    const maxCharacters = {
        [TaskSize.SMALL]: 50,
        [TaskSize.MEDIUM]: 100,
    } 

    return (
        <Box sx={mergeSx(styles.task(taskColor, size), sx)}>
            <Box sx={styles.dash(taskColor)} >  </Box>
            <Box sx={styles.taskBodyContainer()}> 
                <Box sx={styles.headingContainer()}> 
                    <Typography sx={styles.header(taskColor)} variant='h3Medium'> {header} </Typography>
                    <Typography sx={styles.description(taskColor)} variant='h5Regular'> {description.substring(0, maxCharacters[size])} </Typography>
                </Box>
                <Box> 
                    <Box sx={styles.buttonContainer()}>
                        <Button 
                            text="till 00:00"
                            textColor={getColors(taskColor).buttonColor}
                            color={translateColor[taskColor]}
                        > </Button>
                        <Box> 
                            <Button 
                                text="edit"
                                textColor={getColors(taskColor).buttonColor}
                                color={translateColor[taskColor]}>
                            </Button>
                            <Button 
                                text="Done"
                                textColor={getColors(taskColor).buttonColor}
                                color={translateColor[taskColor]}
                                variant={ButtonVariant.OUTLINED}
                            > </Button>
                        </Box>
                    </Box>
                </Box>
            </Box> 
        </Box>
    );
};

export default Task;