import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { omit, pick } from 'lodash';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const validate = user => {
  // const validatedUser = Object.keys(user).map(item => !!user[item] ? user[item] : 'Inexistente');
  const validatedUser = Object.fromEntries(
    Object.entries(user)
      .map(([k, v]) => v != null ? [k, v] : [k, 'Empty'])
      .map(([k, v]) => (typeof v === "object" ? [k, validate(v)] : [k, v]))
  );
  return validatedUser
}
const mapUsersToModel = (user) => {
  return {
    name : `${user.firstName} ${user.lastName}`,
    ...pick(user, ['email']),
    postalCodeAndCity: `${user.postalCode} / ${user.city}`,
    ...pick(user, ['country'])

    
  }
}

export default function SimpleCard(props) {
  const classes = useStyles();
  const mappedUser = mapUsersToModel(validate(props.user));


  return (
    <Card className={classes.card}>
      <CardContent>
        {
            Object.keys(mappedUser).map( entry => (
                <Field key={entry} field={entry} user={mappedUser} />
            ))
            /* props.user.map(field => (
                <Field field={field} user={props.user}/>
            )) */
        }
      </CardContent>
      <CardActions>
        <Button size="small">Checkout</Button>
      </CardActions>
    </Card>
  );
}

function Field(props){

    return (
        <Fragment>
        <Typography align="left" color="textSecondary" gutterBottom>
          {
              props.field === "postalCodeAndCity" ?  'Postal Code / City' 
                : props.field === "name" ?  'Name' : props.field
          }
        </Typography>
        <Typography variant="h5" component="h2">
        {props.user[props.field] }
        </Typography>
        </Fragment>
    )
}

//SOLVE ORDENATION OF STRINGS IN OBJECT KEY ARRAY (NAME FIRST)