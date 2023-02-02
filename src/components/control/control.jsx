import React from 'react'
import "./control.scss"

import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Control = (props) => {
  return (
    <div className='control'>
      <button  onClick={()=> props.skipsong(false)}>
    <FontAwesomeIcon icon={faBackward} />
  </button>
  <button  onClick={()=> props.setisplay(!props.isplay)}>
  <FontAwesomeIcon icon={props.isplay? faPause : faPlay} />
  </button>
  <button  onClick={()=>props.skipsong()}>
  <FontAwesomeIcon icon={faForward} />
  </button>
  </div>
  )
}
