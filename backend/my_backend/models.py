from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    # image = models.ImageField(upload_to='products/')
    type = models.CharField(max_length=50)
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class Feedback(models.Model):
    product = models.ForeignKey(Product, related_name='feedbacks', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    stars = models.IntegerField() 
    msg = models.TextField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Feedback by {self.name} - {self.stars} stars"
