import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import Mulish from '../assets/font/Mulish-Regular.ttf';

const RobotoRegular = {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: 100,
    src: `url(${Mulish})`
}
const MulishRegular= {
    fontFamily: 'Mulish-Regular',
    fontStyle: 'normal',
    fontWeight: 20,
    src: `url(${Mulish})`
}
const theme = createTheme({
    typography: {
        fontFamily: [RobotoRegular.fontFamily, MulishRegular.fontFamily].join(',')
    },
    palette: {
        primary: {
            main: '#645CAA'
        },
        secondary: {
            main: '#A084CA'
        }, 
        third: {
            main: '#BFACE0'
        }, 
        fourth: {
            main: '#EBC7E8'
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