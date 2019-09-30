import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Lightbox from "react-image-lightbox"

const SGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`

interface Props {
  images: [
    { src: { id: string; publicURL: string; childImageSharp: { fluid: any } } }
  ]
}

const Gallery: React.FC<Props> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const galleryImages = images.map(({ src: { publicURL } }) => publicURL)

  const handleLightboxOpen = (index: number) => {
    setIsOpen(true)
    setIndex(index)
  }

  return (
    <SGallery>
      {images.map(({ src: { id, childImageSharp: { fluid } } }, index) => (
        <div key={id} onClick={() => handleLightboxOpen(index)}>
          <Img fluid={fluid} />
        </div>
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={galleryImages[index]}
          nextSrc={galleryImages[(index + 1) % galleryImages.length]}
          prevSrc={
            galleryImages[
              (index + galleryImages.length - 1) % galleryImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIndex((index + galleryImages.length - 1) % galleryImages.length)
          }
          onMoveNextRequest={() => setIndex((index + 1) % galleryImages.length)}
        />
      )}
    </SGallery>
  )
}

export default Gallery
