# ARG PROJECT_NAME
# FROM node:22 AS base

# ARG PROJECT_NAME  
# WORKDIR /app/projects/$PROJECT_NAME

# COPY ./projects/$PROJECT_NAME/package*.json ./

# # RUN echo "Installing in: /app/projects/$PROJECT_NAME" && npm install
# RUN npm install

# FROM node:22

# ARG PROJECT_NAME
# WORKDIR /app/projects/$PROJECT_NAME

# COPY ./projects/$PROJECT_NAME ./
# COPY --from=base /app/projects/$PROJECT_NAME/node_modules ./node_modules

# EXPOSE 3000
# CMD ["npm", "start"]


# # Dockerfile.debug
# ARG PROJECT_NAME

# FROM node:22 AS base

# ARG PROJECT_NAME  
# # WORKDIR /app/projects/$PROJECT_NAME

# WORKDIR /app

# COPY projects/${PROJECT_NAME}/package.json ./
# COPY projects/${PROJECT_NAME}/package-lock.json ./

# RUN npm install

# FROM node:22

# ARG PROJECT_NAME
# # WORKDIR /app/projects/$PROJECT_NAME

# COPY ./projects/$PROJECT_NAME ./
# # COPY --from=base /app/projects/$PROJECT_NAME/node_modules ./node_modules

# EXPOSE 3000
# CMD ["npm", "start"]


#  ---NOVO
# Usa a imagem oficial do Node.js como base
FROM node:22

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia APENAS os arquivos de definição de dependências
# Isso aproveita o cache do Docker. Se o package.json não mudar, o npm install não roda de novo.
COPY ./projects/root/package.json ./projects/root/package-lock.json* ./
# Opcional: Se usar yarn, use 'yarn.lock'

# Instala todas as dependências do projeto
RUN npm install

# Agora copia todo o restante do código-fonte do projeto
COPY ./projects/root/ ./

# Expõe a porta que a aplicação vai usar
EXPOSE 3000

# Comando padrão para iniciar a aplicação
CMD ["npm", "start"]