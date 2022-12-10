import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    principalPage: {
        background: '#363740',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container: {
        height: '36.375rem',
        width: '23.75rem',
        fontFamily: 'Muslih-Regular',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(720 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    contentsLogin: {
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
        left: '2',
        right: '2rem',
        top: '6.25rem',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: '1.188rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.025rem',
        color: '#A4A6B3',
        margin: 'auto'
    },
    h1: {
        height: '1.875rem',
        left: '2rem',
        right: '2rem',
        top: '9.75rem',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '1.5rem',
        letterSpacing: '0.019rem',
        color: '#252733',
        margin: 'auto'
    },
    subtittleTwo: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '0.875rem',
        letterSpacing: '0.019rem',
        lineHeight: '1.25rem',
        color: '#9FA2B4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        heigh: '1rem',
        left: '0rem',
        right: '0rem',
        top: '0rem',
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
        height: '2.625rem',
        left: '0rem',
        right: '0rem',
        top: '0.375rem',
        bottom: '0rem',
        background: '#FCFDFE',
        letterSpacing: '0.019rem',
        borderRadius: '0.5rem'
        
    },
    forgotPassword: {
        width: '5.625rem',
        heigh: '0.813rem',
        right: '2rem',
        top: '22.125rem',
        fontSize: '0.625rem',
        fontWeight: 400,
        letterSpacing: '0.019rem',
        textTransform: 'none',
        color: '#9FA2B4'
    },
    colorIcon: {
        color: '#9FA2B4'
    },
    buttonLogin: {
        left: '0rem',
        right: '0rem',
        top: '0rem',
        bottom: '0rem',
        background: '#3751FF',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        alignItems: 'center',
        letterSpacing: '0.013rem',
        color: '#FFFFFF',
        textTransform: 'none',
        height: '3.125rem',
        borderRadius: '0.5rem'
    },
    footer: {
        heigh: '1.25rem',
        bottom: '2.5rem',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        letterSpacing: '0.019rem',
        color: '#9FA2B4',
        margin: 'auto'
    },
    footerSignUp: {
        height: '1.25rem',
        left: '0rem',
        right: '0rem',
        letterSpacing: '0.013rem',
        color: '#3751FF'
    }
}));
export default useStyles;