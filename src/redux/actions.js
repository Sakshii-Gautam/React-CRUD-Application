import axios from 'axios';
import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  UPDATE_USER,
  GET_USER,
} from './actionType';

export const loadUsers = () => async (dispatch) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API}`);
  dispatch({
    type: GET_USERS,
    payload: data,
  });
};

export const deleteUser = (id) => async (dispatch, getState) => {
  await axios.delete(`${process.env.REACT_APP_API}/${id}`);
  dispatch({
    type: DELETE_USER,
  });
  dispatch(loadUsers());
};

export const addUser = (user) => async (dispatch, getState) => {
  await axios.post(`${process.env.REACT_APP_API}`, user);
  dispatch({
    type: ADD_USER,
  });
};

export const getUser = (id) => async (dispatch) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API}/${id}`);
  dispatch({
    type: GET_USER,
    payload: data,
  });
};

export const updateUser = (user) => async (dispatch) => {
  await axios.put(`${process.env.REACT_APP_API}/${user.id}`, user);
  dispatch({
    type: UPDATE_USER,
  });
};
