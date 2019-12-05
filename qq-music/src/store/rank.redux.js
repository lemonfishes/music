import {TOPLIST} from '../api'

export default (state, action) => {
  state = state || {rankList: []}
  switch (action.type) {
    case 'INIT':
      return {rankList: action.rankList}
    default:
      return state
  }
}

export const getRank = () => (dispatch) => {
  fetch(TOPLIST).then((data) => data.json()).then(res => {
    console.log(res)
    dispatch({type: 'INIT', rankList: res.data})
  })
}