import styled from '@emotion/styled';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';

export const FormWrap = styled.div`
  margin: 75px auto 0 auto;
  width: 390px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 35px;
  background: #9152f8;
  background-image: linear-gradient(to bottom, #7579ff, #b224ef);
  opacity: 0.8;
`;

export const FormTitleLogIn = styled.span`
  display: block;
  margin-bottom: 30px;
  font-family: Poppins-Medium, sans-serif;
  font-size: 30px;
  color: #fff;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
`;

export const FormEl = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  margin-bottom: 30px;
`;

export const OutlineMailSVG = styled(HiOutlineMail)`
  position: absolute;
  top: 7px;
  left: 0;

  stroke: #ffffff;
  stroke-width: 1.5;
  width: 24px;
  height: 24px;
`;

export const LockClosedSVG = styled(HiOutlineLockClosed)`
  position: absolute;
  top: 7px;
  left: 0;

  stroke: #ffffff;
  stroke-width: 1.5;
  width: 24px;
  height: 24px;
`;

export const FocusInput = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  :before {
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    background: #fff;
  }

  :after {
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 6px;
    left: 0;

    font-family: Material-Design-Iconic-Font;
    font-size: 22px;
    color: #fff;
    padding-left: 5px;

    transition: all 0.4s;
  }
`;

export const Input = styled.input`
  display: block;
  font-family: Poppins-Regular, sans-serif;
  font-size: 16px;
  color: #fff;
  background: transparent;
  line-height: 1.2;
  width: 100%;
  height: 45px;
  padding: 0 0 0 38px;

  ::placeholder {
    color: ${p => p.theme.colors.placeHolder};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: 18px;
    opacity: 1;
  }
  :focus {
    border-color: transparent;
  }
`;

//  + ${FocusInput}::after {
//       top: -22px;
//       font-size: 18px;
//     }
//     + ${FocusInput}::before {
//       width: 100%;
//     }

export const Button = styled.button`
  font-family: Poppins-Medium, sans-serif;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radius.round};
  background-color: ${p => p.theme.colors.button};
  color: ${p => p.theme.colors.text};

  display: block;
  margin: 0 auto;
  padding: 0 20px;
  min-width: 120px;
  height: 50px;

  :hover,
  :focus {
    color: ${p => p.theme.colors.buttonHover};
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

    background-image: linear-gradient(to top, #7579ff, #b224ef);
    animation: gradient 4s ease infinite;
    background-size: 200% 200%;

    @keyframes gradient {
      0% {
        background-position: 0% 0%;
      }
      50% {
        background-position: 100% 100%;
      }
      100% {
        background-position: 0% 0%;
      }
    }
  }
`;
