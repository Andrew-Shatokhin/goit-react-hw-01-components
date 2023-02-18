import styled from 'styled-components';

export const Table = styled.table`
  table-layout: auto;
  width: 900px;
  margin-bottom: 20px;

  box-shadow: 10px 10px 17px -7px rgba(0, 0, 0, 0.75);
`;
export const TableHead = styled.tr`
  color: white;
  text-transform: uppercase;
  background-color: rgb(32, 200, 217);
`;

export const TableTh = styled.th`
  font-weight: bold;
  padding: 5px;
`;

export const TableTd = styled.td`
  padding: 5px 10px;

  text-align: center;
  text-transform: capitalize;
`;
export const TableTr = styled.tr`
  :nth-of-type(even) {
    background-color: rgb(171, 178, 185);
  }
`;
