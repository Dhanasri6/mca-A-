from django.contrib import admin
from . import views

# Register your models here.
urlpatterns=[
    path('home/',views.home,name='home'),
]