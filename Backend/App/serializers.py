# backend/App/serializers.py

from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import authenticate
from django.http import JsonResponse
from .models import Recipe


class UserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'confirm_password']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        # Check if email and password are provided
        if not email or not password:
            raise serializers.ValidationError('Email and password are required')

        return data

class RecipeSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    
    class Meta:
        model = Recipe
        fields = [
            'id', 'title', 'image', 'description', 'ingredients', 'instructions',
            'servings', 'cooking_time_hours', 'cooking_time_minutes', 'cuisine_type',
            'course_of_meal', 'created_at'
        ]   

