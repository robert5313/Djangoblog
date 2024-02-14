from django.urls import path
from .views import ArticleList, ArticleDetails

urlpatterns = [
    path('ArticleList/', ArticleList.as_view()),
    path('ArticleList/<int:pk>/', ArticleDetails.as_view()),
]