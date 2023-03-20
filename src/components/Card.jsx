import React from 'react'

const Card = ({image, selected , onClick}) => {
  return (
    <div className='card'>
        <div className={selected ? 'selected': 'unselected'}>
            <img src={image} alt="" className='card-face' />
            <img
                alt=''
                className='card-back'
                src={'/public/assets/fireship.png'}
                />
        </div>
    </div>
  )
}

export default Card