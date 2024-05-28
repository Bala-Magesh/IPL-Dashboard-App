import './index.css'
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchDetails: {}}

  componentDidMount() {
    this.fetchTeamMatchDetails()
  }

  fetchTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const data = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const result = await data.json()
    const formattedResult = {
      teamBannerUrl: result.team_banner_url,
      latestMatchDetails: result.latest_match_details,
      recentMatches: result.recent_matches,
    }
    this.setState({teamMatchDetails: formattedResult, isLoading: false})
  }

  render() {
    const {isLoading, teamMatchDetails} = this.state
    const {teamBannerUrl, recentMatches} = teamMatchDetails

    return isLoading ? (
      <div className="loader-container">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <div className="team-match-bg-container">
        <div className="team-matches-content">
          <div className="image-container">
            <img
              className="team-banner-image"
              src={teamBannerUrl}
              alt="team banner url"
            />
          </div>
          <h1 className="latest-matches-heading">Latest Matches</h1>
          <LatestMatch
            latestMatchDetails={teamMatchDetails.latestMatchDetails}
          />
        </div>
        <ul className="match-card-ul">
          {recentMatches.map(eachRecentMatchDetails => (
            <MatchCard
              matchCardDetails={eachRecentMatchDetails}
              key={eachRecentMatchDetails.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
