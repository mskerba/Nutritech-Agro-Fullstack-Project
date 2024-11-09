from .models import Product, Feedback
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProductSerializer, FeedbackSerializer

class ProductListCreateView(generics.ListCreateAPIView):
    print(generics.ListCreateAPIView)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailDeleteView(generics.RetrieveDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Feedback endpoint

class FeedbackCreateView(generics.CreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

    def perform_create(self, serializer):
        product_id = self.request.data.get("product")
        product = Product.objects.get(id=product_id)
        serializer.save(product=product)


