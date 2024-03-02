import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondary};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 350px;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 70px;
  flex-basis: calc(100% / 4);
  background-color: ${p => p.color};
  align-items: center;
  justify-content: center;
`;
export const Text = styled.p`
  color: ${p => p.theme.colors.background};
  margin-top: ${({ theme }) => theme.space[0]};
  margin-bottom: ${p => (p.margin ? p.theme.space[3] : 5)}px;
  font-size: ${p => (p.large ? p.theme.fontSizes.m : p.theme.fontSizes.s)};
  &:last-child {
    margin-bottom: ${({ theme }) => theme.space[0]};
  }
`;
