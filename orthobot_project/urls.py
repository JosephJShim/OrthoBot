from django.contrib import admin
from django.shortcuts import render
from django.urls import path, re_path

def render_app(request):
    return render(request, 'index.html')

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('^', render_app),
]
