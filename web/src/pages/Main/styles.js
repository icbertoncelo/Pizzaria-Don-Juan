import styled from 'styled-components';

export const Header = styled.header`
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

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  h1 {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:last-child {
    margin-bottom: 20px;
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 18px;
  }

  span {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
  }

  strong {
    font-size: 14px;
    margin-top: 5px;
    font-weight: bold;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Item = styled.div`
  display: flex;
  width: 49%;
  border: 1px solid #ddd;
  border-radius: 7px;
  padding: 5px;
  margin-top: 10px;

  img {
    height: 100px;
    width: 100px;
    margin-right: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
