import styled from 'styled-components';
import { baseColors, commonStyles } from '../../utils/theme';
import { fontSizes }  from '../../utils/fonts';

export const StyledNewsFeed = styled.div`
  .head {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1150px) {
      flex-direction: column;
      align-items: baseline;
    }

    .form {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      height: 100px;

      @media only screen and (max-width: 950px) {
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
      }
    }

    .form * {
      margin-left: 5px;
      margin-right: 5px;
    }

    .ny-logo {
      width: 20%;
      max-width: 250px;
      min-width: 150px;
      z-index: 9;
      @media only screen and (max-width: 950px) {
        width: 30%;
      }
    }
  }

  .news-feed {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .news-content {
    a {
      text-decoration: none;
      color: ${baseColors.pink};
      font-size: ${fontSizes.title};
      font-weight: bold;
    }

    p {
      font-size: ${fontSizes.regular};
      color: ${baseColors.pink};
      margin: 0 2px;
    }

    h4 {
      font-size: ${fontSizes.mediumLabel};
      color: ${baseColors.lightpink};
      margin: 0 2px;
      font-weight: normal;
    }
  }

  .news-feed-row {
    padding: 15px;
    background-color: ${baseColors.mediumblue};
    margin-top: 25px;
    width: 80vw;
    max-width: 900px;
    border-radius: ${commonStyles.defaultBorderRadius};
    box-shadow: ${commonStyles.defaultBoxShadow};
    display: flex;

    img {
      width: 143px;
      margin-right: 15px;
    }
  }
`;
