import { Box } from '@mui/material';
import Task from '../common/task/Task';
import { TaskColor, TaskSize } from '../common/task/types';
import Button from '../common/button/Button';
import { ButtonColor, ButtonSize, ButtonVariant } from '../common/button/types';
function App() {
  return (
    <Box sx={{margin:'0px',padding:'200px',height: '2000px', width:'2000px', backgroundColor:'backgroundDark.primary'}}>
      <Task
        taskColor={TaskColor.WHITE}
        size={TaskSize.MEDIUM}
        header='# Go to sleep'
        description="Go to sleep at 00:00 and wake up at 8:00 today" 
      />

    <Button
      sx={{margin:'20px'}}
      color={ButtonColor.LIGHT}
      variant={ButtonVariant.OUTLINED}
      size={ButtonSize.SMALL}
    >

    </Button>
    </Box>


  )
}

export default App
