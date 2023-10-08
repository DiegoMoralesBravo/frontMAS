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
            <p>The operation of the Micrograph Analysis System (MAS) is intuitive and efficient, allowing you to obtain accurate and detailed information from your micrographs in just a few simple steps:</p>
            <ol>
              <li><strong>Registration and Login:</strong> Begin by creating an account on MAS to access all of its features. Once registered and logged in, you'll be ready to take advantage of the platform's capabilities.</li>
              <li><strong>Uploading Micrographs:</strong> Navigate to the "Report" module and easily upload your micrographs. MAS is compatible with various common image formats, enabling you to upload your samples quickly and efficiently.</li>
              <li><strong>Intelligent Analysis:</strong> Once you've uploaded your micrographs, MAS utilizes advanced machine learning algorithms to analyze the images for relevant features and elements. This analysis phase provides essential data about what is present in your samples.</li>
              <li><strong>Detailed Results:</strong> In the "History" section, you can access all previous analyses you've conducted. This allows you to review and download detailed results at any time, making it easy to revisit and track your research.</li>
            </ol>
          </div>
        </div>
        <div className='image-container-mid'>
          <img className='image-mid' src={image} alt="" />
        </div>
      </div>
    </>
  )
}
