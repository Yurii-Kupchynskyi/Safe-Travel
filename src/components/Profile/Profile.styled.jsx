import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  width: 15%;
  min-width: 200px;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 6px 11px 2px rgba(0, 0, 0, 0.75);
`;

export const AvatarIMG = styled.img`
  width: 35%;
  height: 35%;
  border-radius: 50%;
  border: 1px solid gray;
  margin-bottom: ${p => p.theme.space[3]}px;
  background-color: dimgrey;
`;
export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px 10px 0px 0px;
  padding: ${p => p.theme.space[4]}px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.secondary};
  margin-top: 0;
  margin-bottom: ${p => (p.margin ? p.theme.space[3] : 5)}px;

  &:last-child {
    margin-bottom: 0px;
  }
`;
export const MainText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const StatSection = styled(MainSection)`
  padding: 0;
  background-color: rgba(154, 190, 209, 0.3);
  border-radius: 10px;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  height: 70px;
  flex-basis: calc(100% / 3);
  border: ${({ theme }) => theme.borders.thin};

  justify-content: center;
  align-items: center;
  background-color: #f3f6f9;
`;
