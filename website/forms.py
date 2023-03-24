from django.forms import ModelForm, TextInput, EmailInput, Textarea, DateInput,FileInput, FileField, CharField
from .models import *



class ContactForm(ModelForm):
    class Meta:
        model = contactMessage
        fields = {'firstname', 'lastname', 'email', 'message'}

        widgets = {
            'firstname': TextInput(attrs={'placeholder': 'First Name'}),
            'lastname': TextInput(attrs={'placeholder': 'Last Name'}),
            'email': EmailInput(attrs={'placeholder': 'Your Email address'}),
            'message': Textarea(attrs={'placeholder': 'Your message'})
        }