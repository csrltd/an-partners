from django.db import models
from datetime import datetime
# Create your models here.

class contactMessage(models.Model):
    firstname= models.CharField(max_length=255)
    lastname= models.CharField(max_length=255)
    email= models.EmailField(max_length=255)
    message = models.TextField(max_length=500)
    created_at = models.DateTimeField(default=datetime.now)
    
    def __str__(self):
        return self.firstname