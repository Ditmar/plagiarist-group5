import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';


const useStyles = makeStyles(theme => ({
    header: {
        width: '90%',
        margin: '0 auto',
    },

    headerContainer: {
        margin: '20px 0',
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        alignItems: 'center',
        [mq('lg')]: {
            gridTemplateColumns: '15% 60% 25%'
        },
    },

    title: {
        fontSize: '24px',
        fontWeight: '700'
    },

    headerBox: {    
        gridColumn: '2 / 3',
        gridRow: '1 / 2',
        display: 'grid',
        gridTemplateColumns: '70% 30%',
        alignItems: 'center',
        [mq('lg')]: {
            gridColumn: '3 / 4'
        }
    },

    name: {
        marginRight: '10px',
        textAlign: 'right',
    },

    divImage: {
        margin: '0 auto'
    },

    imagePhoto: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
    },

    formHeader: {
        width: '100%',
        gridColumn: '1 / 3',
        display: 'grid',
        gridTemplateColumns: '80% 20%',
        alignItems: 'center',
        gap: '5px',
        marginTop: '10px',
        [mq('lg')]: {
            gridRow: '1 / 2',
            gridColumn: '2 / 3',
            marginTop: '0'
        }
    },

    field: {
        outline: 'none',
        backgroundColor: '#FCFDFE',
        border: '1px solid #F0F1F7',
        borderRadius: '8px',
        padding: '7px 10px',
        [mq('lg')]: {
            backgroundColor: '#D9D9D9'
        }
    },

    icons: {
        margin: '0 auto',
        display: 'flex',
        gap: '15px'
    },

    icon: {
        width: '20px',
        height: '20px',
        color: '#C5C7CD'
    }

}));

export default useStyles;