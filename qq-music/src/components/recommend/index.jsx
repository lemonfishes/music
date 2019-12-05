import React from 'react'
import './index.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {getRecommend} from '../../store/recommend.redux'
import { Carousel } from 'antd';

@connect((state) => ({
  radioList: state.recommend.radioList,
  slider: state.recommend.slider
}), {
  getRecommend
})
class Recommend extends React.Component{
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    this.props.getRecommend()
  }
  render () {
    // console.log(this.props)
    return (
      <div className="recommend">
        {/* 轮播图 */}
        <div className="banner">
          <Carousel>
            {
              this.props.slider && this.props.slider.map((item, index) => {
                return <div key={index}><img src={item} alt=""/></div>
              })
            }
          </Carousel>
        </div>
        {/* 电台 */}
        <div className="station">
          <h2 className="sta_title">电台</h2>
          <ul>
            {/* 服务端有问题,无法接收真实电台的歌单ID,所以固定为26 */}
            {/* <a href="/#/songList/26"> */}
            {
              this.props.radioList && this.props.radioList.map((v, i) => {
                return <li key={i}>
                        <div>
                          <img src={v.picUrl}/>
                          <span className="iconfont icon-bofang">{v.title}</span>
                        </div>
                        {/* <h2 className="station_name">xxxx</h2> */}
                      </li>
              })
            }
              
            {/* </a> */}
          </ul>
        </div>
        {/* 底部 */}
        <div className="foot">
          <p className="foot_computer">
            <a href="https://y.qq.com/?ADTAG=myqq&amp;nomobile=1#type=index">查看电脑版网页</a>
          </p>
          <p className="foot_logo">
            <img src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000" alt=""/>
          </p>
          <div className="copyright">
            <p>Copyright © 1998 - Tencent. All Rights Reserved.</p>
            <p>联系电话：0755-86013388 QQ群：55209235</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Recommend