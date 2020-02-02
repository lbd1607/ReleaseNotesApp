from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=100, unique=True)
    author = models.CharField(max_length=100)
    note_body = models.CharField(max_length=10000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

