import React from 'react';
import MaterialButton from '@material-ui/core/Button';


const Button = props => {
    return(
        <MaterialButton  size='small' {...props}>{props.children}</MaterialButton>
    );

}
export default Button;