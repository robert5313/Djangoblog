from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    summary = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=50)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    views = models.PositiveBigIntegerField(default=0)

    def __str__(self):
        return self.title
