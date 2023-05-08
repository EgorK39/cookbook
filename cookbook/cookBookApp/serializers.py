from rest_framework import serializers
from .models import (Recipes, Category)


class RecipesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = (
            'user',
            'timeCreated',
            'timeUpdated',
            'title',
            'description',
            'picture',
            'category',
        )


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'title',
        )
