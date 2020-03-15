from rest_framework import viewsets
from .models import martabak
from star_ratings.models import Rating, UserRating
from .serializer import MartabakSerializer, RatingSerializer, UserRatingSerializer
class martabakbestsellerViewSet(viewsets.ModelViewSet):
    queryset = martabak.objects.all().filter(best_seller="True")
    serializer_class = MartabakSerializer

class martabakViewSet(viewsets.ModelViewSet):
    queryset = martabak.objects.all()
    serializer_class = MartabakSerializer

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

class UserRatingViewSet(viewsets.ModelViewSet):
    queryset = UserRating.objects.all()
    serializer_class = UserRatingSerializer