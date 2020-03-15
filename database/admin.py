from django.contrib import admin
from .models import martabak

class MartabakSlug(admin.ModelAdmin):
    readonly_fields = [
        'slug',
    ]

admin.site.register(martabak, MartabakSlug)
