from rest_framework import serializers
from notes.models import Note

#Note serializer
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'