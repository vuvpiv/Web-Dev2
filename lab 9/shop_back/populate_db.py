import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

# Clear existing data
Product.objects.all().delete()
Category.objects.all().delete()

# Create 4 categories
electronics = Category.objects.create(name='Electronics')
clothing = Category.objects.create(name='Clothing')
books = Category.objects.create(name='Books')
home = Category.objects.create(name='Home & Kitchen')

# Create 20 products
products = [
    Product(name='Smartphone', price=699.99, description='Latest smartphone with OLED display', count=50, is_active=True, category=electronics),
    Product(name='Laptop', price=1299.99, description='High-performance laptop for professionals', count=30, is_active=True, category=electronics),
    Product(name='Wireless Headphones', price=149.99, description='Noise-cancelling Bluetooth headphones', count=100, is_active=True, category=electronics),
    Product(name='Smartwatch', price=249.99, description='Fitness tracking smartwatch', count=75, is_active=True, category=electronics),
    Product(name='Tablet', price=499.99, description='10-inch tablet with stylus support', count=40, is_active=True, category=electronics),
    Product(name='T-Shirt', price=19.99, description='Cotton crew neck t-shirt', count=200, is_active=True, category=clothing),
    Product(name='Jeans', price=49.99, description='Classic fit denim jeans', count=150, is_active=True, category=clothing),
    Product(name='Sneakers', price=89.99, description='Comfortable running sneakers', count=80, is_active=True, category=clothing),
    Product(name='Winter Jacket', price=129.99, description='Warm insulated winter jacket', count=60, is_active=True, category=clothing),
    Product(name='Hoodie', price=39.99, description='Soft fleece pullover hoodie', count=120, is_active=True, category=clothing),
    Product(name='Python Crash Course', price=29.99, description='Beginner-friendly Python programming book', count=90, is_active=True, category=books),
    Product(name='Clean Code', price=34.99, description='Guide to writing better software', count=70, is_active=True, category=books),
    Product(name='Django for Beginners', price=27.99, description='Web development with Django', count=55, is_active=True, category=books),
    Product(name='Design Patterns', price=42.99, description='Classic software design patterns book', count=45, is_active=True, category=books),
    Product(name='The Pragmatic Programmer', price=38.99, description='Essential tips for modern developers', count=65, is_active=True, category=books),
    Product(name='Coffee Maker', price=79.99, description='Programmable drip coffee maker', count=35, is_active=True, category=home),
    Product(name='Blender', price=59.99, description='High-speed kitchen blender', count=50, is_active=True, category=home),
    Product(name='Toaster', price=29.99, description='4-slice stainless steel toaster', count=45, is_active=True, category=home),
    Product(name='Knife Set', price=99.99, description='Professional 8-piece knife set', count=25, is_active=True, category=home),
    Product(name='Air Fryer', price=119.99, description='Digital air fryer with 5L capacity', count=40, is_active=True, category=home),
]

Product.objects.bulk_create(products)

print(f'Created {Category.objects.count()} categories and {Product.objects.count()} products')
