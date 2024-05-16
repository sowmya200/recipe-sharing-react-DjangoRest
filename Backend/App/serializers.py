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
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'image', 'description', 'ingredients', 'instructions', 'servings', 'cooking_time', 'cuisine_type', 'course_of_meal']

    def create(self, validated_data):
        return Recipe.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.image = validated_data.get('image', instance.image)
        instance.description = validated_data.get('description', instance.description)
        instance.ingredients = validated_data.get('ingredients', instance.ingredients)
        instance.instructions = validated_data.get('instructions', instance.instructions)
        instance.servings = validated_data.get('servings', instance.servings)
        instance.cooking_time = validated_data.get('cooking_time', instance.cooking_time)
        instance.cuisine_type = validated_data.get('cuisine_type', instance.cuisine_type)
        instance.course_of_meal = validated_data.get('course_of_meal', instance.course_of_meal)
        instance.save()
        return instance