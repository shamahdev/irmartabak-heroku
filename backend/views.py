from django.shortcuts import render, redirect
from django.core.exceptions import ObjectDoesNotExist
from django.urls import reverse
from django.http import HttpResponsePermanentRedirect, Http404
from django.conf.urls import handler404
from database.models import martabak as model_martabak

def index(request):
    return render(request, 'index.html')

def pages(request, page_requested, additional_page="", last_pattern=""):
    if last_pattern:
        handler404 = error_404
    if page_requested != 'menu':
        context = {
            'page' : page_requested,
        }
        return render(request, 'pages.html', context)
    else:
        try:
            checkMartabak = model_martabak.objects.get(slug = additional_page)
            if checkMartabak:
                context = {
                    'page' : page_requested,
                    'martabak' : additional_page,
                }
                return render(request, 'detail.html', context)
        except ObjectDoesNotExist:
            return redirect("Menu")

def menu(request):
    context = {
        'page' : 'menu',
    }
    return render(request, 'pages.html', context)
    
def error_404(request, exception):
    return render(request, '404.html')

def error_500(request):
    return render(request, '404.html')