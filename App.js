import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';   
import Copa2022 from './Copa2022';  
import Estadios from './Estadios';  
import Brasil from './Brasil';  
import Estatisticas from './Estatisticas';  

const Tab = createBottomTabNavigator();  

export default function App() {  
  return (  
    <NavigationContainer>  
      <Tab.Navigator>  
        <Tab.Screen name="Copa 2022" component={Copa2022} />  
        <Tab.Screen name="Estádios" component={Estadios} />  
        <Tab.Screen name="Brasil" component={Brasil} />  
        <Tab.Screen name="Estatísticas" component={Estatisticas} />  
      </Tab.Navigator>  
    </NavigationContainer>  
  );  
}  