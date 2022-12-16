import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    principalPage: {
        background: theme.palette.primary.principalPage,
        color: theme.palette.color.contrastText,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '120vh'
    },
    container: {
        height: '39.438rem',
        width: '34.875rem',
        borderRadius: '0.5rem',
        fontFamily: 'Muslih-Regular',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(720 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '114%',
            height: '441%'
        }
    },
    contentsRegister: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0.688rem'
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Mulish-Regular'
    },
    avatar: {
        display: 'flex',
        width: '3rem',
        height: '3rem',
        margin: 'auto'
    },
    subtittleOne: {
        heigh: '1.5rem',
        left: '2rem',
        right: '2rem',
        top: '6.25rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '1.188rem',
        lineHeight: '1.5rem',
        textAlign: 'center',
        letterSpacing: '0.025rem',
        color: '#A4A6B3',
        opacity: 0.7,
        margin: 'auto'
    },
    h1: {
        //position: 'absolute',
        height: '1.875rem',
        left: '2rem',
        right: '2rem',
        top: '9.75rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '1.5rem',
        lineHeight: '1.875',
        textAlign: 'center',
        letterSpacing: '0.019rem',
        color: '#252733',
        margin: 'auto'
    },
    subtittleTwo: {
        //position: 'absolute',
        height: '1.25',
        left: '2',
        right: '2',
        top: '12',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        textAlign: 'center',
        letterSpacing: '0.019rem',
        color: '#9FA2B4',
        //display: 'flex',
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    label: {
        //position: "absolute",
        heigh: '1rem',
        left: '0rem',
        right: '0rem',
        top: '0rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '0.75rem',
        lineHeight: '0.938rem',
        letterSpacing: '0.019rem',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#9FA2B4'
    },
    textField: {
        boxSizing: 'border-box',
        //position: "absolute",
        height: '2.625rem',
        left: '0rem',
        right: '0rem',
        top: '0.375rem',
        bottom: '0rem',
        background: '#FCFDFE',
        border: '0.063 solid #F0F17',
        //letterSpacing: '0.019rem',
        borderRadius: '0.5rem',
        //color: '#4B506D'
    },
    forgotPassword: {
        //position: "absolute",
        width: '5.313rem',
        heigh: '0.813rem',
        right: '2rem',
        top: '22.125rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '0.625rem',
        lineHeight: '0.813',
        textAlign: 'right',
        letterSpacing: '0.006rem',
        textTransform: 'none',
        color: '#9FA2B4'
    },
    colorIcon: {
        //position: "absolute",
        //left: '8.33%',
        //right: '8.33',
        //top: '16.67%',
        //bottom: '116.67',
        color: '#9FA2B4'
    },
    buttonRegister: {
        //position: "absolute",
        left: '0rem',
        right: '0rem',
        top: '0.5rem',
        bottom: '0rem',
        background: theme.palette.primary.buttonRegister,
        color: theme.palette.color.contrastText,
        //boxShadow: '0 0.25rem 0.75rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        alignItems: 'center',
        letterSpacing: '0.013rem',
        color: '#FFFFFF',
        //textTransform: 'none',
        height: '3.100rem',
        borderRadius: '0.5rem',
        '&:hover': {
            background: '#0000FF'
        }
    },
    footer: {
        //position: "absolute",
        //width: '9.313rem',
        heigh: '1.25rem',
        bottom: '2.5rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        textAlign: 'center',
        letterSpacing: '0.019rem',
        color: '#9FA2B4',
        margin: 'auto'
    },
    footerLogin: {
        //position: "absolute",
        height: '1.25rem',
        left: '0rem',
        right: '0rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight:6000,
        fontSize: '0.875',
        lineHeight: '1.25',
        textAlign: 'center',
        letterSpacing: '0.013rem',
        color: '#3751FF'
    }
}));

export default useStyles;