from django.shortcuts import render

app_name = 'main'

def index(request):
    content = {
        'title': 'Главная',
    }
    
    return render(request, 'main/main.html', content)
