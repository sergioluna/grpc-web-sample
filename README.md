# grpc-web-sample

Prototype for testing out and demonstrating an understanding of grpc-web.

## Overview

This software uses gRPC to communicate between a ReactJS client service (bootstrapped with `yarn create react-app`) and a Python server service.
There is a third service that acts as a proxy between the client service and the server service, namely the envoy-proxy service. At the time of 
creating this software, Envoy is required for gRPC-web to work.

The end result is a simple web page with an input box that sends user input to the server to be echoed back via gRPC-web.


## Instructions

The services are containerized via Docker, and are buildable/deployable with Docker Compose. 

To get up and running, in the root directory run:
```
docker compose build
docker compose up
```
and visit `localhost:3000`
