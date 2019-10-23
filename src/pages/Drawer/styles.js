import styled from 'styled-components';

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: #4a678f;
`;

export const Container = styled.View`
  flex: 1;
`;

export const SafeContainer = styled.SafeAreaView``;

export const DrawerHeaderContainer = styled.View`
  background-color: #06234c;
  align-items: center;
  padding: 0 10%;
`;

export const Image = styled.Image`
  margin-top: 10px;
  justify-content: center;
  align-self: center;
  align-items: center;
  border-color: #4a678f;
  border-width: 2;
  height: 160px;
  width: 160px;
  border-radius: 80px;
`;

export const StudentName = styled.Text`
  color: #fff;
  margin: 10px 0 10px 0;
`;

export const StudentCourse = styled.Text`
  color: #fff;
  margin: 0 0 20px 0;
`;

export const ContextButton = styled.TouchableOpacity`
  margin-bottom: 20px;
  background-color: #ddd;
  padding: 5px 10px 5px 10px;
  border-radius: 5;
`;

export const ContextLabel = styled.Text`
  color: #06234c;
  font-size: 16;
`;

export const DrawerList = styled.FlatList``;

export const DrawerItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.5px;
  border-color: #fff;
  padding-left: 10px;
  background-color: ${props => props.color};
`;

export const DrawerItemImage = styled.Image`
  height: 30px;
  width: 30px;
`;

export const DrawerItemText = styled.Text`
  color: ${props => props.color};
  font-weight: bold;
  margin: 10px 15px 10px 15px;
`;

export const LeaveButton = styled.TouchableOpacity`
  flex-direction: row;
  padding-left: 10px;
  align-items: center;
`;

export const LeaveLabel = styled.Text`
  margin: 10px 15px 10px 15px;
  font-weight: bold;
  color: #fff;
`;
