import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 17px -7px rgba(0, 0, 0, 0.75);
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  margin-right: 20px;
  width: 48px;
`;
