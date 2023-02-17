import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  padding-top: 10px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 10px 10px 17px -7px rgba(0, 0, 0, 0.75);
`;
export const Description = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  height: 240px;
  width: 100%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
`;
export const TagLocation = styled.p`
  color: rgb(52, 73, 94);
`;

export const Stats = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: rgb(234, 237, 237);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
`;

export const Label = styled.span`
  font-weight: 400;
`;

export const Quantity = styled.span`
  font-weight: 700;
  margin-top: 5px;
`;
