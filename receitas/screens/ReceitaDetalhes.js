import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Linking, Alert, View } from 'react-native';
import { Card, Title, Paragraph, Button, Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ReceitaDetalhes({ route, navigation }) {
  const { receita } = route.params;
  const [favoritado, setFavoritado] = useState(false);

  useEffect(() => {
    verificarFavorito();
  }, []);

  async function verificarFavorito() {
    try {
      if (receita.origem === 'api') {
        // Verificar no favoritosAPI
        const dadosApi = await AsyncStorage.getItem('favoritosAPI');
        const favoritosApi = dadosApi ? JSON.parse(dadosApi) : [];
        const achou = favoritosApi.some(r => r.idMeal === receita.idMeal);
        setFavoritado(achou);
      } else {
        // Verificar no receitas locais
        const dadosLocais = await AsyncStorage.getItem('receitas');
        const locais = dadosLocais ? JSON.parse(dadosLocais) : [];
        const achou = locais.some(r => r.id === receita.id && r.favorito);
        setFavoritado(achou);
      }
    } catch (error) {
      console.log('Erro ao verificar favoritos:', error);
    }
  }

  async function toggleFavorito() {
    try {
      if (receita.origem === 'api') {
        const dadosApi = await AsyncStorage.getItem('favoritosAPI');
        let favoritosApi = dadosApi ? JSON.parse(dadosApi) : [];

        if (favoritado) {
          favoritosApi = favoritosApi.filter(r => r.idMeal !== receita.idMeal);
          Alert.alert('Removido', 'Receita removida dos favoritos.');
        } else {
          favoritosApi.push(receita);
          Alert.alert('Adicionado', 'Receita adicionada aos favoritos.');
        }

        await AsyncStorage.setItem('favoritosAPI', JSON.stringify(favoritosApi));
      } else {
        const dadosLocais = await AsyncStorage.getItem('receitas');
        let locais = dadosLocais ? JSON.parse(dadosLocais) : [];

        locais = locais.map(r => {
          if (r.id === receita.id) {
            r.favorito = !favoritado;
          }
          return r;
        });

        await AsyncStorage.setItem('receitas', JSON.stringify(locais));

        Alert.alert(
          favoritado ? 'Removido' : 'Adicionado',
          `Receita ${favoritado ? 'removida' : 'adicionada'} dos favoritos.`
        );
      }

      setFavoritado(!favoritado);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar os favoritos.');
    }
  }

  const ingredientes = receita.ingredientes
    ? receita.ingredientes.split('\n').filter(i => i.trim() !== '')
    : [];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Card style={styles.card}>
        {receita.imagem && (
          <Card.Cover source={{ uri: receita.imagem }} style={styles.capa} />
        )}
        <Card.Content>
          <View style={styles.header}>
            <Title style={styles.titulo}>{receita.titulo}</Title>
            <Button
              mode={favoritado ? 'contained' : 'outlined'}
              buttonColor="#E65100"
              textColor="#fff"
              onPress={toggleFavorito}
              style={styles.botaoFavorito}
            >
              {favoritado ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </Button>
          </View>

          <Divider style={styles.divider} />

          <Section title="Ingredientes">
            {ingredientes.length > 0 ? (
              ingredientes.map((item, index) => (
                <Paragraph key={index} style={styles.paragrafo}>
                  • {item.trim()}
                </Paragraph>
              ))
            ) : (
              <Paragraph style={styles.paragrafo}>Sem ingredientes listados.</Paragraph>
            )}
          </Section>

          <Divider style={styles.divider} />

          <Section title="Modo de Preparo">
            <Paragraph style={styles.paragrafo}>
              {receita.modoPreparo || 'Modo de preparo não informado.'}
            </Paragraph>
          </Section>

          {receita.tempoPreparo && (
            <>
              <Divider style={styles.divider} />
              <Section title="Tempo de Preparo">
                <Paragraph style={[styles.paragrafo, styles.tempo]}>
                  {receita.tempoPreparo}
                </Paragraph>
              </Section>
            </>
          )}

          {receita.observacoes && (
            <>
              <Divider style={styles.divider} />
              <Section title="Observações">
                <Paragraph style={styles.paragrafo}>{receita.observacoes}</Paragraph>
              </Section>
            </>
          )}

          {receita.youtube && (
            <>
              <Divider style={styles.divider} />
              <Button
                icon="youtube"
                mode="outlined"
                buttonColor="#E65100"
                textColor="#E65100"
                onPress={() => Linking.openURL(receita.youtube)}
                style={{ marginTop: 10 }}
              >
                Ver vídeo no YouTube
              </Button>
            </>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Title style={styles.subtitulo}>{title}</Title>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 14,
  },
  card: {
    borderRadius: 14,
    elevation: 6,
    shadowColor: '#E65100',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  capa: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: 260,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 18,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '900',
    color: '#E65100',
    flex: 1,
    flexWrap: 'wrap',
  },
  botaoFavorito: {
    minWidth: 160,
  },
  divider: {
    marginVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#FFE0B2',
  },
  section: {
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E65100',
    marginBottom: 6,
  },
  paragrafo: {
    fontSize: 17,
    color: '#4E4E4E',
    lineHeight: 26,
  },
  tempo: {
    color: '#FF9800',
    fontWeight: '700',
  },
});
