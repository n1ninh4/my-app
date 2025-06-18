App de Receitas - React Native
Este aplicativo foi desenvolvido como parte da avaliação da disciplina Programação para Dispositivos Móveis (IESB) . O objetivo é fornecer uma experiência completa de cadastro e consulta de receitas, unindo dados locais e de uma API externa.

Funcionalidades
Autenticação

Cadastro com validação (Formik + Yup)
Login com verificação via AsyncStorage
Edição de perfil com alteração de imagem
CRUD de Receitas

Criar, listar, editar e excluir receitas locais
Armazenamento persistente com AsyncStorage
Busca via API Externa

Integração com o TheMealDB
Lista e detalhes de receitas da comunidade
Favoritos

Marcar e desmarcar receitas como favoritas
Visualização unificada de favoritos locais e da API
Projeto

Interface responsiva com React Native Paper
Estilo moderno baseado na paleta do app TudoGostoso (#E65100, #FF9800)
Telas e Componentes
LoginScreen– Acesso com validação
CadastroScreen– Criação de conta com campos obrigatórios
ReceitaLista– Lista de receitas locais
ReceitaForm– Cadastro e edição
ReceitaDetalhes– Exibição completa de uma receita local
BuscarReceitasAPI– Busca por receitas públicas via API
ReceitaApiDetalhes– Exibição dos dados da API (ingredientes, preparo e vídeo)
Favoritos– Lista de receitas favoritas (locais + API)
PerfilScreen– Perfil com edição de dados e foto
Tecnologias Usadas
React Native
Navegação React (Pilha + Abas Inferiores)
Papel nativo do React
Axios
Armazenamento assíncrono
Formik + Sim
Expo ImagePicker
Requisitos Atendidos da Prova
Critério	Atendido
CRUD com 3 cadastros e 5 campos	✅
Ganchos: useState, useEffect, etc.	✅
Armazenamento assíncrono	✅
Consumo de API externa (TheMealDB)	✅
Uso da biblioteca de requisições (Axios)	✅
Formulário com validação (Formik + Yup)	✅
Funcionalidade extra (favoritos, imagem, perfil, vídeo YouTube)	✅
Design Responsivo e Estilizado	✅
Como Executar
Clone ou repositório:
git clone https://github.com/n1ninh4/my-app.git
cd my-app/receitas
Instalar as dependências:
npm install
Início do projeto com Expo:
npx expo start
Abra o aplicativo usando o Expo Go no seu celular ou emulador.

Estrutura do Projeto
receitas/
├── App.js
├── index.js
├── images/
├── assets/
├── screens/
│   ├── LoginScreen.js
│   ├── CadastroScreen.js
│   ├── ReceitaLista.js
│   ├── ReceitaForm.js
│   ├── ReceitaDetalhes.js
│   ├── BuscarReceitasAPI.js
│   ├── ReceitaApiDetalhes.js
│   ├── Favoritos.js
│   └── PerfilScreen.js
Conclusão
Este aplicativo foi desenvolvido com foco em boas práticas de desenvolvimento mobile, incluindo persistência de dados, integração com APIs externas, navegação moderna e uma interface amigável ao usuário.
