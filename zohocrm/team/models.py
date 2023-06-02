from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Team(models.Model):
    name =models.CharField(max_length=255)
    numbers =models.ManyToManyField(User,related_name='team')
    created_by= models.ForeignKey(User,related_name='created_by',on_delete=models.CASCADE)
    created_at =models.DateTimeField(auto_now_add=True)
    