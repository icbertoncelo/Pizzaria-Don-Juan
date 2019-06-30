import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #eee;
`;

export const ProductList = styled.FlatList`
  margin: 0 20px;
  border-radius: 7px;
`;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  padding: 15px 15px;
  width: 100%;
  border-radius: 7px;
  margin-bottom: 10px;
  elevation: 3px;
  background-color: #fff;
`;

export const ProductImage = styled.Image`
  margin-right: 15px;
  border-radius: 7px;
  width: 100px;
  height: 100px;
`;

export const ProductData = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  color: #666;
`;

export const ProductDescription = styled.Text`
  font-size: 14px;
  color: #999;
`;
