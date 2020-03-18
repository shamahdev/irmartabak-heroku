from django.contrib import admin
from django.contrib.auth.models import Group
from .models import martabak

class MartabakSlug(admin.ModelAdmin):
    readonly_fields = [
        'slug',
    ]

admin.site.register(martabak, MartabakSlug)
admin.site.unregister(Group)