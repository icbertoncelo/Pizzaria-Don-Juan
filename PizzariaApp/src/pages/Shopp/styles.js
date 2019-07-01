import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #eee;
`;

export const ItemList = styled.FlatList`
  margin: 0 20px;
  border-radius: 7px;
  flex-grow: 0;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 15px;
  width: 100%;
  border-radius: 7px;
  margin-bottom: 10px;
  elevation: 3px;
  background-color: #fff;
`;

export const ItemImage = styled.Image`
  margin-right: 15px;
  border-radius: 7px;
  width: 100px;
  height: 100px;
`;

export const ItemData = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ItemName = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const ItemSize = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  color: #999;
`;

export const ItemPrice = styled.Text`
  margin-top: 2px;
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const ItemDelete = styled.TouchableOpacity``;

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 20px;
`;

export const NewItemButton = styled.TouchableOpacity`
  background-color: #ddd;
  border-radius: 50px;
  padding: 5px;
  elevation: 3px;
`;

export const ConfirmOrderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 200px;
  height: 42px;
  border: 0;
  border-radius: 20px;
  background: #e64c4c;
  justify-content: center;
  align-items: center;
  elevation: 3px;
`;

export const ConfirmText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
