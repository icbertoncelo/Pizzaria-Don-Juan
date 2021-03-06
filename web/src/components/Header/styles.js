import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  justify-content: space-around;
  background-color: #07162c;
  color: #fff;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 17px;
  }

  strong {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  border-right: 1px solid #999;

  strong {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }

  button {
    background: transparent;
    border: 0;
    color: #999;
    text-align: right;

    &:hover {
      color: #fff;
    }
  }
`;