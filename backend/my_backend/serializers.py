from rest_framework import serializers
from .models import Product, Feedback

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ["name", "stars", "msg", "date"]

class ProductSerializer(serializers.ModelSerializer):
    feedbacks = FeedbackSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'type', 'title', 'description', 'price', 'feedbacks']
