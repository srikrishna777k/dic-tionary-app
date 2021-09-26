import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core'
import React from 'react'
import './Header.css'
import languages from '../../content/languages'

const Header = ({ language, setLanguage, input, setInput, lightmode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightmode ? '#000' : '#fff',
      },
      type: lightmode ? 'light' : 'dark',
    },
  })
  const handleChange = (lang) => {
    setLanguage(lang)
    setInput('')
  }
  return (
    <div className='header'>
      <span className='title'>{input ? input : 'Word House'}</span>
      <form noValidate autoComplete='off' className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            label='Input'
            className='word'
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
          />
          <TextField
            select
            label='Language'
            className='select'
            value={language}
            onChange={(e) => {
              handleChange(e.target.value)
            }}
          >
            {languages.map((lang) => (
              <MenuItem key={lang.label} value={lang.label}>
                {lang.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </form>
    </div>
  )
}

export default Header
