from django.db import models
from django.contrib.auth.models import User
from PIL import Image


class Category(models.Model):
    title = models.CharField(max_length=66)

    def __str__(self):
        return self.title


class Recipes(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    timeCreated = models.DateTimeField(auto_now_add=True)
    timeUpdated = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    picture = models.ImageField(upload_to='images', default='images/default/default.png')
    category = models.ForeignKey(Category, related_name='cat', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        super().save()
        if self.picture.size > 2000000:
            raise Exception('Слишком большой размер изображения')
        else:
            picture_path = (self.picture.path)
            img = Image.open(picture_path)
            print('self.photo.path:', self.picture.path)
            print('img:', img)
            print(f'img.format: {img.format}, img.size: {img.size}, img.mode: {img.mode}')
            print('self.picture.seze:', self.picture.size)
            if img.height > 450 or img.width > 600:
                new_img = (600, 450)
                img.thumbnail(new_img)
                img.save(picture_path)

    def __str__(self):
        return f'{self.title} & {self.description[0:200]}...'
