# backend/App/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SignUpView, LoginView, RecipeCreateView, RecipeListView




urlpatterns = [
      path('signup/', SignUpView.as_view(), name='signup'),
      path('login/', LoginView.as_view(), name='login'),
      path('recipes/create/', RecipeCreateView.as_view(), name='create_recipe'),
      path('recipes/', RecipeListView.as_view(), name='list_recipes'),
      
      
]
