import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalUi from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: '#000',
    padding: theme.spacing(2, 4, 3),
    ...getModalStyle()
  },
}));

const Modal = (props) => {
  const classes = useStyles();

  return (
    <div>
      <ModalUi
        {...props}
      >
        <div className={classes.paper}>
          {props.children}
        </div>
      </ModalUi>
    </div>
  );
}
export default Modal;