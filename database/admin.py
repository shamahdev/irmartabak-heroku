from django.contrib import admin
from django.contrib.auth.models import Group
from .models import martabak, artikel

class MartabakSlug(admin.ModelAdmin):
    readonly_fields = [
        'slug',
    ]

class ArtikelSlug(admin.ModelAdmin):
    readonly_fields = [
        'slug',
    ]

admin.site.register(martabak, MartabakSlug)
admin.site.register(artikel, ArtikelSlug)
admin.site.unregister(Group)