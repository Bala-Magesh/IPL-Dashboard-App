import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-element">
      <li>
        <div className="team-card-container">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <div className="heading-container">
            <p className="card-heading">{name}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
