import * as React from 'react';
import { Paper, Grid, Container, Avatar, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Link  } from "@material-ui/core";
import { Visibility } from "@mui/icons-material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useStyles from './login.styles';
import logoLogin from '../../assets/images/logologin.png';
import { useState } from 'react';

async function loginUser(credentials) {
    return fetch('http://3.23.86.147/server/autenthication/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            email
        });
        if('accessToken' in response) {
            alert("Sucess")
            .then((value) => {
                window.location.href = "/";
            });
        } else {
            alert('Failed');
        }
    }

    return (
        <Grid container component='main' className={classes.principalPage}>
            <Container component={Paper} elevation={1} maxWidth='xs' className={classes.container}>
                <div className={classes.contentsLogin}>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Avatar className={classes.avatar} src={logoLogin}/>
                        <br/>
                        <div className={classes.subtittleOne}>
                            Plagio Control
                        </div>
                        <br/>
                        <h1 className={classes.h1}>
                            Login Plagio Control
                        </h1>
                        <br/>
                        <div className={classes.subtittleTwo}>
                            Enter you email and password below
                        </div>
                        <br/><br/>
                        <label className={classes.label}>
                            EMAIL
                        </label>
                        <OutlinedInput
                            className={classes.textField}
                            id='email'
                            placeholder='Email address'
                            required
                        />
                        <br/>
                        <InputLabel htmlFor="outlined-adornment-password" className={classes.label}>
                            Password <Link href="#" underline="hover" className={classes.forgotPassword}>{'Forgot password?'}</Link>
                        </InputLabel>
                        <OutlinedInput
                            className={classes.textField}
                            id="outlined-adornment-password"
                            placeholder="Password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        className={classes.colorIcon}
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <br/>
                        <Button type='submit' variant="contained" className={classes.buttonLogin}>Log In</Button>
                        <br/><br/>
                        <div className={classes.footer}>
                            No tienes una cuenta? <Link href="#" underline="hover" className={classes.footerSignUp}> {'Sign up'}</Link>
                        </div>
                    </form>
                </div>
            </Container>
        </Grid>
    );
}
export default Login;