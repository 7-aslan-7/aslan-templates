from django.shortcuts import render
from .models import Category

def index(request):
    categories = Category.objects.filter(parent_category__isnull=True)
    return render(request, 'categor.html', {'categories': categories})

