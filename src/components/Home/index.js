import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, iplTeamData: []}

  componentDidMount() {
    this.fetchIplTeamDetails()
  }

  fetchIplTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))

    this.setState({iplTeamData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, iplTeamData} = this.state

    return isLoading ? (
      <div className="loader-container">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <div className="bg-container">
        <div className="page-heading-cotainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="app-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul>
          {iplTeamData.map(eachData => (
            <TeamCard teamData={eachData} key={eachData.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
