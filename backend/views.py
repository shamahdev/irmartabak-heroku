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
    try:
        context = {
        'martabak' : martabak_requested,
        }
        availableMartabak = model_martabak.objects.get(slug = martabak_requested)
    except AttributeError:
        return render(request, 'detail.html', context)
    except ObjectDoesNotExist:
        return redirect("Menu")
    return render(request, "detail.html", context)
    

def error_404(request, exception):
    return render(request, '404.html')

def error_500(request):
    return render(request, '404.html')