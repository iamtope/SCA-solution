### Running the services

## Prerequisites

- Docker
- Node Js
- Preferable Code Editor ( Visual Studio in this case)

## Steps for installation

- Run npm install to install node modules and other neccessary dependencies
- Run

```
# this command helps you to build your services, the -t command helps you to tag the build so you can find it later

$ docker build -t <your username>/node-web-app .

# Run the image you just built using the command below
Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built:

$ docker run -p 49160:8080 -d <your username>/node-web-app

# Now, Docker has mapped the 8080 port inside of the container to the port 49160 on your machine.
Now you can call your app using curl (install if needed via: sudo apt-get install curl):

$ curl -i localhost:49160

OR

In your web browser, go to:

localhost:49160
```
