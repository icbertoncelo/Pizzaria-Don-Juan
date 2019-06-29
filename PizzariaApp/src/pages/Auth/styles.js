import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Transparency = styled(LinearGradient)`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Form = styled.View`
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const LogoImage = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: 25px;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 42px;
  border: 0;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 0 20px;
  font-size: 16px;
  background-color: #fff;
  color: #8f8f8f;
`;
export const AccessButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: 42px;
  border: 0;
  border-radius: 7px;
  background: #e64c4c;
  justify-content: center;
  align-items: center;
`;
export const AccessText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const AccountButton = styled.TouchableOpacity`
  background: transparent;
  margin-top: 20px;
`;
