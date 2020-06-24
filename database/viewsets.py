from rest_framework import viewsets, permissions
from .models import martabak, artikel
from star_ratings.models import Rating, UserRating
from .serializer import MartabakSerializer, RatingSerializer, UserRatingSerializer, ArtikelSerializer

class martabakbestsellerViewSet(viewsets.ModelViewSet):
    queryset = martabak.objects.all().filter(best_seller="True")
    serializer_class = MartabakSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class martabakViewSet(viewsets.ModelViewSet):
    queryset = martabak.objects.all()
    serializer_class = MartabakSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class artikelViewSet(viewsets.ModelViewSet):
    queryset = artikel.objects.all()
    serializer_class = ArtikelSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = (permissions.AllowAny,)

class UserRatingViewSet(viewsets.ModelViewSet):
    queryset = UserRating.objects.all()
    serializer_class = UserRatingSerializer
    permission_classes = (permissions.AllowAny,)
