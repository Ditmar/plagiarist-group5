import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    drawer: {
        background: '#363740', 
        color: '#A4A6B3',
        
    },
    avatar: {
        marginLeft: '10px', 
        textTransform: 'none',
        
    },
    nav:{
        background: '#363740', 
        height: '100%', 
        color: '#A4A6B3',       
        
    },
    divider:{
        background: '#DFE0EB', 
        fontSize: '1px', 
        marginTop: '1rem',
        
    },
    hover:{
        margin:'0px',
        '&:hover':{
            color:'white',
            borderLeft:'3px solid #DDE2FF',
            background:'rgba(43, 49, 31, 0.2)'
        }
    },
    appBar:{
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            
        },           
    },
    menuButton:{
        marginRight: theme.spacing(4),
        [theme.breakpoints.up('xs')]: {
            display: 'none',
        },

    },
    menunIcon:{
        background:'#363740'
    }
}));
export default useStyles;