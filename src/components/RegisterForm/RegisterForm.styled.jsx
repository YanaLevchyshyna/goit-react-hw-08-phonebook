import styled from '@emotion/styled';

export const FormWrap = styled.div`
  width: 390px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 35px;
  background: #9152f8;
  background: -webkit-linear-gradient(top, #7579ff, #b224ef);
  background: -o-linear-gradient(top, #7579ff, #b224ef);
  background: -moz-linear-gradient(top, #7579ff, #b224ef);
  background: linear-gradient(top, #7579ff, #b224ef);
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
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  margin-bottom: 30px;
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
  padding: 0 5px 0 38px;

  ::placeholder {
    color: ${p => p.theme.colors.placeHolder};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: 18px;
    opacity: 1;
  }
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
    transition: all 0.4s;
    background: #fff;
    box-sizing: inherit;
  }
`;
