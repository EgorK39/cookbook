from rest_framework import generics
from .models import (Recipes, Category)
from .serializers import (RecipesSerializers, CategorySerializers)


class RecipesView(generics.ListAPIView):
    queryset = Recipes.objects.all().order_by('-timeCreated')
    serializer_class = RecipesSerializers


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
