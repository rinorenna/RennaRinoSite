import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import i18n from "i18next";

function Navbar({ toggleColorMode }) {
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <div>
            <h1>{t('Welcome.text')}</h1>
            < IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit" >
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton >
            <Button variant="outlined"
                onClick={() => {
                    i18n.language === 'en' ? i18n.changeLanguage('it') : i18n.changeLanguage('en')
                }}
            >Outlined</Button>
        </div>

    )
}

export default Navbar