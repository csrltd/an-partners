from django.shortcuts import render, redirect
from .models import *
from django.http import HttpResponse
from django.contrib import messages
from django.forms import *
from .forms import ContactForm


def index(request):
    page_title = 'Home'
    form = ContactForm()
    context = {'form': form, 'page_title': page_title}
    return render(request, 'index.html', context)

def contact(request):
    
    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent successfully.')
            return redirect('contact')  # Redirect to the contact page.
        else:
          
          messages.error(request, 'Your message has been not sent .')
    else:
        form = ContactForm()   
    return render(request, 'index.html', {'form': form})
       