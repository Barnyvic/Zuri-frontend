import React from 'react'

const Section5props = ({number, image, header, header2, paragraph}) => {
  return (
    <div>
      <div className="card">
        <div className="flex-items">
          <div className="number">
            <h1>{number}</h1>
          </div>
          <div className="image-con">
            <img src={image} alt="" />
          </div>
        </div>
        <h1>{header}</h1>
        <h1>{header2}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Section5props

