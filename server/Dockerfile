FROM python:3

WORKDIR /server

COPY server/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY protos/ ./protos

RUN python -m grpc_tools.protoc -I./protos --python_out=. --grpc_python_out=. ./protos/echo.proto

COPY server/echo_server.py .

CMD ["python", "echo_server.py"]