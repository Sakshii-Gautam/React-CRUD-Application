import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/actions';

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    address: '',
    email: '',
    contact: '',
  });

  const { name, address, email, contact } = state;

  const handleChangeInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(state));
    navigate('/');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '70%',
        }}
      >
        <Button
          color='secondary'
          onClick={() => navigate('/')}
          sx={{ width: '200px' }}
        >
          Go back
        </Button>
        <h1>Add User</h1>
      </div>

      <Box
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          label='Name'
          variant='standard'
          name='name'
          value={name}
          onChange={handleChangeInput}
        />
        <TextField
          label='Address'
          variant='standard'
          name='address'
          value={address}
          onChange={handleChangeInput}
        />
        <TextField
          label='Email'
          variant='standard'
          name='email'
          value={email}
          onChange={handleChangeInput}
        />
        <TextField
          label='Contact'
          variant='standard'
          name='contact'
          value={contact}
          onChange={handleChangeInput}
        />
        <Button
          color='primary'
          variant='contained'
          type='submit'
          sx={{ width: '200px', display: 'block', margin: '2rem auto' }}
        >
          Add User
        </Button>
      </Box>
    </>
  );
};

export default AddUser;
