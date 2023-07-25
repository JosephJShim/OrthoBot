from django.contrib import admin
from django.shortcuts import render
from django.urls import path

def render_app(request):
    return render(request, 'index.html')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', render_app),
]
