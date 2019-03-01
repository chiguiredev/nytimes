import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/inputs/Input';
import DropDownInput from '../../components/inputs/DropDownInput';
import SearchButton from '../../components/buttons/SearchButton';
import StyledLandingFrom from './LandingForm.style';
import actions from '../../redux/News/actions';
import { SEARCH_ARTICLE } from '../../api/endpoints';

class LandingForm extends Component {
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
    return (
      <StyledLandingFrom>
        <div className='logo'>
          <h1>NY</h1>
          <span>times</span>
        </div>
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
      </StyledLandingFrom>
    );
  }
}

export default connect(
  state => ({
    material: state.newsReducer.material,
    keywords: state.newsReducer.keywords,
  }),
  {
    fetch_news: actions.fetch_news,
    update_news_form_value: actions.update_news_form_value,
  }
)(LandingForm);
