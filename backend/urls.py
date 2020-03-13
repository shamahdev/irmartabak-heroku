from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls import handler404
from django.views.static import serve 
from . import views

urlpatterns = [
    path('', views.index, name="Home"),
    re_path(r'^(?P<page_requested>[\w-]+)/$', views.pages),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
    re_path(r'^menu/(?P<martabak_requested>[\w-]+)/$', views.martabak),
]
handler404 = 'backend.views.error_404'