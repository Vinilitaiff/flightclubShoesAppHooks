import styled from 'styled-components/native';
import colors from '../../styles/global';

import logo from '../../assets/images/logo.png';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #141418;
  height: 80px;
`;

export const LogoBtn = styled.TouchableWithoutFeedback`
  width: 220px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 220px;
  height: 30px;
`;

export const CartBtn = styled.TouchableOpacity`
  position: relative;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
