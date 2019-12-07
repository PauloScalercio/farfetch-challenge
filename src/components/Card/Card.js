import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardUi from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { pick, isEmpty } from 'lodash';

import composeP from '../../utils/functional';

import Button from '../Button';
import Field from '../Field';
import Modal from '../Modal'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
});
const validate = user => {
  const validatedUser = Object.fromEntries(
    Object.entries(user)
      .map(([k, v]) => isEmpty(v) ? [k, 'Empty'] : [k, v])
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

const Card = (props) => {
  const classes = useStyles();
  const mappedUser = mapUsersToModel(validate(props.user));

  const [editModalEnabled, setEditModalEnabled] = React.useState(false);

  const handleOpen = () => {
    setEditModalEnabled(true);
  }
  const handleClose = () => {
    setEditModalEnabled(false);
  }

  const generateFieldsBasedOnUserTemplate = (user) => {
    return Object.keys(user).map( entry => (
      <Field key={entry} field={entry} user={user} editable={editModalEnabled} disabled={user[entry] === user.id ? true : false}></Field>
  ))
  }

  const handleSubmitAndClose = composeP(
    handleClose,
    user => props.handleUpdateUser(user),
    e => handleSubmit(e),
  );

  const handleSubmit = e => {
    e.preventDefault();
    return {
      id: e.target.id.value,
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      postalCode: e.target.postalCode.value,
      city: e.target.city.value,
      country: e.target.country.value,
    }
  }

  return (
    <CardUi className={classes.card}>
      <CardContent>
        {  
          generateFieldsBasedOnUserTemplate(mappedUser)
        }
      </CardContent>
      <CardActions>

        <Button onClick={() => props.handleCheckout(props.user)}>Checkout</Button>
        <Button onClick={handleOpen} >Edit</Button>
        <Modal
        open={editModalEnabled}
        onClose={handleClose}
      >
          <h2 id="simple-modal-title">Edit user</h2>
          <form onSubmit={handleSubmitAndClose} >
          {        
            generateFieldsBasedOnUserTemplate(props.user)
          }
        <Button type='submit'>Confirm Changes</Button>
        <Button onClick={handleClose}>Close</Button>
        </form>
      </Modal>
      </CardActions>
    </CardUi>
  );
}

export default Card;