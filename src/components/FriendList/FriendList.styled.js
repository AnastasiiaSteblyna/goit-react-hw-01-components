import styled from '@emotion/styled';

export const Status = styled.span`
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 50%;
  background-color: ${p => {
    switch (p.eventType) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'blue';
    }
  }};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;
