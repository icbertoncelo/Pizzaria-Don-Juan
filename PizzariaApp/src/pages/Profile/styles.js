import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #eee;
`;

export const OrderList = styled.FlatList`
  margin: 0 20px;
  border-radius: 7px;
`;

export const Order = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 15px 15px;
  width: 100%;
  border-radius: 7px;
  margin-bottom: 10px;
  elevation: 3px;
  background-color: #fff;
`;

export const OrderNumber = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const OrderTime = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  color: #999;
`;

export const OrderPrice = styled.Text`
  margin-top: 2px;
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;
