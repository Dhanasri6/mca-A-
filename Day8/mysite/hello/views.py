from django.http impoprt HttpResponse
def home(request):
    return HttpResponse("Hello,Django!")
