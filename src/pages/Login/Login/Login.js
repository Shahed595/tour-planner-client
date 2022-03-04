import { Container, Grid, TextField, Typography,Button, CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import login from '../../../images/login/login.jpg'
import useAuth from "../../hooks/useAuth";

const Login = () => {

    const [loginData,setLoginData]=useState({});
    const {isLoading, user,authError,loginUser } = useAuth();

    const handleOnchange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        // console.log(field,value);
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit=e=>{
        // alert("hello");
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{mt:10}} xs={12} md={6}>
        <Typography variant="body1" gutterBottom>Login</Typography>
        <form onSubmit={handleLoginSubmit}>
        <TextField
            sx={{width:"75%",m:1}}
            id="standard-basic"
            label="Your Email"
            name="email"
            onChange={handleOnchange}
            variant="standard"
             />
        <TextField
            sx={{width:"75%",m:1}}
            id="standard-basic"
            label="Your Password"
            type="password"
            name="password"
            onChange={handleOnchange}
            variant="standard"
             />
            <Button sx={{width:"75%",m:1}} type="submit" variant="contained">Login</Button>
            <NavLink to="/register"  style={{textDecoration:'none'}}>
            <Button variant="text">New User? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress color="success" />}
          {user?.email && (
            <Alert severity="success">Login Successful!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </form>
        </Grid>
        <Grid item xs={12} md={6}>
            <img style={{width:"100%"}} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
