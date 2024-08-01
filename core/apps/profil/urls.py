# apps/profile/urls.py
from django.urls import path
from .views import profile_view, update_profile

urlpatterns = [
    path('profil/', profile_view, name='profile'),
    path('update-profile/', update_profile, name='update_profile'),
]
