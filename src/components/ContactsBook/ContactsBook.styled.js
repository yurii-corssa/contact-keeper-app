import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  margin: 30px auto;
  font-size: 14px;
  color: #333;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 0 10px 0;
`;

export const TitleContacts = styled.h3`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 0 10px 0;
`;

export const ContactsWrapper = styled.div`
  width: 100%;
  margin: 10px auto;
  padding: 10px 20px;
`;
