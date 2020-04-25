"""This module initializes the app"""
import os
from .app import create_app
from .models import db, User, BucketList, BucketItem

# app = create_app(os.getenv('APP_CONFIG'))
app = create_app(False)

from .views import *
