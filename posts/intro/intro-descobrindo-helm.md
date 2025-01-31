---
title: "[Intro] - Descobrindo o Helm"
description: "Nesse artigo, vamos explorar o Helm, uma ferramenta que facilita a instalação, atualização e gerenciamento de aplicativos Kubernetes."
publish: true
created_date: 2025-01-29
slug: intro-descobrindo-helm
tags:
  - helm
  - beginner
---

# Visão Geral

Ao falar de Helm podemos começar fazendo uma breve alusão ao comando apt do Linux. Assim como o apt permite que os usuários gerenciem pacotes de software no sistema operacional Linux, o Helm permite que os usuários gerenciem pacotes de aplicativos em Kubernetes.

O Helm surge como resposta a um problema comum no gerenciamento de aplicativos em Kubernetes: a necessidade de lidar com a complexidade de vários arquivos YAML para definir um aplicativo.

# Helm Chart

Veja bem, para implantar aplicativos no Kubernetes o usuário precisa criar arquivos YAML para definir cada recurso necessário, como pods, serviços, configmaps e secrets. Além disso, sempre que houver alterações no aplicativo ou em suas dependências é necessário atualizar os arquivos YAML. A questão aqui é que sem o Helm todo esse trabalho é feito de forma manual, tornando o processo complexo, demorado e mais suscetível a erros.

Com o Helm, o usuário não precisa criar e gerenciar manualmente todos os arquivos YAML necessários para definir e implantar um aplicativo em Kubernetes. Em vez disso, o usuário pode criar um pacote chamado chart, que contém todos os arquivos YAML descrevendo os recursos do Kubernetes necessários para implantar o aplicativo. O chart também inclui um arquivo values.yaml que permite que os usuários personalizem a instalação do aplicativo de acordo com suas necessidades, o que nos leva ao template file.

# Template file

Um template file no Helm é um arquivo YAML usado para definir como os recursos do Kubernetes são implantados para um aplicativo específico. Os templates incluem valores padrão que podem ser substituídos pelos usuários com valores personalizados descritos no arquivo values.yaml citado anteriormente. Vamos ver um exemplo.

Digamos que existam vários microserviços dentro de um cluster Kubernetes, porém cada um com seus próprios metadados. Sem o uso do Helm seria necessário um arquivo de configuração YAML para cada um, mas com o uso do recurso de template do Helm é possível que tenhamos apenas um template de configuração para todos esses microserviços buscando seus valores próprios em um arquivo externo de configuração.

# Estrutura de pasta padrão

- Chart.yaml: Esse arquivo contém os metadados do chart, informações como nome, versão e descrição.
- charts/: Este diretório contém os charts dependências que o chart usa. Cada dependência é armazenada em seu próprio diretório.
- templates/: Este diretório contém os arquivos YAML que descrevem os recursos do Kubernetes que serão criados a partir do chart.
- values.yaml: Este arquivo contém os valores padrão do Helm para o chart. Os valores podem ser substituídos ao implantar o chart.

# Repositórios

Os repositórios podem ser públicos ou privados, e existem vários repositórios públicos disponíveis, como o repositório oficial do Helm, que contém uma grande quantidade de charts. No entanto, se você tiver um aplicativo personalizado, pode criar um repositório privado para armazenar e compartilhar seus charts internamente.

Os repositórios públicos do Helm são uma ótima maneira de encontrar e usar charts para aplicativos Kubernetes, permitindo que os usuários aproveitem a grande variedade de charts disponíveis e acelerem a implantação de aplicativos.

# Caso de uso

Vamos pensar no deploy de uma mesma aplicação em diferentes ambientes, como desenvolvimento, teste e produção. Para fazer isso é necessário subir cada arquivo de configuração YAML dos recursos em cada cluster Kubernetes, o que acaba se tornando um trabalho demasiadamente repetitivo. Utilizando o Helm podemos realizar a tarefa através da seguinte abordagem: no lugar de subir separadamente os arquivos YAML em cada cluster Kubernetes, podemos empacotar todos esses arquivos em um chart e usá-lo para fazer o redeploy da aplicação em diferentes clusters Kubernetes provisionando os ambientes desejados com mais rapidez e eficiência.
