import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Avatar from '@mui/material/Avatar';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({data}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>
      <Button variant="outlined" onClick={handleClickOpen} fullWidth sx={{color: "white", width:"500px"}}>
        SIGN UP
      </Button>
        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Your info:
            </Typography>
            
            
          </Toolbar>
        </AppBar> {data !== null && <List sx={{width: "50%", marginX: "auto", marginTop: "20px"}}>
        {data.get('profileImg') && 
        <>
            <Avatar alt="person image" src={data.get('profileImg')} sx={{width: "100px", height: "100px", marginX: "auto"}}/>
        </> 
          }

{data.get('firstName') && 
        <>
            <ListItem>
                <ListItemText primary="First Name" secondary={data.get('firstName')} />
            </ListItem>
            <Divider />
        </> 
          }
{data.get('lastName') && 
        <>
            <ListItem >
            <ListItemText
              primary="Last Name"
              secondary={data.get('lastName')}
            />
          </ListItem>
            <Divider />
        </> 
          }

{data.get('email') && 
        <>
            <ListItem >
            <ListItemText primary="Email" secondary={data.get('email')} />
          </ListItem>
            <Divider />
        </> 
          }
          
          
        </List>}
        
      </Dialog>
     
    </div>
  );
}