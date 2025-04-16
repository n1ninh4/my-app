import React from 'react';  
import { View } from 'react-native';  
import { Card, Title, Paragraph } from 'react-native-paper';  

const estatisticas = {  
  totalPublico: 3404252,  
  totalJogos: 64,  
  totalGols: 172,  
};  

const Estatisticas = () => (  
  <View style={{ padding: 20 }}>  
    <Card>  
      <Card.Content>  
        <Title>Estatísticas da Copa</Title>  
        <Paragraph>Total de Gols: {estatisticas.totalGols}</Paragraph>  
        <Paragraph>Total de Público: {estatisticas.totalPublico}</Paragraph>  
        <Paragraph>Total de Jogos: {estatisticas.totalJogos}</Paragraph>  
      </Card.Content>  
    </Card>  
  </View>  
);  

export default Estatisticas;  