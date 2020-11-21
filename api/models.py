from django.db import models

class Scraper(models.Model):

    # fields
    currency = models.CharField(max_length=250)
    frequency = models.IntegerField()
    value = models.FloatField()

    # default
    created_at = models.DateTimeField(auto_now_add=True)
    value_updated_at = models.DateTimeField(auto_now=True)