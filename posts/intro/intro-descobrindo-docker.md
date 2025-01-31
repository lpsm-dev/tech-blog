---
title: "[Intro] - Descobrindo o Docker"
description: "Nesse artigo, vamos explorar o Docker, uma ferramenta de código aberto que facilita a criação, implantação e execução de aplicativos de containers."
publish: true
created_date: 2025-01-29
slug: intro-descobrindo-docker
tags:
  - docker
  - beginner
---

# Visão Geral

Antes do surgimento do Docker, os aplicativos eram desenvolvidos e testados em um ambiente específico, como uma máquina de desenvolvimento ou um servidor de testes, então quando era hora de implantar o aplicativo em produção, muitas vezes ele não funcionava corretamente devido às diferenças entre o ambiente de desenvolvimento e o ambiente de produção. Isso acontecia porque o ambiente de produção poderia ter diferentes versões de bibliotecas, sistemas operacionais ou configurações de rede. Surge então o Docker permitindo que os aplicativos sejam empacotados juntamente com suas dependências em containers, garantindo assim a mesma configuração em qualquer ambiente.

# Docker Engine

Tecnologia para construção e containerização de aplicações. Docker Engine atua como uma aplicação client-server e possui os seguintes componentes:

- Docker Daemon: processo em segundo plano responsável pelo gerenciamento dos containers, imagens, redes e volumes. Realiza tarefas como baixar imagens e iniciar containers, além de fornecer recursos de segurança, tendo como exemplo o controle de acesso e autenticação. O usuário Docker não possui acesso direto ao Docker Daemon, todas as instruções declaradas são intermediadas pela Docker API.
- Docker API: permite que os desenvolvedores interajam com o Docker Daemon. Através da API, é possível automatizar tarefas, integrar o Docker em outras aplicações e criar novos recursos para o Docker.
- Docker CLI: a linha de comando do Docker é a primeira maneira que os usuários possuem para interagir com a tecnologia. Através de comandos como docker run e docker pull, o client encaminha a solicitação para o Daemon que os executa. Obs: o comando docker consome a API do Docker.

# Docker Desktop

Aplicação que provê ao usuário uma interface gráfica para uso do Docker. Ela inclui o Docker Engine e outras ferramentas que permitem criar e gerenciar containers, imagens, redes e volumes.

# Objetos Docker

- Imagem: template de apenas leitura construída pelas instruções de um dockerfile e que serve como base para criação de um container. Ela contém tudo o que é necessário para executar uma aplicação, incluindo o código, bibliotecas e configurações.
- Container: criado pela execução de uma imagem Docker, é um ambiente isolado que terá a aplicação e os processos necessários sendo executados dentro dele. Os containers compartilham o kernel do sistema operacional, mas têm seu próprio espaço de usuário, recursos e configurações isolados. Isso permite que vários containers sejam executados em um único host de forma segura e isolada, sem interferir uns nos outros.

# Dockerfile

Arquivo de texto que contém instruções para construir uma imagem Docker. Cada linha do Dockerfile é uma instrução que descreve uma etapa da construção da imagem, como a adição de arquivos, configurações de ambiente ou instalação de pacotes. É uma forma de documentar e automatizar a criação de imagens Docker, garantindo que as aplicações sejam executadas de forma consistente em diferentes ambientes.

# Repositórios Docker

Os repositórios são locais onde as imagens Docker podem ser armazenadas, gerenciadas e compartilhadas. Existem dois tipos principais de repositórios:

- Repositórios públicos: São repositórios gratuitos e acessíveis a todos, como o Docker Hub, onde qualquer pessoa pode baixar ou compartilhar imagens Docker.
- Repositórios privados: São repositórios restritos que só podem ser acessados por usuários autorizados, como o Docker Trusted Registry. Eles são usados para armazenar e gerenciar imagens confidenciais, como aquelas que contêm dados sensíveis.

# Vantagens

- Portabilidade: As imagens Docker podem ser executadas em qualquer host que tenha o Docker instalado, sem necessidade de reconfigurações ou mudanças de código.
- Automação: O Docker automatiza a configuração das aplicações, tornando mais fácil e rápido o processo de desenvolvimento, teste e implantação.
- Menor espaço em disco: As imagens Docker são compactas e ocupam menos espaço em disco que máquinas virtuais completas.
- Colaboração e compartilhamento: As imagens Docker podem ser compartilhadas com outros desenvolvedores e usuários através de repositórios de imagens.
