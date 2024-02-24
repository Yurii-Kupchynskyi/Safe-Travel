import PropTypes from 'prop-types';
import {
  AvatarIMG,
  MainInfo,
  MainSection,
  MainText,
  StatSection,
  Text,
  List,
  Item,
  Wrapper,
} from './Profile.styled';

export const Profile = userData => {
  const { avatar, username, tag, location, stats } = userData;
  const statKeys = Object.keys(stats);
  return (
    <Wrapper>
      <MainSection>
        <AvatarIMG src={avatar} alt="avatarIMG" />
        <MainInfo>
          <MainText margin>{username}</MainText>
          <Text margin>{tag}</Text>
          <Text>{location}</Text>
        </MainInfo>
      </MainSection>
      <StatSection>
        <List>
          <Item>
            <Text>{statKeys[0]}</Text>
            <MainText>{stats.followers}</MainText>
          </Item>
          <Item>
            <Text>{statKeys[1]}</Text>
            <MainText>{stats.views}</MainText>
          </Item>
          <Item>
            <Text>{statKeys[2]}</Text>
            <MainText>{stats.likes}</MainText>
          </Item>
        </List>
      </StatSection>
    </Wrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};
