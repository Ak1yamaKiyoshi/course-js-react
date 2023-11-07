import { SxProps, Theme } from '@mui/material/styles'
import { TaskColor, TaskSize } from './types';
import { getColors } from './utils';


export const header = (
    taskColor: TaskColor,
): SxProps<Theme> => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    color: getColors(taskColor).headingColor,
    overflow: 'hidden',
});

export const description = (
    taskColor: TaskColor,
): SxProps<Theme> => ({
    color: getColors(taskColor).descriptionColor,
    fontSize: '16px',
    marginBottom: '12px',
    marginLeft: '10px',
    maxWidth: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

type TaskSizeMap = {
    [key in TaskSize]: string;
}

export const sizes: TaskSizeMap = {
    [TaskSize.SMALL]: '421px',
    [TaskSize.MEDIUM]: '678px',
}

export const task = (
    color: TaskColor,
    size: TaskSize,
): SxProps<Theme> => ({
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '5px',
    ...(size === TaskSize.SMALL && {
        width: sizes[size],
    }),
    ...(size === TaskSize.MEDIUM && {
        width: sizes[size],
    }),
    backgroundColor: getColors(color)
        .backgroundColor,
});


export const dash = (
    color: TaskColor,
): SxProps<Theme> => ({
    width: '2px',
    height: '168px',
    padding: '4px',
    borderRadius: '5px 0px 0px 5px',
    backgroundColor: getColors(color)
        .dashColor,
});

export const headingContainer = (): SxProps<Theme> => ({
    padding: '10px 10px',
});

export const taskBodyContainer = (
): SxProps<Theme> => ({ 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '168px',
    width: '100%',
    '& Button': {
        margin: '8px',
    },
});

export const buttonContainer = (
): SxProps<Theme> => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
});
