import styled from '@emotion/styled';

export const Row = styled.tr`
margin: 10;
color: silver;
&:nth-child(2n + 1) {
    background-color: grey;
  }`;

  export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;