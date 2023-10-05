import styled from '@emotion/styled';
import bgImg from 'images/bg-img.jpg';

export const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
