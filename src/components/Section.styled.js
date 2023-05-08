import styled from '@emotion/styled';

export const Section = styled.section`
  padding-botton: 35px;
  padding-left: 35px;
`;


export const Title = styled.h2`
  width: 250px;
  left: 408px;
  top: 163px;

  font-family: Caviar Dreams;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  text-align: center;

  color: #2b2b2b;
`;



export const TextP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 15px;
  color: #2b2b2b;
`;

export const Number = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 15px;
  color: #ff2f40;
`;

export const ButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  margin-right: 15px;
  margin-top: 30px;
  width: 277px;
  height: 56px;
  left: 517px;
  top: 1738px;
  cursor: pointer;
  background: #f5f5fa;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(72, 121, 150, 0.1),
    5px 5px 10px rgba(72, 121, 150, 0.25), -5px -5px 10px #ffffff;
  border-radius: 30.5px;
  border: transparent;
  &:hover {
    background: red;
  }
`;
