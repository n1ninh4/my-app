import React from 'react';  
import { FlatList, View } from 'react-native';  
import { Card, Title, Paragraph } from 'react-native-paper';  

const estadios = [  
  { id: 1, nome: "Lusail Iconic Stadium", cidade: "Lusail", capacidade: 80000, imagem: "https://i.pinimg.com/1200x/80/3d/0f/803d0f07020dac1ac638e6dfcc7a0607.jpg" },  
  { id: 2, nome: "Al Bayt Stadium", cidade: "Al Khor", capacidade: 60000, imagem: "https://i.pinimg.com/1200x/d9/87/a5/d987a5f490e32083c094839e78e97e67.jpg" },  
  { id: 3, nome: "Stadium 974", cidade: "Doha", capacidade: 40000, imagem: "https://i.pinimg.com/1200x/63/47/7b/63477b146143956117fdeb6d06b7b2f6.jpg" },  
  // Adicione mais estádios conforme necessário  
];  

const EstadioItem = ({ estadio }) => (  
  <Card>  
    <Card.Cover source={{ uri: estadio.imagem }} />  
    <Card.Content>  
      <Title>{estadio.nome}</Title>  
      <Paragraph>Cidade: {estadio.cidade}</Paragraph>  
      <Paragraph>Capacidade: {estadio.capacidade}</Paragraph>  
    </Card.Content>  
  </Card>  
);  

const Estadios = () => (  
  <View>  
    <FlatList  
      data={estadios}  
      renderItem={({ item }) => <EstadioItem estadio={item} />}  
      keyExtractor={(item) => item.id.toString()}  
    />  
  </View>  
);  

export default Estadios;  