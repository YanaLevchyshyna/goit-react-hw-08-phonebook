import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin-left: 10px;
  font-weight: 600;
  font-size: 22px;
  position: relative;
  color: inherit;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.06em;
    height: 0.2em;
    width: 100%;
    background: linear-gradient(110deg, #e1f549, #29d0be, #6cb8ea, #ff5959);
    z-index: -1;
    transition: height 0.25s cubic-bezier(0.6, 0, 0.4, 1);
  }

  &:hover::after {
    height: 0.9em;
  }
`;
