from rest_framework import routers
from database.viewsets import martabakbestsellerViewSet, martabakViewSet, RatingViewSet, UserRatingViewSet, artikelViewSet, komentarViewSet

router = routers.DefaultRouter()
router.register(r'martabak/bestseller', martabakbestsellerViewSet)
router.register(r'martabak', martabakViewSet)
router.register(r'rating', RatingViewSet)
router.register(r'userrating', UserRatingViewSet)
router.register(r'artikel', artikelViewSet)
router.register(r'komentar', komentarViewSet)