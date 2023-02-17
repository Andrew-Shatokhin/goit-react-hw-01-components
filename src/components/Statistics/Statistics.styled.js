import styled from 'styled-components';

export const Section = styled.section`
  width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 17px -7px rgba(0, 0, 0, 0.75);
`;
export const Title = styled.h2`
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  gap: 0;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  color: white;
`;
export const Label = styled.span`
  margin-bottom: 10px;
`;
