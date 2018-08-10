// @flow
import React from 'react';
import styled from 'styled-components';

const ItemCard = ({ item }: any) => (
  <Container>
    <ImageWrapper>
      <Image src={item.user.profile_image_url} alt="profile image" />
    </ImageWrapper>
    <ContentWrapper>
      <UserId>{item.user.id}</UserId>
      {item.user.name && <UserName>{item.user.name}</UserName>}
      {item.user.description && (
        <Description>{item.user.description}</Description>
      )}
      <LinkContainer>
        <Link href={item.url}>
          <LinkTitle>{item.title}</LinkTitle>
        </Link>
        <TextWrapper>
          <Text>{item.body}</Text>
        </TextWrapper>
      </LinkContainer>
    </ContentWrapper>
  </Container>
);

/* styled-components */
const Container = styled.div`
  max-width: 400px;
  padding: 16px;
  margin: 16px auto;
  border-radius: 2px;
  background: #d1efd1;
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%
  margin: 0 auto;
  border: solid 10px #fff;
`;

const ContentWrapper = styled.div`
  background: #fff;
  border-radius: 4px;
`;

const UserId = styled.div`
  font-weight: 600;
  color: #374046;
  padding-top: 8px;
  font-size: 16px;
`;

const UserName = styled.div`
  font-weight: 500;
  color: #374046;
  padding-top: 8px;
  font-size: 16px;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 300;
  padding-top: 8px;
`;

const LinkContainer = styled.div`
  padding-top: 16px;
`;

const Link = styled.a`
  color: #e8d0a9;
`;

const LinkTitle = styled.div`
  &:hover {
    color: #f5a41f;
  }
`;

const TextWrapper = styled.div`
  margin: 4px;
`;

const Text = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default ItemCard;
