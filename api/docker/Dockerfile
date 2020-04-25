# this tells docker to build this image on top if python version 3.*
FROM python:3.6

# ENV DATABASE_URL postgresql://postgres@database:5432/reactdb
# ENV TEST_DATABASE_URL postgresql://postgres@database:5432/reactdb
# ENV APP_SECRET iigMnxLgWdFJppmd3JgZRzOUYLgmjaXX
# ENV REQUESTS_ORIGIN *


RUN pip install --upgrade pip

# here we are creating a folder named /app
RUN mkdir /app

COPY requirements.txt /app

# this is changing the current working directory to /app/bucketlist
# this is required since it is that folder where we find the requirements.txt
# file that essentially is a file that contains the application API dependencies
WORKDIR /app

# this is installing environment dependencies
RUN apt-get update && apt-get install -yqq --no-install-recommends --allow-unauthenticated apt-utils \
    netcat \
  && apt-get -q clean

RUN pip install --no-binary :all: psycopg2
# installing API dependencies
RUN pip install -r requirements.txt

# here we are copying all contents of the current folder where the dockerfile resides to the folder /app
COPY . /app

RUN chmod +x docker/start.sh

# exposing the flask application default port
EXPOSE 5000
CMD ["./docker/start.sh"]
