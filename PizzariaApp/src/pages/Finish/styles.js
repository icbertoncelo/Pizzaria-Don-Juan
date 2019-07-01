import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #eee;
`;

export const Form = styled.View`
  margin: 0 20px;
  flex-grow: 0;
`;

export const Input = styled.TextInput`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '42px'};
  border: 0;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 0 20px;
  font-size: 16px;
  background-color: #fff;
  color: #8f8f8f;
  elevation: 3px;
`;

export const StreetNumber = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const FinishOrderButton = styled.TouchableOpacity.attrs({
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

export const FinishText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
