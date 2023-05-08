from django.urls import path
from .views import (RecipesView, CategoryView)
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('api/v1/recipes/', RecipesView.as_view()),
    path('api/v1/catlist/', CategoryView.as_view()),
    path('openapi', get_schema_view(
        title="Your Project",
        description="API for all things …"
    ), name='openapi-schema'),
]
