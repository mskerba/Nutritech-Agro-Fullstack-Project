from django.urls import path
from .views import ProductListCreateView, ProductDetailDeleteView, FeedbackCreateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),  # POST, GET for products
    path('products/<int:pk>/', ProductDetailDeleteView.as_view(), name='product-detail-delete'),  # GET, DELETE for a single product
    path('feedbacks/', FeedbackCreateView.as_view(), name='feedback-create'),  # POST for feedback
]



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
