FROM python:3.8.6-slim


# Set the default workdir
WORKDIR /workspaceFolder
# Map files directly to docker container
ADD . .
# Update system
RUN apt-get update && apt-get upgrade -y
## PYTHON
# Install default requirements
RUN pip install -r requirements.txt
# Install gunicorn
RUN pip install gunicorn
## NPM
# Install npm / node
RUN apt-get install -y nodejs npm
# update version
RUN npm i npm@latest -g
# Install requirements
RUN cd frontend && npm install
# Build frontend
RUN cd frontend && npm run build

# Setup server environment
ENV PYTHONUNBUFFERED=1
RUN chmod +x ./backend/config/docker/entrypoint.sh
ENTRYPOINT ["./backend/config/docker/entrypoint.sh" ]
EXPOSE 5000
