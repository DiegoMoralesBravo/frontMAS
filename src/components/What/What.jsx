import React from 'react'
import image from '../../image/sem.png'

export const What = () => {
  return (
    <>
      <div className='index-container grey-container'>
        <div className='image-container'>
          <img src={image} alt="" />
        </div>
        <div className='data-container'>
          <div className='text-container'>
            <h1>WHAT IS <strong>MAS</strong>? </h1>
          </div>
          <div className='half-line-100'>
          </div>
          <div className='description-container'>
          <p>Micrograph Analysis System (MAS) is an innovative web application designed to simplify and enhance the analysis of microscope images, known as micrographs. MAS harnesses the power of artificial intelligence and machine learning to provide valuable insights from these micrographs, making it easier to understand the details and features within the samples.</p>
          </div>
        </div>
      </div>
    </>
  )
}
