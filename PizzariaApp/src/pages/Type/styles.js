import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

export const TypeList = styled.FlatList.attrs({
  columnWrapperStyle: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
})`
  margin: 0 20px;
  border-radius: 7px;
`;

export const TypeComponent = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  padding: 15px 15px;
  width: 48%;
  border-radius: 7px;
  margin-bottom: 10px;
  elevation: 3px;
  background-color: #fff;
`;

export const TypeImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const TypeName = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;
