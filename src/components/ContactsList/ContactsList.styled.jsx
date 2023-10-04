import styled from '@emotion/styled';

export const ContactsListWrapp = styled.div`
  margin: 20px auto 20px auto;

  padding: ${p => p.theme.space[5]}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  gap: 15px;
  color: ${p => p.theme.colors.text};
`;
