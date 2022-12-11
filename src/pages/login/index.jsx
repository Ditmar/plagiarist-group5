import * as React from 'react';
import { 
    Paper, 
    Grid, 
    Container, 
    Avatar, 
    InputLabel, 
    OutlinedInput, 
    InputAdornment, 
    IconButton, 
    Button, 
    Link  
} from "@material-ui/core";
import { Visibility } from "@mui/icons-material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useStyles from './login.styles';
import logoLogin from '../../assets/images/logologin.png';
import { useState } from 'react';

const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState();
    const url='http://3.23.86.147/server/autenthication/login';
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const passw = values.password;

    async function loginUser(credentials) {
        return fetch(url, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(data => data.json())
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
        console.log(email)
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            email,
            passw
        });
        if('email' && 'passw' in response) {
            alert("Sucess")
            .then((value) => {
                localStorage.setItem('email', response['email']);
                localStorage.setItem('passw', response['passw']);
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
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Avatar 
                            className={classes.avatar} 
                            src={logoLogin}
                        />
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
                            name='email'
                            placeholder='Email address'
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <br/>
                        <InputLabel htmlFor="outlined-adornment-password" className={classes.label}>
                            Password <Link href="#" underline="hover" className={classes.forgotPassword}>{'Forgot password?'}</Link>
                        </InputLabel>
                        <OutlinedInput
                            className={classes.textField}
                            id="password"
                            name='password'
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
                        <Button 
                            type='submit' 
                            variant="contained" 
                            className={classes.buttonLogin}>
                                Log In
                        </Button>
                        <br/><br/>
                        <div className={classes.footer}>
                            No tienes una cuenta? 
                        <Link href="#" underline="hover" className={classes.footerSignUp}> {'Sign up'} </Link>
                        </div>
                    </form>
                </div>
            </Container>
        </Grid>
    );
}

export default Login;