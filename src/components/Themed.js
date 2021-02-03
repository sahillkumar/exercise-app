import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React,{useState} from 'react';
import MainComponent from '../MainComponent';

const ThemedApp = () => {
    
    const [darkTheme, setdarkTheme] = useState(false)
    const paletteType = darkTheme?"dark":"light";
    const mainPrimary = darkTheme ?"#000":"#727272"
    const mainSecondary = darkTheme ?"#000000":"#fff"
    
    const theme= createMuiTheme({
        palette:{
            type:paletteType,
            primary:{
                main:mainPrimary
            }  ,
            secondary:{
                main:mainSecondary
            }
    }
    })

    const handleTheme=()=>{
        setdarkTheme(!darkTheme)
    }
    return ( 
        <MuiThemeProvider theme={theme}>
            <MainComponent handleTheme={handleTheme}/>
        </MuiThemeProvider>
     );
}
 
export default ThemedApp;