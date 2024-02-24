# todo-list
my first project from scratch, from todo list containing frontend and backend


    1. Inicialização do Repositório:
        ◦ Utilize o comando gh repo create para criar um novo repositório no GitHub.
        ◦ Execute npm init para inicializar um novo projeto Node.js.
    2. Criação do Branch Backend:
        ◦ Crie um novo branch chamado 'backend' com o comando git checkout -b 'backend'.
        ◦ Execute npm init para inicializar um novo projeto Node.js.
    3. Configuração do TypeScript:
        ◦ Instale o compilador TypeScript com npm i typescript.
        ◦ Inicialize o arquivo de configuração do TypeScript com npx tsc --init.
    4. Instalação do Framework Express:
        ◦ Adicione o framework Express ao projeto com npm i express.
    5. Implementação da Primeira Rota:
        ◦ Implemente a lógica da primeira rota do servidor Express.
    6. Configuração do Script de Inicialização:
        ◦ Configure o script "start" no arquivo package.json para executar o servidor.
    7. Transformação da Aplicação em Classe:
        ◦ Refatore o código para transformar a aplicação em uma classe orientada a objetos.
    8. Refatoração do Servidor para Rotas:
        ◦ Reorganize o código para separar a lógica das rotas do servidor principal.
    9. Criação da Rota "Todo":
        ◦ Adicione uma nova rota chamada "todo" ao servidor Express.
    10. Instalação dos Bancos de Dados:
        ◦ Instale os pacotes mysql2 e sqlite3 para interagir com bancos de dados.
    11. Implementação de Rota Sem ORM:
        ◦ Implemente uma rota sem utilizar um ORM para manipular dados.
    12. Instalação dos ORMs Sequelize e Prisma:
        ◦ Adicione os pacotes sequelize e prisma para facilitar a interação com o banco de dados.





Item 3: 
Para configurar o TypeScript adequadamente em seu projeto Node.js, é necessário atentar para os seguintes itens:
    1. rootDir: Especifica o diretório raiz do projeto, onde o TypeScript procurará por arquivos para compilar.
    1. outDir: Define o diretório de saída dos arquivos compilados pelo TypeScript.
    2. include: Determina quais arquivos devem ser incluídos no processo de compilação do TypeScript.
    3. exclude: Especifica os arquivos que devem ser excluídos do processo de compilação, evitando que sejam compilados.
    4. module: Define o sistema de módulos a ser utilizado, como "CommonJS" ou "ESNext".
    5. target: Determina a versão do ECMAScript que o código TypeScript deve ser compilado, como "ES5", "ES2016", etc.
    6. strict mode: Habilita um conjunto de verificações adicionais para melhorar a qualidade e segurança do código TypeScript. Algumas opções relevantes são:
        ◦ strictNullChecks: Impede que valores nulos ou indefinidos sejam atribuídos a tipos que não os aceitam explicitamente, reduzindo erros relacionados a valores nulos.
        ◦ strictFunctionTypes: Garante que as assinaturas de funções sejam mais estritas, evitando atribuições incompatíveis.
        ◦ strictBindCallApply: Reforça as regras de chamadas de função, promovendo uma tipagem mais precisa.
Configurar cada um desses itens corretamente garantirá que o TypeScript seja integrado ao projeto de forma eficaz, permitindo o uso de tipagem estática e outras funcionalidades avançadas da linguagem, enquanto se alinha com as necessidades do ambiente Node.js em que está sendo utilizado.




Item7:

Ao transformar a aplicação em uma classe, estamos adotando uma abordagem mais orientada a objetos, o que pode trazer benefícios em termos de organização e reutilização de código. Isso envolve encapsular funcionalidades relacionadas em métodos e propriedades dentro da classe, seguindo os princípios de coesão e baixo acoplamento. Essa transformação pode facilitar a manutenção e extensão do código, além de possibilitar a criação de instâncias da classe em diferentes partes da aplicação, tornando-a mais modular e flexível.


Item 11:

Implementar uma rota sem utilizar um ORM pode ser uma abordagem direta para manipular dados no contexto de um projeto Node.js. Nesse cenário, você pode optar por utilizar consultas diretas ao banco de dados, seja SQL puro ou utilizando bibliotecas como o mysql2 ou sqlite3. Isso pode oferecer maior controle sobre as consultas e operações no banco de dados, embora exija mais trabalho manual para gerenciar as consultas e mapear os resultados. É uma abordagem válida em projetos mais simples ou quando se deseja evitar a complexidade de um ORM.