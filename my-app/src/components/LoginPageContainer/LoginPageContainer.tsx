import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../store/authReduser';
import Error from '../Error/Error';
import LoginPage from './LoginPage/LoginPage';
const axios = require('axios').default;

const LoginPageContainer: FC = () => {
  const state = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  interface IUser {
    isAuth: boolean;
    id: string;
    username: string;
    login: string;
    email: string;
    password: string;
    token: string;
  }
  let user: IUser;
  let setUser: any;

  [user, setUser] = useState({
    isAuth: false,
    id: '',
    username: '',
    login: '',
    email: '',
    password: '',
    token: '',
  });

  useEffect(() => {
    if (user.isAuth) {
      axios
        .post('https://quiet-bastion-49623.herokuapp.com/signin', {
          login: user.login,
          password: user.password,
        })
        .then((res: any) => {
          localStorage.setItem('token', res.data.token);
          setUser({
            ...user,
            token: res.data.token,
          });
          axios
            .get(`https://quiet-bastion-49623.herokuapp.com/users`, {
              headers: {
                Authorization: `Bearer ${res.data.token}`,
              },
            })
            .then((res: any) => {
              let [userId] = res.data.filter((el: any) => el.login === user.login);
              let resultUser = {
                ...user,
                id: userId.id,
                username: userId.name,
                login: userId.login,
              };

              return (
                dispatch(signin(resultUser)),
                setUser({
                  isAuth: false,
                  id: '',
                  username: '',
                  login: '',
                  email: '',
                  password: '',
                  token: '',
                }),
                navigate('/main')
              );
            })
            .catch((er: any) => {
              console.log(er);
            });
        })
        .catch((error: any) => {
          return navigate('/error'), (<Error {...error.response.data.message} />);
        });
    }
  }, [user]);

  return <LoginPage addUser={setUser} />;
};

export default LoginPageContainer;
