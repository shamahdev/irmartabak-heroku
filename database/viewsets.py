from rest_framework import viewsets, permissions
from .models import martabak, artikel, komentar
from star_ratings.models import Rating, UserRating
from .serializer import MartabakSerializer, RatingSerializer, UserRatingSerializer, ArtikelSerializer, KomentarSerializer

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

class komentarViewSet(viewsets.ModelViewSet):
    queryset = komentar.objects.all()
    serializer_class = KomentarSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = (permissions.AllowAny,)

class UserRatingViewSet(viewsets.ModelViewSet):
    queryset = UserRating.objects.all()
    serializer_class = UserRatingSerializer
    permission_classes = (permissions.AllowAny,)
