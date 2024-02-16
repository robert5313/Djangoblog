from rest_framework import generics, filters
from .models import Article
from .serializers import ArticleSerializer
from .pagination import CustomPageNumberPagination

# Create your views here.
class ArticleList(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    pagination_class = CustomPageNumberPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'author', 'category', 'summary', 'content']

class ArticleDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer