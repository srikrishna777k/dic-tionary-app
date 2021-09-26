import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

import './meaning.css'

const Meaning = ({ definition, input, language, lightmode }) => {
  return (
    <div className='meanings scroll'>
      {input && definition[0] && language === 'en' && (
        <ReactAudioPlayer
          className='audio'
          src={definition[0].phonetics[0] && definition[0].phonetics[0].audio}
          controls
        />
      )}
      {!input ? (
        <div className='enter'>Enter something</div>
      ) : (
        definition.map((type) => {
          return type.meanings.map((mean) => {
            return mean.definitions.map((def) => {
              return (
                <div
                  className='def'
                  style={{
                    backgroundColor: lightmode ? '#28303d' : 'white',
                    color: lightmode ? 'white' : 'black',
                  }}
                >
                  <b className='type'>{def.definition}</b>
                  <hr className='break' />
                  {def.example && (
                    <span className='type'>
                      <b>Example : </b>
                      {def.example}
                    </span>
                  )}
                  {def.synonyms == true && (
                    <span>
                      <b>Synonyms : </b>
                      {def.synonyms.map((syn) => `${syn}, `)}
                    </span>
                  )}
                </div>
              )
            })
          })
        })
      )}
    </div>
  )
}

export default Meaning
