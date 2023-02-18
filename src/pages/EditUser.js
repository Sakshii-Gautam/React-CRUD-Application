import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, updateUser } from '../redux/actions';

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    address: '',
    email: '',
    contact: '',
  });
  const { id } = useParams();
  const { user } = useSelector((state) => state.users);
  const { name, address, email, contact } = state;

  const handleChangeInput = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(state));
    navigate('/');
  };

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

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
          value={name || ''}
          onChange={handleChangeInput}
        />
        <TextField
          label='Address'
          variant='standard'
          name='address'
          value={address || ''}
          onChange={handleChangeInput}
        />
        <TextField
          label='Email'
          variant='standard'
          name='email'
          value={email || ''}
          onChange={handleChangeInput}
        />
        <TextField
          label='Contact'
          variant='standard'
          name='contact'
          value={contact || ''}
          onChange={handleChangeInput}
        />

        <Button
          color='primary'
          variant='contained'
          type='submit'
          sx={{ width: '200px', display: 'block', margin: '2rem auto' }}
        >
          Update
        </Button>
      </Box>
    </>
  );
};

export default EditUser;
