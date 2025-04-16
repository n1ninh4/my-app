import React from 'react';  
import { FlatList, View } from 'react-native';  
import { Card, Title } from 'react-native-paper';  

const jogadores = [  
  { id: "1", nome: "Alisson Becker", numero: 1, imagem: "https://i.pinimg.com/236x/84/3c/06/843c0651ecf903f931396b72c72c5e2b.jpg" },  
  { id: "2", nome: "Marquinhos", numero: 3, imagem: "https://i.pinimg.com/236x/90/3b/70/903b70b58914d9337cb32afaef034e8e.jpg" },  
  { id: "3", nome: "Thiago Silva", numero: 3, imagem: "https://i.pinimg.com/236x/9c/bd/10/9cbd10f351672e3fdeabfa6defce04af.jpg" },  
  { id: "4", nome: "Casemiro", numero: 5, imagem: "https://i.pinimg.com/236x/21/7b/cc/217bcc2f52f63ee2703ad54fd46e5aff.jpg" },  
  { id: "5", nome: "Neymar Jr.", numero: 10, imagem: "https://i.pinimg.com/236x/76/27/45/76274544753a36580c303cce09319bfb.jpg" },  
];  

const JogadorItem = ({ jogador }) => (  
  <Card style={{ marginBottom: 10 }}>  
    <Card.Cover source={{ uri: jogador.imagem }} />  
    <Card.Content>  
      <Title>{jogador.nome} - {jogador.numero}</Title>  
    </Card.Content>  
  </Card>  
);  

const Brasil = () => (  
  <View style={{ padding: 20 }}>  
    <FlatList  
      data={jogadores}  
      renderItem={({ item }) => <JogadorItem jogador={item} />}  
      keyExtractor={item => item.id}  
    />  
  </View>  
);  

export default Brasil;  