const actions = {
  FETCH_NEWS: 'FETCH_NEWS',
  fetch_news: (url) => ({
    type: actions.FETCH_NEWS,
    url: url,
  }),
  FETCH_NEWS_SUCCES: 'FETCH_NEWS_SUCCES',
  FETCH_NEWS_ERROR: 'FETCH_NEWS_ERROR',
  FETCHING_NEWS: 'FETCHING_NEWS',
  UPDATE_FORM_VALUE: 'NEWS/UPDATE_FORM_VALUE',
  UPDATE_VALUE: 'UPDATE_VALUE',
  update_news_form_value: (propety, value) => ({
    type: actions.UPDATE_VALUE,
    propety: propety,
    value: value,
  }),
  FETCH_MORE_NEWS: 'FETCH_MORE_NEWS;',
  fetch_more_news: (url) => ({
    type: actions.FETCH_MORE_NEWS,
    url: url,
  })
};
export default actions;
