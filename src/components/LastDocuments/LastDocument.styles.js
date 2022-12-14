import { makeStyles } from '@material-ui/core';
import mq from "../../config/mq";

const useStyles = makeStyles(theme => ({
   
    container: {
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '1.063rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.025rem',
        color: '#252733',
        [mq('md')]: {
            

        }
    },
    Cheader: {
        display: 'flex',
        flexDirection: 'column',
        width: '57.125rem',
        paddingTop: '2rem',
        paddingLeft: '2rem'
        

    },
    header: {
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '1.188rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.025rem',
        color: '#252733'
    },
    paragraph: {
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: '1rem',
        letterSpacing: '0.006rem',
        color: '#9FA2B4'
    },
    containerC: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderBottom: '0.063rem solid #DFE0EB',
        paddingTop: '2rem',
        paddingLeft: '2rem',
        
    },
    contenthead: {
        width: '43.75rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        letterSpacing: '0.013rem',
        color: '#252733'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: '12.5rem'
    },
    links: {
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        textAlign: 'right',
        letterSpacing: '0.013rem',
        color: '#3751FF',
        width: '5rem',
        display: 'none',
        [mq('md')]: {
            display: 'block'
        }
    },
    page: {
        width: '5rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        textAlign: 'right',
        letterSpacing: '0.013rem',
        color: '#9FA2B4'
    },

}));
export default useStyles;