'use client'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import ReactPlayer from 'react-player'

const ServiceModal = ({ videoLink }) => {
  const [modal, setModal] = useState(false)
  const openModal = (e) => {
    e.preventDefault()
    setModal(!modal)
  }
  return modal ? (
    <div className="modal-bg">
      <div className="modal-align">
        <div className="modal-content">
          <span className="modal-close" onClick={openModal}>
            <FontAwesomeIcon icon={faX} />
          </span>
          <div className="modal-video-align">
            <ReactPlayer url={videoLink} className="modal-video-item" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default ServiceModal
