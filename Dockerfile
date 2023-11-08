FROM node:18

WORKDIR /opt/medical-survey
COPY package* ./
RUN npm install

COPY . .

ENTRYPOINT [ "npx", "serve" ]
