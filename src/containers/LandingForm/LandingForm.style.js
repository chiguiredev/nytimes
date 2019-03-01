import styled from 'styled-components';
import { baseColors, transitions } from '../../utils/theme';
import { fontSizes } from '../../utils/fonts';

const StyledLandingFrom = styled.div`

  .form {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    transition: ${transitions.defaultTransition};
    height: 100px;

    @media only screen and (max-width: 840px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .form * {
    margin-left: 15px;
    margin-right: 15px;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${baseColors.pink};
    margin-top: 25vh;
    margin-bottom: 45px;

    h1, span {
      margin: 0px;
    }

    h1 {
      font-size: ${fontSizes.logo.big};
      line-height: 60px;
    }

    span{
      font-size: ${fontSizes.logo.small};
    }
  }

`;

export default StyledLandingFrom;
