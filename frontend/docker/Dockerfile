FROM node:11.15
RUN npm install -g gulp-cli serve
COPY . /
RUN npm rebuild node-sass
RUN npm install
# or you can add this to the package.json scripts     "postinstall": "npm rebuild node-sass"
# RUN npm rebuild node-sass
RUN gulp sass
CMD ["npm", "start"]
