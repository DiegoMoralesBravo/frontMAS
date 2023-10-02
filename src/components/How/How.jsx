import React from 'react'
import image from '../../image/micro/4.jpg'

export const How = () => {
  return (
    <>
      <div className='index-container' >
        <div className='data-container'>
          <div className='text-container'>
            <h1>HOW DOES IT WORK?</h1>
          </div>
          <div className='half-line'>
          </div>
          <div className='description-container'>
            <p>System to generate reports of size and quantity of nanoparticles in scanning electron microscope (SEM) and Transmission electron microscopes (TEM) micrographs.</p>
          </div>

        </div>
        <div className='image-container-mid'>
          <img className='image-mid' src={image} alt="" />
        </div>
      </div>
    </>
  )
}
