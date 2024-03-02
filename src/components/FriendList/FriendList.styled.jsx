import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: ${p => p.color};
  align-items: center;
  border: ${({ theme }) => theme.borders.standart};
  justify-content: flex-start;
  padding: 0 ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  border-radius: ${({ theme }) => theme.radii.normal};
  &:hover {
    box-shadow: 1px 6px 7px 2px rgba(0, 0, 0, 0.75);
    border: ${({ theme }) => theme.borders.none};
  }

  &::before {
    content: '';
    display: inline-block;
    width: ${({ theme }) => theme.space[3]}px;
    height: ${({ theme }) => theme.space[3]}px;
    background-color: ${p => (p.isOnline ? 'green' : 'red')};
    margin-right: ${({ theme }) => theme.space[2]}px;
    border-radius: ${({ theme }) => theme.radii.round};
  }
`;

export const AvatarIMG = styled.img`
  width: ${p => p.size};
  border-radius: ${({ theme }) => theme.radii.normal};
  border: 1px solid gray;
  background-color: dimgrey;
  margin-right: ${p => p.mr};
`;
