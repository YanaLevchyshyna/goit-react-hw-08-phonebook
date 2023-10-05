import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const LogoutButton = styled.button`
  width: 80px;
  height: 30px;
  outline: none;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  font-family: Poppins-Medium, sans-serif;
  font-size: ${p => p.theme.fontSizes.s};
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
