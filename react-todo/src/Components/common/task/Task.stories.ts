import type { Meta, StoryObj } from '@storybook/react';
import Task from './index';


const meta = {
    title: 'ui/Task',
    component: Task,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Task>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  export const Base: Story = {
    args: {
        header: 'Task header',
        description: "Task description",
    },
  };
