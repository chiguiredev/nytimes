import actions from './actions';

const initState = {
  news: null,
  newsState: null,
  material: null,
  keywords: null,
}

export default function newsReducer(state = initState, action) {
  switch (action.type) {
    case actions.FETCH_NEWS_SUCCES:
      return {
        ...state,
        newsState: action.newsState,
        news: action.news,
      }
    case actions.FETCH_NEWS_ERROR:
      return {
        ...state,
        newsState: actions.FETCH_NEWS_ERROR,
      }
    case actions.UPDATE_VALUE:
      return {
        ...state,
        [action.propety]: action.value,
      }
    default:
      return state;
  }
}
