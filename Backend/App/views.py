# backend/App/views.py

from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import JsonResponse
from .serializers import UserSerializer, LoginSerializer


class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            
            # Check if user exists with the provided email
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return Response({'error': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)
            
            # Check if the provided password is correct
            if user.check_password(password):
                # Authentication successful
                return Response({'message': 'Login successful', 'username': user.username}, status=status.HTTP_200_OK)
            else:
                # Authentication failed
                return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            # Invalid serializer data
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



def create_recipe(request):
    if request.method == 'POST':
        form = RecipeForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Recipe created successfully'}, status=201)
        else:
            return JsonResponse({'errors': form.errors}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)


