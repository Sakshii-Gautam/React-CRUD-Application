import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/actions';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const onEdit = (id) => {
    navigate(`/editUser/${id}`);
  };

  const handleAddUser = () => {
    navigate('/addUser');
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <h1>Users Details</h1>
        <StyledButton
          color='secondary'
          onClick={handleAddUser}
          sx={{ width: '200px' }}
        >
          Add User
        </StyledButton>
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700, margin: '0 auto', width: '80%' }}
          aria-label='customized table'
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align='center'>Email</StyledTableCell>
              <StyledTableCell align='center'>Address</StyledTableCell>
              <StyledTableCell align='center'>Contact</StyledTableCell>
              <StyledTableCell align='center'>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.name}>
                <StyledTableCell component='th' scope='row'>
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align='center'>{user.address}</StyledTableCell>
                <StyledTableCell align='center'>{user.email}</StyledTableCell>
                <StyledTableCell align='center'>{user.contact}</StyledTableCell>

                <StyledTableCell align='center'>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      '& > *': {
                        m: 1,
                      },
                    }}
                  >
                    <ButtonGroup
                      variant='outlined'
                      aria-label='outlined primary button group'
                    >
                      <Button
                        color='secondary'
                        onClick={() => onDelete(user.id)}
                      >
                        Delete
                      </Button>
                      <Button color='primary' onClick={() => onEdit(user.id)}>
                        Edit
                      </Button>
                    </ButtonGroup>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  width: '12rem',
  backgroundColor: theme.palette.common.black,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.common.black,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default Home;
