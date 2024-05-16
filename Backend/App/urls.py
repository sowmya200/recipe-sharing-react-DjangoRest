# backend/App/urls.py

from django.urls import path
from .views import SignUpView
from .views import LoginView
from .views import create_recipe

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
      path('login/', LoginView.as_view(), name='login'),
      path('create-recipe/', create_recipe, name='create_recipe'),
]
