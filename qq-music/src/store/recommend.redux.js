import {RECOMMEND} from '../api'
export default (state, action) => {
   state = state || {radioList: [], slider: []}
   switch(action.type) {
     case 'INIT':
       return {radioList: action.radioList, slider: action.slider}
     default:
       return state
   }
}

export const getRecommend = () => (dispatch) => {
  fetch(RECOMMEND).then((data) => data.json()).then(res => {
    // console.log(res)
    dispatch({type: 'INIT', radioList: res.data.radioList, slider: res.data.slider})
  })
}