from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    # After registration request is made, post data and send response with token in auth header
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data, "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    # After login request is made, post data and send response with token in auth header
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data, "token": AuthToken.objects.create(user)[1]
        })


class UserAPI(generics.RetrieveAPIView):
    # Protects route so user must be logged in to access notes
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    # Examines token and sends back user associated with that token
    def get_object(self):
        return self.request.user
