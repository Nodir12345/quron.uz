import React from 'react'
import "./radius.scss"

export const Radius = (props) => {
  return (
    <div className='container'>
      <div className="radius_box">
      <img className="img" src={props.song.img_src} alt="" />
      <h1  className='song name'>{props.song.artist}</h1>
      <h1  className='song name'>{props.song.title}</h1>
      </div>
    </div>
  )
}
