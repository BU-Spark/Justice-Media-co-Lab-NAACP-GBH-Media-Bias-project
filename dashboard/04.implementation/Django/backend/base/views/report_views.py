from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Report
from base.serializer import ReportSerializer

from rest_framework import status
# Create your views here.


@api_view(['GET'])
def getReports(request):
    reports = Report.objects.all()
    serializer = ReportSerializer(reports, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getReport(request, pk):
    report = Report.objects.get(_id=pk)
    serializer = ReportSerializer(report, many=False)
    return Response(serializer.data)
