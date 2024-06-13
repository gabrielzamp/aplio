import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const RatingStars = ({ rating, ratingColor, ratingEmptyColor }) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} className={ratingColor} />)
    } else {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} className={ratingEmptyColor} />)
    }
  }
  return <div>{stars}</div>
}
