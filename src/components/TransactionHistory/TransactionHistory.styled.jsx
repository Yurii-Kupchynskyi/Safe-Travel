import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
`;

export const TableData = styled.td`
  border: 1px solid black;
  height: 35px;
  text-align: center;
`;
export const ThData = styled.th`
  border: 1px solid black;
  height: 35px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: white;
  background-color: #13bae0;
`;
export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${p => p.theme.colors.background};
  }
`;
export const TableBody = styled.tbody``;
