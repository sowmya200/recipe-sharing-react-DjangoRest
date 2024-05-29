from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='recipes/', null=True, blank=True)
    description = models.TextField(max_length=500, blank=True)
    ingredients = models.JSONField()  # Store ingredients as JSON
    instructions = models.JSONField() 
    servings = models.IntegerField(null=True, blank=True)
    cooking_time_hours = models.IntegerField(null=True, blank=True)
    cooking_time_minutes = models.IntegerField(null=True, blank=True)
    cuisine_type = models.CharField(max_length=100, blank=True)
    course_of_meal = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
