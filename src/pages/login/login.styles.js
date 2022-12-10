import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    principalPage: {
        background: '#363740',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container: {
        height: '582px',
        width: '380px',
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
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Mulish-Regular'
    },
    avatar: {
        display: 'flex',
        width: '48px',
        height: '48px',
        margin: 'auto'
    },
    subtittleOne: {
        heigh: '24px',
        left: '32px',
        right: '32px',
        top: '100px',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: '19px',
        lineHeight: '24px',
        color: '#A4A6B3',
        margin: 'auto'
    },
    h1: {
        height: '30px',
        left: '32px',
        right: '32px',
        top: '156px',
        fontWeight: 700,
        fontSize: '24px',
        color: '#252733',
        margin: 'auto'
    },
    subtittleTwo: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        color: '#9FA2B4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        heigh: '16px',
        left: '0px',
        right: '0px',
        top: '0px',
        fontWeight: 700,
        fontSize: '12px',
        lineHeight: '15px',
        letterSpacing: '0.3px',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#9FA2B4',
    },
    textFieldArea: {
        height: '64px',
        left: '32px',
        right: '32px',
        top: '266px',
        background: '#FCFDFE'
    },
    textField: {
        height: '42px',
        left: '0px',
        right: '0px',
        top: '6px',
        bottom: '0px',
        background: '#FCFDFE',
    },
    forgotPassword: {
        width: '90px',
        heigh: '13px',
        right: '32px',
        top: '354px',
        fontSize: '10px',
        fontWeight: 400,
        textTransform: 'none',
        color: '#9FA2B4'
    },
    colorIcon: {
        color: '#9FA2B4'
    },
    buttonLogin: {
        left: '0px',
        right: '0px',
        top: '0px',
        bottom: '0px',
        background: '#3751FF',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '20px',
        alignItems: 'center',
        color: '#FFFFFF',
        textTransform: 'none',
        height: '50px'
    },
    footer: {
        heigh: '20px',
        bottom: '40px',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#9FA2B4',
        margin: 'auto'
    },
    footerSignUp: {
        height: '20px',
        left: '0px',
        right: '0px',
        color: '#3751FF'
    }
}));
export default useStyles;