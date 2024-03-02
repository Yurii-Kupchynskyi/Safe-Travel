import { Box } from '../Box';
import PropTypes from 'prop-types';
import { List, ListItem, Title, Text } from './Statistic.styled';

export const Statistic = ({ title, statData }) => {
  const randomColors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#6ccd74',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
  ];
  return (
    <Box
      width="30%"
      minWidth="350px"
      mx="auto"
      mb={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {title && (
        <Box
          border="standart"
          borderRadius="normal"
          overflow="hidden"
          width="100%"
          display="flex"
          justifyContent="center"
          py={3}
          bg="background"
        >
          <Title>{title}</Title>
        </Box>
      )}

      <>
        <List>
          {statData.map((item, index) => {
            return (
              <ListItem key={item.id} index={index} color={randomColors[index]}>
                <Text margin>{item.label}</Text>
                <Text large>{item.percentage}%</Text>
              </ListItem>
            );
          })}
        </List>
      </>
    </Box>
  );
};
Statistic.propTypes = {
  title: PropTypes.string,
  statData: PropTypes.array,
};
