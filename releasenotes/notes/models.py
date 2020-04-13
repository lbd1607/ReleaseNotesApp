from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    title = models.CharField(max_length=100, unique=True)
    author = models.CharField(max_length=100)
    note_body = models.CharField(max_length=10000, blank=True)
    owner = models.ForeignKey(
        User, related_name="notes", on_delete=models.SET_NULL, null=True)
    # on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
