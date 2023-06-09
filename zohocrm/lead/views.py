from django.shortcuts import render
from rest_framework import viewsets
from .models import Lead

from .serializers import Leadserializer
# Create your views here.


class LeadViewSet(viewsets.ModelViewSet):
    serializer_class =Leadserializer
    queryset = Lead.objects.all()


    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)
    
    def perform_create(self,serializer):
        serializer.save(created_by=self.request.user)