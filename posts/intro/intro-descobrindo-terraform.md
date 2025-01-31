---
title: "[Intro] - Descobrindo o Terraform"
description: "Nesse artigo, vamos explorar o Terraform, uma ferramenta de código aberto que facilita a automação da infraestrutura como código."
publish: true
created_date: 2025-01-29
slug: intro-descobrindo-terraform
tags:
  - iac
  - beginner
---

# Visão Geral

O Terraform é uma ferramenta de Infraestrutura como Código (IaC) que permite provisionar e gerenciar recursos de infraestrutura. Com o Terraform, você pode criar, modificar e destruir esses recursos em diversos provedores de nuvem, bem como em ambientes on-premise. O escopo do Terraform é abrangente, permitindo gerenciar componentes de baixo nível, como recursos de computação, armazenamento e rede, até componentes de alto nível, como DNS, serviços de banco de dados e balanceadores de carga.

# Como funciona?

O Terraform permite criar e gerenciar recursos em plataformas de nuvem e outros serviços por meio de suas APIs. Ele opera utilizando o conceito de "providers", que são responsáveis por permitir que o Terraform interaja com diferentes plataformas e serviços que possuam uma API acessível.

Os providers são desenvolvidos pela HashiCorp e pela comunidade do Terraform, milhares já foram criados e vão desde os mais conhecidos como AWS, Azure e Google Cloud até providers menos populares, mas igualmente relevantes.

O Terraform conta com um registry onde é possível encontrar todos os providers públicos disponíveis, incluindo aqueles desenvolvidos pela comunidade, e suas respectivas documentações de uso. A URL para o registry será anexada nas referências ao final dessa documentação.

# States

Ao executar o Terraform, um arquivo de estado é gerado onde ficam registradas as informações sobre os recursos provisionados. Esse arquivo é armazenado localmente por padrão, mas também pode ser armazenado em um backend remoto, como terraform cloud, para maior segurança e colaboração em equipe.

O estado permite ao Terraform entender o estado atual da infraestrutura e calcular de forma precisa as alterações necessárias para chegar ao estado desejado definido, sendo assim, sempre que houver uma mudança na infraestrutura o usuário será notificado e deverá dar instruções de continuidade para que a mudança seja aplicada e o novo estado seja atualizado. Essas alterações são aplicadas de forma ordenada e levando em consideração as dependências entre os recursos.

# Fluxo

Apesar de possuir uma dezena de comandos, o fluxo de trabalho do Terraform consiste de três principais etapas:

- Write: Nessa etapa o usuário define através de arquivos de configuração os recursos que serão criados em sua infraestrutura.
- Plan: um plano de execução será criado mostrando os recursos de infraestrutura que serão gerados, atualizados ou destruídos com base na infraestrutura e configuração já existentes.
- Apply: a infraestrutura será provisionada e o estado será atualizado.

# Benefícios

- Gerenciar qualquer infraestrutura: O Terraform oferece suporte a milhares de providers, permitindo que você provisione e gerencie recursos em uma ampla variedade de plataformas e serviços, além da possibilidade de desenvolver o seu próprio provider.
- Rastrear sua infraestrutura: Por possuir um arquivo de estado (state file) que armazena o estado atual da infraestrutura provisionada e o utiliza como fonte da verdade, o Terraform é capaz de identificar quando alguma mudança é feita.
- Integração com pipeline: Uma das etapas do pipeline pode ser dedicada ao provisionamento da infraestrutura necessária para implantar o aplicativo, como também a possibilidade de destruição da infraestrutura após a
