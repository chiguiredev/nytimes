import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { StyledNewsFeed } from './NewsFeed.style';
import Input from '../../components/inputs/Input';
import DropDownInput from '../../components/inputs/DropDownInput';
import SearchButton from '../../components/buttons/SearchButton';
import Logo from '../../resources/img/logo.svg';
import actions from '../../redux/News/actions';
import { SEARCH_ARTICLE } from '../../api/endpoints';

class NewsFeed extends Component {
  handleSearchButton = () => {
    const { keywords, material } = this.props;
    if (keywords != null && material!= null) {
      this.props.fetch_news(SEARCH_ARTICLE(keywords, material, 0));
    }
  }

  updateValueOnStore = (property, e) => {
    this.props.update_news_form_value(property, e.target.value);
  }

  render() {
    if (this.props.news === null) {
      return <Redirect to='/' />
    }
    return (
      <StyledNewsFeed>
        <div className="head">
          <img className='ny-logo' src={Logo} alt='NY times logo' />
          <div className='form'>
            <Input
              inputType='text'
              labelText='Search Keywords'
              required={true}
              onBlur={this.updateValueOnStore.bind(this, 'keywords')}
            />
            <DropDownInput
              inputType='text'
              labelText='Type of material'
              required={true}
              update_news_form_value={this.props.update_news_form_value}
            />
            <SearchButton onClick={this.handleSearchButton} />
          </div>
        </div>
        <NewsList news={this.props.news} />
      </StyledNewsFeed>
    );
  }
}

const NewsList = ({ news }) => {
  return (
    <div className='news-feed'>
    {
      news.map((element, index) => {
        return (
          <div className='news-feed-row'>
            {
              element.multimedia[0] &&
              <img src={`http://static01.nyt.com/${element.multimedia[0].url}`} alt="" />
            }
            <div className='news-content' key={`${index}${element.headline.main}`}>
              <a target='_blank' rel="noopener noreferrer" href={element.web_url} className='headline'>
                {element.headline.main}
              </a>
              <p className='snippet'>
                {element.snippet}
              </p>
              <h4>
                {`Source: ${element.source}`}
              </h4>
              <h4>
                {`Published: ${element.pub_date}`}
              </h4>
            </div>
          </div>
        );
      })
    }
    </div>
  )
}

export default connect(
  state => ({
    material: state.newsReducer.material,
    keywords: state.newsReducer.keywords,
    news: state.newsReducer.news,
  }),
  {
    fetch_news: actions.fetch_news,
    update_news_form_value: actions.update_news_form_value,
  }
)(NewsFeed);
