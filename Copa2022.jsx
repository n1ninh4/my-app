import React from 'react';  
import { View } from 'react-native';  
import { Card, Title, Paragraph } from 'react-native-paper';  

const Copa2022 = () => {  
  return (  
    <View>  
      <Card>  
        <Card.Cover source={{ uri: 'https://i.pinimg.com/236x/00/63/15/00631561f4895a630508c2b0d0bdb4d1.jpg' }} />  
        <Card.Content>  
          <Title>Copa do Mundo FIFA 2022</Title>  
          <Paragraph>Local: Qatar</Paragraph>  
          <Paragraph>Campeão: Argentina</Paragraph>  
          <Paragraph>Vice-Campeão: França</Paragraph>  
        </Card.Content>  
      </Card>  
    </View>  
  );  
};  

export default Copa2022;  