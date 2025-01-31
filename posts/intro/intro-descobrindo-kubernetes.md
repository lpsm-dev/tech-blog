---
title: "[Intro] - Descobrindo o Kubernetes"
description: "Nesse artigo, vamos explorar o Kubernetes, uma plataforma de código aberto que facilita a automação, escalabilidade e operação de aplicativos em contêineres."
publish: true
created_date: 2025-01-29
slug: intro-descobrindo-kubernetes
tags:
  - kubernetes
  - beginner
---

# Visão Geral

Kubernetes é um sistema de gerenciamento de contêineres de código aberto, que ajuda a implantar, escalar e gerenciar aplicativos distribuídos. O Kubernetes ajuda a automatizar a distribuição, escalonamento e gerenciamento de aplicativos em contêineres.

O Kubernetes é projetado para oferecer alta disponibilidade, escalabilidade e segurança para os aplicativos que executam em contêineres. Ele também fornece recursos para ajudar a garantir que os aplicativos sejam executados de forma confiável e com baixo custo.

# Vantagens

O Kubernetes oferece várias vantagens em relação a outros sistemas de gerenciamento de contêineres. Por exemplo, ele fornece recursos de escalonamento automático e gerenciamento de recursos, permitindo que os usuários aproveitem ao máximo os recursos disponíveis.

O Kubernetes também oferece recursos de segurança e gerenciamento de contêineres. Isso ajuda a garantir que os aplicativos sejam executados de forma confiável e segura, com o mínimo de interrupções

# Principais componentes

- Cluster: unidade de orquestração da tecnologia Kubernetes, é composto por Master Nodes e Worker Nodes.

- Control Plane: responsável por executar processos do Kubernetes que são necessários para rodar e gerenciar o Cluster e possui alguns componentes vitais para que toda essa operação ocorra, são eles:
  - kube-apiserver: ponto de entrada para a comunicação com o cluster, responsável por validar e configurar as chamadas aos objetos api (pod, service, etc).
  - kube-scheduler: componente responsável pela atribuição de pods recentemente criados a um Node. Essa operação deve levar em conta alguns fatores, como por exemplo a quantidade de recursos requerida pelos pods e a quantidade de recursos disponíveis no Node.
  - kube-controller-manager: responsável pelos processos do controller. O controller possui a tarefa de observar o estado do control plane em loop através do apiserver para garantir que o estado atual esteja de acordo com o estado desejado.
  - etcd: armazena todos os dados do control plane em um esquema chave-valor sendo utilizado para tarefas de backup. obs: caso opte por usar o etcd para backup é necessário configurar a operação.
- Worker Node: também conhecido como Node, é o lugar onde os contêineres Docker estão sendo executados. Possui uma maior carga de trabalho por estar executando as aplicações, seus componentes estão presentes em cada Node e são eles:
  - Kubelet: responsável por garantir que os contêineres dentro dos pods estejam saudáveis e em execução. obs: o kubelet não gerencia contêineres que não foram criados pelo kubernetes.
  - Kube-proxy: implementa regras de rede nos Nodes proporcionando acesso aos pods através de sessões de rede externas ou internas.
  - Container runtime: software responsável pela execução dos contêineres, realiza tarefas como baixar imagem do container registry.

# Objetos

Os objetos do kubernetes são entidades persistentes e representam o estado do cluster, ou seja, ao criar objetos você está falando ao kubernetes como deseja que o cluster seja, isso se chama estado desejado.

Os objetos kubernetes podem ser divididos entre objetos orientados a cargas de trabalho e objetos orientados a infraestrutura (rede, segurança). Para criá-los geralmente utilizamos um arquivo com a linguagem de serialização de dados yaml e enviamos para o apiserver, esse por sua vez converte o yaml para json.

Alguns exemplos de objetos são:

- Pod: unidade básica de trabalho no kubernetes.
- Service: expõe um conjunto de pods usando um único endpoint.
- Ingress: gerencia acesso externo aos serviços em um cluster.

# Como funciona?

O Master Node é o ponto central do cluster, responsável por gerenciar as tarefas administrativas e assegurar que os recursos estejam alocados de maneira equilibrada entre os Worker Nodes. Quando uma aplicação é implantada no cluster, o Master Node cria objetos, como pods, para representar as partes da aplicação. O Master Node também gerencia a distribuição dos pods entre os Worker Nodes.

Cada Worker Node executa uma instância do Kubelet, que é responsável por gerenciar a execução dos pods em seu nó. O Kubelet monitora a saúde dos pods e, se algum deles não estiver funcionando corretamente, ele o reiniciará. Além disso, o Kubelet se comunica com o Master Node para relatar a saúde dos pods e para solicitar mais recursos se necessário.

O Kube-Proxy é outro componente importante que é executado em cada nó. Ele é responsável por configurar o acesso de rede aos pods, permitindo que eles se comuniquem uns com os outros e com o resto do cluster.

A interação entre estes componentes permite que o Kubernetes gerencie a execução de uma grande quantidade de containers de forma eficiente e confiável. O Kubernetes também fornece uma interface para que os administradores possam monitorar e gerenciar o cluster, tornando mais fácil implementar, escalar e manter aplicações em containers.

# Kubernetes e Contêineres

O Kubernetes surgiu devido ao grande número de contêineres em aplicações de nuvem. Conforme as aplicações se tornaram mais complexas e as equipes de desenvolvimento passaram a usar contêineres para tornar o desenvolvimento, implantação e gerenciamento de aplicativos mais ágil e escalável, a necessidade de uma solução de gerenciamento de contêineres se tornou evidente.

Assim sendo o Kubernetes apresenta alguns recursos para gerenciar esses contêineres em larga escala de forma eficiente e escalável:

- Automatização: o Kubernetes automatiza o processo de criação de contêineres, permitindo que você defina a configuração desejada dos pods e garanta que ela seja mantida ao longo do tempo.
- Escalabilidade: o Kubernetes permite que você ajuste dinamicamente o número de réplicas de um pod, tornando mais fácil escalar aplicativos para atender a variações de carga.
- Alta disponibilidade: o Kubernetes fornece mecanismos para garantir a alta disponibilidade de aplicativos, como replicação de pods, roteamento de tráfego e tolerância a falhas de nós.
- Centralização: o Kubernetes fornece uma visibilidade e gerenciamento centralizados para todos os contêineres em execução, tornando mais fácil garantir que as aplicações estejam sendo executadas de maneira consistente em todo o Cluster.
- Flexibilidade: o Kubernetes permite que você defina a configuração desejada dos pods, incluindo requisitos de recursos, restrições e variáveis de ambiente, tornando mais fácil ajustar a infraestrutura para atender às necessidades específicas de cada aplicação.
