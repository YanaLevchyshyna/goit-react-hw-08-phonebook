import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/auth-operations';
import { Wrapper, UserName, LogoutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log('user====>', user);

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </Wrapper>
  );
};
