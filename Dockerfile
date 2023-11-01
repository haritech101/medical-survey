FROM node:21.1

WORKDIR /opt/medical-survey
COPY package* ./
RUN npm install

COPY . .

ENTRYPOINT [ "npx", "serve" ]
