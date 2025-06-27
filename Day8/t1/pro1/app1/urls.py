from django.urls import path
from . import views

urlpatterns=[
  path('divya/',views.divya,name='divya'),
  path('dhanush/',views.dhanush,name='dhanush'),
]
