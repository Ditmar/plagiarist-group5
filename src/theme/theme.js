import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import  Mulish  from '../assets/font/Mulish-Regular.ttf';
//import Roboto from '../assets/font/Roboto-Regular.ttf';
//import Mulish from '../assets/font/Mulish-Regular.ttf';
const RobotoRegula = {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: 100,
    src: `url(${Mulish})`
}
const MulishRegular= {
    fontFamily: 'Mulish-Regular',
    fontStyle: 'normal',
    fontWeight: 100,
    src: `url(${Mulish})`
}
const theme = createTheme({
    typography: {
        fontFamily: [MulishRegular.fontFamily].join(',')
    },
    palette: {
        primary: {
            main: '#F7F8FC'
        },
        secondary: {
            main: '#A084CA'
        }, 
        third: {
            main: '#BFACE0'
        }, 
        fourth: {
            main: '#EBC7E8'
        },
        field: {
            main: '#FCFDFE',
            border: '#F0F1F7',
            bgLg: '#D9D9D9'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [MulishRegular]
            },
            body: {
                fontFamily: ['Mulish-Regular']
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: 0,
                padding: 0
            }
        }
    }
});

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        { children }
    </ThemeProvider>
)
export default Theme;