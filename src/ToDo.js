import { ListItemText, List,Button, ListItem, ListItemAvatar, Modal} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React, {useState} from 'react';
import './ToDo.css'
import db from "./firebase"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function ToDo(props) {
    const classes = useStyles();
    const [open , setOpen] = useState(false);
    const [input, setInput] = useState();
    const handleOpen = () => {
        setOpen(true);
    };

    const updateToDo = () => {

        db.collection('todos').doc(props.text.id).set(
            {
            text : input 
            } 
         , {
             merge : true
            }
        );

        setOpen('false');
    };

    return (
        <React.Fragment>
            <Modal 
                open = {open}
                onClose = {e => setOpen(false)}
            >
                <div className ={classes.paper}>
                    <h1> I am a modal</h1>
                    <Button onClick = {updateToDo} >Update ToDo </Button>
                    <input placeholder = {props.text.text} value = {input} onChange = {event => setInput(event.target.value)} />
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary = {props.text.text} secondary = "Dummy Deadline 🕗 " />
                </ListItem>
                <Button onClick = {e => setOpen(true)}> EDIT ME </Button>
                <DeleteForeverIcon onClick= {event => db.collection('todos').doc(props.text.id).delete() } />
            </List> 
            </React.Fragment>
    )   
}
export default ToDo;


// rfce -> react functional component within Explore 
