from django.shortcuts import render


def index(request):
    """
    Configure request for frontend
    Input: request
    Returns: responds with index.html for rendering in view
    """
    return render(request, 'frontend/index.html')