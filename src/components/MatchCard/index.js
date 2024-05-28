import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  console.log(matchCardDetails)
  console.log('match card')

  const formattedMatchCardDetails = {
    competingTeamLogo: matchCardDetails.competing_team_logo,
    competingTeam: matchCardDetails.competing_team,
    result: matchCardDetails.result,
    matchStatus: matchCardDetails.match_status,
  }

  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = formattedMatchCardDetails
  const statusClassName = matchStatus === 'Won' ? 'green-result' : 'red-result'

  return (
    <li className="match-card-li">
      <div>
        <div className="match-card-align-center">
          <img
            className="competing-team-logo"
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
          />
        </div>
        <p className="competing-team">{competingTeam}</p>
        <p className="result">{result}</p>
      </div>
      <div>
        <p className={statusClassName}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
