from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.
def home(request):
    return render(request,'home.html')
def about(request):
    return render(request,'about.html')
def day1(request):
    temp=loader.get_template('index6.html')
    return HttpResponse(temp.render())

def day2(request):
   temp=loader.get_template('index2.html')
   return HttpResponse(temp.render())

def day3(request):
    temp=loader.get_template('abc.html')
    return HttpResponse(temp.render())
   
def day4(request):
    temp=loader.get_template('Table.html')
    return HttpResponse(temp.render())
    
def day5(request):
    temp=loader.get_template('Table.html')
    return HttpResponse(temp.render())
def day6(request):
    temp=loader.get_template('index3.html')
    return HttpResponse(temp.render())
    
def day7(request):
    temp=loader.get_template('abc.html')
    return HttpResponse(temp.render())
   
    
def day8(request):
    temp=loader.get_template('index2.html')
    return HttpResponse(temp.render())
    
def day9(request):
    temp=loader.get_template('index3.html')
    return HttpResponse(temp.render())
    
def day10(request):
    temp=loader.get_template('Table.html')
    return HttpResponse(temp.render())
   
def day11(request):
     temp=loader.get_template('Nature.html')
     return HttpResponse(temp.render())
    
def day12(request):
    temp=loader.get_template('index3.html')
    return HttpResponse(temp.render())
   
def day13(request):
    temp=loader.get_template('Table.html')
    return HttpResponse(temp.render())
    
def day14(request):
    temp=loader.get_template('abc.html')
    return HttpResponse(temp.render())
def day15(request):
    temp=loader.get_template('Table.html')
    return HttpResponse(temp.render())
