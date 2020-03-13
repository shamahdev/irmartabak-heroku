from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def pages(request, page_requested):
    context = {
        'page' : page_requested,
    }
    return render(request, 'pages.html', context)

def martabak(request, martabak_requested):
    pass

def error_404(request, exception):
    return render(request, 'exception.html')