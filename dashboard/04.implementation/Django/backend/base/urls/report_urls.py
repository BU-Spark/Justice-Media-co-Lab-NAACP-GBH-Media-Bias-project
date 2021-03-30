from django.urls import path
from base.views import report_views as views

urlpatterns = [
    path('', views.getReports, name="reports"),
    path('<str:pk>/', views.getReport, name="report"),
]
