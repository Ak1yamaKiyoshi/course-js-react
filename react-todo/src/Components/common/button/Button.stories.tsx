import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';
//import { getColors } from './utils';
//import { ButtonColor, ButtonColorsMap, ButtonTextColor, ButtonVariant} from './types';

const meta = {
    title: 'ui/Button',
    component: Button,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Button>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  export const Base: Story = {
    args: {
      text: " text ",
    },
  };
