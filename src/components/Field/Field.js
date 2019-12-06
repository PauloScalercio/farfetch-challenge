import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';


const Field = (props) => {

    const [fieldValue, setFieldValue] = React.useState(props.user[props.field]);

    return (
        <Fragment>
            <Typography align='left' color='textSecondary' gutterBottom>
                {
                    props.field === 'postalCodeAndCity' ? 'Postal Code / City'
                        : props.field === "name" ? 'Name' : props.field
                }
            </Typography>
            { 
            props.editable ? 
            <Input value={fieldValue} onChange={e => setFieldValue(e.target.value)} fullWidth name={props.field} disabled={props.disabled}/>
             : 
            <Typography variant='h5' component='h2' >
                {props.user[props.field]}
            </Typography>
            }
            
        </Fragment>
    )
}
export default Field;