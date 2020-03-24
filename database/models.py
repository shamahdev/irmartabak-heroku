from django.db import models
from django.utils.text import slugify
from star_ratings.models import Rating
from django.dispatch import receiver
from tinymce.models import HTMLField
import os

class martabak(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="img/upload/%y/%m/%d")
    price = models.IntegerField()
    variant = models.CharField(max_length=50, choices=[("Manis", "Manis"), ("Asin", "Asin")], default="Manis")
    Size = models.CharField(max_length=50, choices=[("Besar", "Besar"), ("Kecil", "Kecil")], default="Besar")
    deskripsi = models.TextField()
    best_seller = models.CharField(max_length=50, choices=[("True", "True"), ("False", "False")], default="True")
    slug = models.SlugField(blank=True, editable=False)
    rating = models.OneToOneField(Rating, on_delete=models.CASCADE)

    def delete(self, *args, **kwargs):
        self.rating.delete()
        return super(self.__class__, self).delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        if not self.rating:
            self.rating = star_ratings.Rating.objects.create()
        super(martabak, self).save(*args, **kwargs)

    def __str__(self):
        return "{}".format(self.name)

@receiver(models.signals.post_delete, sender=martabak)
def auto_delete_image_on_delete(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)

@receiver(models.signals.pre_save, sender=martabak)
def auto_delete_image_on_change(sender, instance, **kwargs):
    if not instance.pk:
        return False
    try:
        old_file = sender.objects.get(pk=instance.pk).image
    except sender.DoesNotExist:
        return False
    new_file = instance.image
    if not old_file == new_file:
        if os.path.isfile(old_file.path):
            os.remove(old_file.path)

class artikel(models.Model):
    judul = models.CharField(max_length=50)
    konten = HTMLField(default="Artikel Ini Belum Memiliki Konten")
    thumbnail = models.ImageField(upload_to="img/artikelThumb")
    tanggal_post = models.DateField(auto_now=False, auto_now_add=False)
    link = models.CharField(max_length=200)
    slug = models.SlugField(blank=True, editable=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.judul)
        super(artikel, self).save()
    
    def __str__(self):
        return "{}".format(self.judul)
