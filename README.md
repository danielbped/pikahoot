# Projeto [Trivia React Redux](https://github.com/tryber/sd-012-project-trivia-react-redux/pull/78)
  - Módulo 2: Desenvolvimento Front-end
  - Bloco 17: Projeto Jogo de  Trivia (Desenvolvido em equipe)

  - Trata-se de um jogo de perguntas e respostas, composto por 5 perguntas de temas aleatórios, de verdadeiro ou falso, ou múltipla escolha.
  - Ferramentas utilizadas:
    - ReactJS
    - Redux
    - Styled Components
  - [API utilizada](https://opentdb.com/api_config.php)

### Como instalar
1 - Abra o terminal e crie um diretório de sua preferência com o comando **mkdir**:
  
    mkdir projeto-Pikahoot
    
  2 - Entre no diretório que acabou de criar e depois clone o projeto com o comando **git clone**:
  
    cd projeto-Pikahoot
    git clone git@github.com:danielbped/mani-deezer.git
    cd Pikahoot
    
  3 - Para o projeto funcionar na sua máquia, será necessário instalar suas dependências, para isso, utilize **npm install**:
  
    npm install
    
  4 - Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm start**:
  
    npm start

### Testes unitários (RTL)
- [x] Página de Login
- [ ] Página de Questões
- [ ] Página de Feedback
- [ ] Página de Erro
- [ ] Página de Ranking
- [ ] Página de Configurações

### Resultado
<h1 align="center">Página de Login</h1>
 <div align="center">
  <img src = "/gifs/LoginMob.gif" width=250 />
 </div>
 
 <h1 align="center">Página de configurações</h1>
 <div align="center">
  <img align="center" src = "/gifs/SettingsGif.gif" width=250 />
 </div>
 
 <h1 align="center">Página de erro</h1>
 <div align="center">
  <img src = "/gifs/ErrorMob.gif" width=250 />
 </div>
 
 <h1 align="center">Páginas de feedback</h1>
 <div align="center">
   <img src = "/gifs/GoodScoreMob.gif" width=250/>
   <img src = "/gifs/BadScoreMob.gif" width=250 />
 </div>
 
### Requisitos
- [x] Crie a tela de login, onde a pessoa que joga deve preencher as informações para iniciar
- [x] Crie o botão de iniciar o jogo
- [x] Crie um botão que leva a pessoa para tela de configuração
- [x] Crie um header que deve conter as informações da pessoa jogadora
- [x] Crie a página de jogo que deve conter as informações relacionadas à pergunta
- [x] Desenvolva o jogo onde só deve ser possível escolher uma resposta correta por pergunta
- [x] Desenvolva o estilo que, ao clicar em uma resposta, a correta deve ficar verde e as incorretas, vermelhas
- [x] Desenvolva um timer onde a pessoa que joga tem 30 segundos para responder
- [x] Crie o placar com as seguintes características: Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando
- [x] Crie um botão de "próxima" que apareça após a resposta ser dada
- [x] Desenvolva o jogo de forma que a pessoa que joga deve responder 5 perguntas no total
- [x] Desenvolva o header de feedback que deve conter as informações da pessoa jogadora
- [x] Crie a mensagem de feedback para ser exibida a pessoa usuária
- [x] Exiba as informações relacionadas aos resultados obtidos para a pessoa usuária
- [x] Crie a opção para a pessoa jogadora poder jogar novamente
- [x] Crie a opção para a pessoa jogadora poder visualizar a tela de ranking
- [x] Crie a tela de ranking
- [x] Crie um botão para ir ao início
### Requisitos bônus
- [x] Ao mudar o valor do dropdown categoria, apenas perguntas da categoria selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave category no retorno da API;
- [x] Ao mudar o valor do dropdown dificuldade, apenas perguntas da dificuldade selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave difficulty no retorno da API;
- [x] Ao mudar o valor do dropdown tipo, apenas perguntas do tipo selecionado devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave type no retorno da API.
