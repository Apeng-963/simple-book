import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  top: 56px;
  bottom: 0;
  background: #eeeeee;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  padding-top: 20px;
  background: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  margin: 10px auto;
  line-height: 30px;
  padding: 0 10px;
  color: #777777;
`;

export const Button = styled.div`
  width: 220px;
  height: 30px;
  margin: 10px auto;
  border-radius: 15px;
  background: #3194d0;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  cursor: pointer
`;