import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  margin: 20px auto 20px auto;

  padding: ${p => p.theme.space[5]}px;

  background-image: radial-gradient(circle at center, #7579ff, #b224ef);
  animation: gradient 10s ease infinite;
  background-size: 400% 400%;

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

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radius.normal};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  opacity: 0.8;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
`;

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelName = styled.label`
  margin-bottom: 30px;
  display: block;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
  color: ${p => p.theme.colors.label};
`;

export const InputName = styled.input`
  margin-top: 10px;
  display: block;
  width: 300px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  background-color: ${p => p.theme.colors.input};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radius.normal};
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);

  ::placeholder {
    color: ${p => p.theme.colors.primary};
    opacity: 0.4;
  }

  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const AddContactButton = styled.button`
  width: 120px;
  height: 40px;
  outline: none;

  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  font-family: Poppins-Medium, sans-serif;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radius.round};
  background-color: ${p => p.theme.colors.button};
  color: ${p => p.theme.colors.text};

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
