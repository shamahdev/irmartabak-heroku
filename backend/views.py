from django.shortcuts import render, redirect
from django.core.exceptions import ObjectDoesNotExist
from django.urls import reverse
from database.models import martabak as model_martabak

def index(request):
    return render(request, 'index.html')

def pages(request, page_requested):
    context = {
        'page' : page_requested,
    }
    return render(request, 'pages.html', context)

def menu(request):
    context = {
        'page' : 'menu',
    }
    return render(request, 'pages.html', context)

def martabak(request, martabak_requested):
    status = 0
    try:
        availableMartabak = model_martabak.objects.get(slug = martabak_requested)
        if availableMartabak.exists():
            status = '200'
    except ObjectDoesNotExist:
        status = '404'
    context = {
        'martabak' : martabak_requested,
    }
    if status is '200':
        return render(request, 'detail.html', context)
    else:
        return redirect("Menu")
    

def error_404(request, exception):
    return render(request, '404.html')

def error_500(request):
    return render(request, '404.html')