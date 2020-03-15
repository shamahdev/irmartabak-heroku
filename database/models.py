from django.db import models
from django.utils.text import slugify

class martabak(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="img/upload/%y/%m/%d")
    price = models.IntegerField()
    variant = models.CharField(max_length=50, choices=[("Manis", "Manis"), ("Asin", "Asin")], default="Manis")
    Size = models.CharField(max_length=50, choices=[("Besar", "Besar"), ("Kecil", "Kecil")], default="True")
    deskripsi = models.TextField()
    best_seller = models.CharField(max_length=50, choices=[("True", "True"), ("False", "False")], default="True")
    slug = models.SlugField(blank=True, editable=False)

    def save(self):
        self.slug = slugify(self.name)
        super(martabak, self).save()

    def __str__(self):
        return "{}".format(self.name)

