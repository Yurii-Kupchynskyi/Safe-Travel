import { Box } from '../Box';
import PropTypes from 'prop-types';
import {
  TableData,
  ThData,
  TransactionTable,
  TableBody,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box
      width="50%"
      minWidth="350px"
      mx="auto"
      mb={5}
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      border="standart"
    >
      <TransactionTable>
        <thead>
          <tr>
            <ThData>Type</ThData>
            <ThData>Amount</ThData>
            <ThData>Currency</ThData>
          </tr>
        </thead>

        <TableBody>
          {transactions.map((transaction, index) => {
            return (
              <TableRow key={transaction.id}>
                <TableData>{transaction.type}</TableData>
                <TableData>{transaction.amount}</TableData>
                <TableData>{transaction.currency}</TableData>
              </TableRow>
            );
          })}
        </TableBody>
      </TransactionTable>
    </Box>
  );
};

TransactionHistory.propTypes = {
  transaction: PropTypes.array,
};
