import styled from 'styled-components';
import { baseColors, transitions, commonStyles } from '../../utils/theme';
import { fontSizes } from '../../utils/fonts';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 30px;
  max-width: 100vw;

  p {
    color: ${baseColors.pink};
    font-size: ${fontSizes.regular};
    margin: 5px;
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      ${transitions.defaultTransition};
      background-color: ${baseColors.white};
      border-radius: 50%;
      box-shadow: ${commonStyles.defaultBoxShadow};
      color: ${baseColors.pink};;
      height: 45px;
      width: 45px;
      margin: 10px;
      text-decoration: none;
      font-size: ${fontSizes.footerLinks};

      &:hover {
        background-color: ${baseColors.pink};
        box-shadow: 8px 10px 8px rgba(0,0,0,0.50);
        color: ${baseColors.white};
        margin-top: 5px;
      }
    }
  }

`;

export default StyledFooter;
