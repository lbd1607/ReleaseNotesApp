from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    """User serializer, creates model for user that includes id, username, and password"""
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class RegisterSerializer(serializers.ModelSerializer):
    """"Register serializer, validates user registration, creates and returns user"""
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    # Create and return user
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])

        return user


class LoginSerializer(serializers.Serializer):
    """Login serializer, validates login credentials"""
    username = serializers.CharField()
    password = serializers.CharField()

    # Validate username and password
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Username or password is incorrect.")
