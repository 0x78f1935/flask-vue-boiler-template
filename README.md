# Flask - Vue, Boiler template

A boiler template for flask in combination with Vue.

## Table of Contents
1. [Environment](#Environment)
    - [NodeJS (Frontend)](#Node)
        1. [Dependencies](#Installing-dependencies)
        2. [Compiling](#Compiling-a-new-build)
        3. [Hotreload](#Hotreload)
        4. [Production Build](#Production)
    - [Python (Backend)](#Python)
        1. [Virtual Environment](#Python)
        2. [Dependencies](#Installing-dependencies)
        3. [Start server](#Start-server)
3. [Docker deployment](#Docker-Environment)
    - [docker build](#Without-docker-compose)
    - [docker-compose](#With-docker-compose)
4. [Visual Studio Code](#Visual-Studio-Code-Environment)

<br/>

# Environment

<br/>

## Node

Navigate to the `frontend` folder in your terminal. Open up a terminal in the root of the project.

    cd frontend
<br/>

### Installing dependencies

First time use we need to install all the dependencies needed in order to compile the vue frontend which later will be \
served to the python backend. Assuming you are in the `./frontend` folder with a terminal.

    npm install

<br/>

## Compiling a new build

There are two ways to compile the frontend. `watch` which is useful when developing. This mode includes a hotreload. And \
the other `build` is optimized for production environment. This wont have a hot reload available to you.

<br/>

### Hotreload

In order to `hotreload`, execute the following command in your `/frontend` folder.

    npm run watch

<br/>

### Production

In order to compile a `production` ready build, use the following command in your `/frontend` folder.

    npm run build

<br/>

## Python

The frontend is independent from the backend. Therefor you can execute the following code in the root folder of the \
boiler template. Create a virtual environment with your favorite venv package and activate it.

    python -m virtualenv venv
    venv\Scripts\activate

<br/>

### Installing dependencies

    (venv) python -m pip install -r requirements.txt

<br/>

### Start server

You can start the server in multiple different ways. When starting a flask instance through the terminal you will get \
access to additional options which can be useful to maintain the server, database or whatever is installed. In order to \
do this we need to set the `FLASK_APP` environment variable.

    (venv) set FLASK_APP=webserver.py

You can see what options are available to you by just typing in `flask` in your CLI where the `environment` has been set. \
In order to start the server you can enter the following.

    (venv) flask run

<br/>

# Docker Environment

Assuming you have a terminal open in the root folder of this project.

<br/>

## Without docker-compose

1. Build the docker image

    `docker build . -t env`

2. Check the image ID

    `docker images`
```
    REPOSITORY           TAG          IMAGE ID       CREATED          SIZE
    env                  latest       c9d437d2b9b0   22 seconds ago   590MB
```

3. Start container from image

    `docker run -d -p 5000:5000 env:latest`

4. Check if container is running
    `docker ps -a`

```
    CONTAINER ID   IMAGE                       COMMAND                  CREATED         STATUS                  PORTS                                     NAMES
    dc1b85717f88   env:latest                  "./backend/config/do…"   8 seconds ago   Up 4 seconds            0.0.0.0:5000->5000/tcp                    festive_mestorf
```

<br/>

## With docker-compose
1. Starts a simple environment with nginx to simulate a production environment

    `docker-compose up --build`

<br/>

# Visual Studio Code Environment

Once a `.vscode` folder has been created, you can use the following configuration to make use of breakpoints, etc.

    {
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Python: Flask",
                "type": "python",
                "request": "launch",
                "module": "flask",
                "env": {
                    "FLASK_APP": "${workspaceFolder}/webserver.py",
                    "FLASK_ENV": "development",
                    "FLASK_DEBUG": "1"
                },
                "args": [
                    "run",
                    // "--no-debugger"
                ],
                "jinja": true
            }
        ]
    }