---
title: "[Kubernetes] - 10 erros comuns ☄️"
description: "Nesse post vamos falar sobre 10 erros comuns que são cometidos ao administrar clusters Kubernetes."
publish: true
created_date: 2025-01-30
slug: kubernetes-10-mistakes
tags:
  - kubernetes
  - medium
---

# Overview

Fala galera, tranquilidade? Bom, me chamo Lucca, tenh 23 anos, atualmente trabalho na área de DevOps e hoje vou compartilhar com vocês um pouquinho de algumas coisas que aprendi ao longo dos anos administrando clusters Kubernetes.

Em meus anos de experiência nesse mundo de containers eu tive a chance de ver e lidar com muitos clusters Kubernetes (gerenciados e não gerenciados no GCP, AWS e Azure) e comecei a notar alguns erros que eram repetidos constantemente nas empresas por onde eu passava. Obviamente que a maioria deles eu também cometi, hahaha! Nessa postagem tentarei relatar os problemas mais comentados na comunidade e falar sobre como poderiamos arrumá-los para deixar nosso ambiente de Kubernetes mais saudável.

# Mistakes

## Resources Requests and Limits

Deixar de definir as solicitações de recursos computacionais de CPU e RAM foi algo comum que presenciei ao longo do tempo. Tanto requests, quanto limits, eram esquecidos e as cargas de trabalho rodavam sem nenhuma definição ou as vezes apenas com uma solicitaçao de request ou limit.

O problema de não ser uma solicitação não definida ou definir uma que não faz sentido para aquela carga de trabalho em específico é que os nodes do cluster podem ficar suprecomprometidos ou até não serem utilizados da melhor forma. Se o ambiente não tivesse um processo de escalonamento computacional isso se tornaria ainda mais crítico, uma vez que não haveria recurso para eventuais agendamentos de cargas de trabalho ao longo do dia.

No caso da alta demanda por CPUs mal solicitadas, os nodes ficavam superutilizados, fazendo com que a CPU fosse acelerada, uma vez que as cargas de trabalho utilizariam apenas o que foi solicitado. A questão era que isso causava um aumento na latência do aplicativo. Nesse cenário temos duas ideias que já podemos extrair:

- Nunca deixe de setar recursos.
- Nunca defina recursos muito abaixo da realidade.

## Liveness and Readiness probes

## LoadBalancer para cada serviço HTTP

## Escalonamento automático de cluster sem reconhecimento do Kubernetes

## Não uso do poder do IAM/RBAC

## Não Pod Disruptionbudget
