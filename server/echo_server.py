from concurrent import futures

import grpc
import echo_pb2
import echo_pb2_grpc

class EchoServiceServicer(echo_pb2_grpc.EchoServiceServicer):

    def Echo(self, request, context):
        response = echo_pb2.EchoResponse(message=request.message)
        return response


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    echo_pb2_grpc.add_EchoServiceServicer_to_server(
        EchoServiceServicer(), server)
    server.add_insecure_port('[::]:9090')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    serve()