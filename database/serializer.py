from rest_framework import serializers
from .models import martabak, artikel, komentar
from star_ratings.models import Rating, UserRating

class MartabakSerializer(serializers.ModelSerializer):
    class Meta:
        model = martabak
        fields = '__all__'

class ArtikelSerializer(serializers.ModelSerializer):
    class Meta:
        model = artikel
        fields = '__all__'

class KomentarSerializer(serializers.ModelSerializer):
    class Meta:
        model = komentar
        fields = '__all__'

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'

class UserRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRating
        fields = '__all__'