# Generated by Django 2.2.10 on 2020-03-24 08:30

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0009_artikel'),
    ]

    operations = [
        migrations.AddField(
            model_name='artikel',
            name='konten',
            field=tinymce.models.HTMLField(default='Artikel Ini Belum Memiliki Konten'),
        ),
    ]