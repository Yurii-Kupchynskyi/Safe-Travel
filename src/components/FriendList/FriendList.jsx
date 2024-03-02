import { List } from 'components/Profile/Profile.styled';
import { Box, FlexBox } from '../Box';
import PropTypes from 'prop-types';
import { AvatarIMG, ListItem } from './FriendList.styled';

export const FriendList = ({ data }) => {
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
      <FlexBox
        display="flex"
        gap="10px"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        as={List}
      >
        {data.map((item, index) => {
          return (
            <ListItem key={item.id} index={index} isOnline={item.isOnline}>
              <AvatarIMG
                src={item.avatar}
                alt="avatarIMG"
                size="50px"
                mr="10px"
              />
              <h2>{item.name}</h2>
            </ListItem>
          );
        })}
      </FlexBox>
    </Box>
  );
};

FriendList.propTypes = {
  data: PropTypes.array,
};
