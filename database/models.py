from django.db import models
from django.utils.text import slugify
from star_ratings.models import Rating
from django.dispatch import receiver
from tinymce.models import HTMLField
from django.utils.html import mark_safe
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
from django.utils.html import escape
from django.core.validators import MinValueValidator, MaxValueValidator
import os

class martabak(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    image = models.FileField(upload_to="img/martabak/%y/%m/%d")
    preview = ImageSpecField(
        source='image',
        processors=[ResizeToFill(200, 200)],
        format='JPEG',
        options={'quality': 85}
    )
    lowest_price = models.PositiveIntegerField(default=0)
    highest_price = models.PositiveIntegerField(default=0)
    variant = models.CharField(max_length=50, choices=[("Manis", "Manis"), ("Asin", "Asin")], default="Manis")
    size_besar = models.BooleanField(default="True")
    size_kecil = models.BooleanField(default="True")
    deskripsi = models.TextField()
    best_seller = models.CharField(max_length=50, choices=[("True", "True"), ("False", "False")], default="True")
    slug = models.SlugField(blank=True, editable=False)
    rating = models.OneToOneField(Rating, on_delete=models.CASCADE)

    def delete(self, *args, **kwargs):
        self.rating.delete()
        return super(martabak, self).delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        if not self.rating:
            self.rating = Rating.objects.create()
        super(martabak, self).save(*args, **kwargs)

    def __str__(self):
        return "{}".format(self.name)

@receiver(models.signals.post_delete, sender=martabak)
def auto_delete_martabak_image_on_delete(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)

@receiver(models.signals.pre_save, sender=martabak)
def auto_delete_martabak_image_on_change(sender, instance, **kwargs):
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
    konten = HTMLField()
    image = models.ImageField(upload_to="img/artikel")
    preview = ImageSpecField(
        source='image',
        processors=[ResizeToFill(515, 300)],
        format='JPEG',
        options={'quality': 100}
    )
    tanggal = models.DateField(auto_now=False, auto_now_add=False)
    link = models.CharField(max_length=200)
    headline = models.BooleanField(default=True)
    slug = models.SlugField(blank=True, editable=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.judul)
        super(artikel, self).save()
    
    def __str__(self):
        return "{}".format(self.judul)

@receiver(models.signals.post_delete, sender=artikel)
def auto_delete_artikel_image_on_delete(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)

@receiver(models.signals.pre_save, sender=artikel)
def auto_delete_artikel_image_on_change(sender, instance, **kwargs):
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

class komentar(models.Model):
    nama = models.CharField(max_length=65)
    image = models.ImageField(upload_to="img/avatar/%y/%m/%d")
    preview = ImageSpecField(
        source='image',
        processors=[ResizeToFill(183, 183)],
        format='JPEG',
        options={'quality': 100}
    )
    rating = models.PositiveSmallIntegerField(default=5, validators=[MinValueValidator(0),MaxValueValidator(5)])
    komentar = models.TextField()

    def __str__(self):
        return "{}".format(self.nama)

@receiver(models.signals.post_delete, sender=komentar)
def auto_delete_komentar_image_on_delete(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)

@receiver(models.signals.pre_save, sender=komentar)
def auto_delete_komentar_image_on_change(sender, instance, **kwargs):
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
