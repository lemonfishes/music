import React from 'react'
import './index.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {getRank} from '../../store/rank.redux'

@connect((state) => ({
  rankList: state.rank.rankList
}), {
  getRank
})
class Rank extends React.Component{
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    this.props.getRank()
  }
  render () {
    console.log(this.props)
    return (
      <div className="rank">
        <ul>
          {
            this.props.rankList && this.props.rankList.map((v, i) => {
              return <NavLink to={"/songlist/"+v.id} key={v.id}>
                      <li>
                        <p className="ph_img">
                          <img src={v.picUrl}/>
                          <span className="iconfont icon-erji">{v.listenCount}</span>
                        </p>
                        <div className="ph_song_list">
                          <span className="iconfont icon-you"></span>
                          <h2>{v.title}</h2>
                          {
                            v.songList.map((j, i) => {
                              return <p key={i}>
                                       {j.number}
                                       <span>{j.songName}</span> -{j.singerName}
                                     </p>
                            })
                          }
                        </div>
                      </li>
                    </NavLink>
            })
          }
        </ul>
      </div>
    )
  }
}
export default Rank