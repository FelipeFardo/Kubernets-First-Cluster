# Kubernets-First-Cluster

Este repositório contém os arquivos e configurações necessários para criar e gerenciar seu primeiro cluster Kubernetes utilizando o [Kind (Kubernetes IN Docker)](https://kind.sigs.k8s.io/). O projeto inclui exemplos de deployment, serviços, volumes persistentes e métricas, proporcionando uma base sólida para aprendizado e experimentação com Kubernetes.

## 📁 Estrutura do Projeto

- `kind.yaml`: Configuração do cluster Kind.
- `deployment.yaml`: Definição de um Deployment para aplicação.
- `service.yaml`: Serviço para expor a aplicação.
- `pod.yaml`: Exemplo de definição de um Pod.
- `replicaset.yaml`: Exemplo de ReplicaSet.
- `pv.yaml`: Configuração de Volume Persistente.
- `storageclass.yaml`: Definição de StorageClass.
- `metrics-server.yaml`: Configuração do Metrics Server para coleta de métricas.

## 🚀 Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados:

- [Docker](https://www.docker.com/)
- [Kind](https://kind.sigs.k8s.io/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)

## 🛠️ Instruções de Uso

### 1. Clonar o Repositório

```bash
git clone https://github.com/FelipeFardo/Kubernets-First-Cluster.git
cd Kubernets-First-Cluster
```

### 2. Criar o Cluster com Kind

```bash
kind create cluster --config kind.yaml
```

### 3. Aplicar as Configurações do Kubernetes

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f pod.yaml
kubectl apply -f replicaset.yaml
kubectl apply -f pv.yaml
kubectl apply -f storageclass.yaml
```

### 4. Instalar o Metrics Server

```bash
kubectl apply -f metrics-server.yaml
```

### 5. Verificar o Status dos Recursos

```bash
kubectl get all
```

## 📊 Monitoramento com Metrics Server

Após a instalação do Metrics Server, você pode visualizar as métricas dos pods e nodes:

```bash
kubectl top nodes
kubectl top pods
```

## 📌 Observações

- Certifique-se de que o Docker esteja em execução antes de criar o cluster com Kind.
- O Metrics Server é essencial para coletar métricas de uso de CPU e memória, úteis para escalonamento automático e monitoramento.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias, correções ou sugestões.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
