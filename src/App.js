import { Container, withStyles, Switch } from '@material-ui/core'
import { get } from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Meaning from './components/meaning/meaning'
import { orange } from '@material-ui/core/colors'

function App() {
  const SwitchTheme = withStyles({
    switchBase: {
      color: orange[300],
      '&$checked': {
        color: orange[500],
      },
      '&$checked + $track': {
        backgroundColor: orange[500],
      },
    },
    checked: {},
    track: {},
  })(Switch)

  const [input, setInput] = useState('')
  const [definition, setDefinition] = useState([])
  const [language, setLanguage] = useState('en')
  const [lightmode, setMode] = useState(0)
  const apicall = async () => {
    try {
      const { data } = await get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${input}`
      )
      setDefinition(data)
    } catch (error) {
      throw error
    }
  }
  useEffect(() => {
    apicall()
  }, [input, language])

  const Headerprops = { language, setLanguage, input, setInput, lightmode }
  const Meaningprops = { definition, input, language, lightmode }

  return (
    <div
      className='App'
      style={{
        backgroundColor: lightmode ? '#fff' : '#28303d',
        color: lightmode ? 'black' : 'white',
        transition: 'all 0.5s linear',
      }}
    >
      <Container maxWidth='md' className='container'>
        <div className='theme'>
          <span>{lightmode ? 'Dark' : 'Light'} theme</span>
          <SwitchTheme
            onChange={() => setMode(!lightmode)}
            checked={lightmode}
          />
        </div>
        <Header {...Headerprops} />
        <Meaning {...Meaningprops} />
      </Container>
    </div>
  )
}

export default App
