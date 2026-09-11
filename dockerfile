#Usa uma imagem base (nesse caso está sendo utilizada uma imagem do Noje.js 22.0.0v)
FROM node:22

#Informa ao docker o diretório onde ele iniciará a execução do container
WORKDIR /app

#Faz o docker copiar os arquivos do package.json e d package-lock.json 
COPY package*.json ./

#instala as dependências
RUN npm install

COPY . .

#Define a variável de ambiente PORT com o valor 3000
ENV PORT=3000
EXPOSE 3000

#Inicia a aplicação
CMD ["npm","start"]

