from django.contrib import admin
from django import forms
from django.contrib.auth.models import Group
from .models import martabak, artikel, komentar
from imagekit.admin import AdminThumbnail
import admin_thumbnails

@admin.register(martabak)
@admin_thumbnails.thumbnail('image')
class MartabakAdmin(admin.ModelAdmin):
    martabak_thumbnail = AdminThumbnail(image_field='preview', template='thumbnail.html')
    list_display = ('name', 'variant', 'lowest_price', 'highest_price', 'deskripsi', 'image_thumbnail')
    search_fields = ('name', 'variant', 'lowest_price', 'highest_price')
    readonly_fields = ('slug', 'martabak_thumbnail')
    fields = ('id', 'name', 'lowest_price', 'highest_price', 'variant', 'deskripsi', 'best_seller', 'image', 'martabak_thumbnail', 'size_besar', 'size_kecil', 'rating')

@admin.register(artikel)
@admin_thumbnails.thumbnail('image')
class ArtikelAdmin(admin.ModelAdmin):
    artikel_thumbnail = AdminThumbnail(image_field='preview', template='thumbnail.html')
    list_display = ('judul', 'tanggal', 'konten', 'image_thumbnail')
    fields = ('judul', 'tanggal', 'konten', 'image', 'artikel_thumbnail')
    readonly_fields = ('artikel_thumbnail',)

@admin.register(komentar)
@admin_thumbnails.thumbnail('image')
class KomentarAdmin(admin.ModelAdmin):
    cropped_avatar = AdminThumbnail(image_field='preview', template='thumbnail.html')
    fields = ('nama', 'rating', 'image', 'cropped_avatar', 'komentar')
    readonly_fields = ('cropped_avatar',)
    list_display = ('nama', 'rating', 'komentar', 'image_thumbnail')

admin.site.unregister(Group)