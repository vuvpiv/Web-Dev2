from models import Animal, Dog, Cat


def main():
    animal = Animal("Generic Animal", 5, "gray")
    dog = Dog("Buddy", 3, "brown", "Labrador")
    cat = Cat("Whiskers", 2, "white", True)

    animals = [animal, dog, cat]

    for a in animals:
        print(a)
        print(a.eat())
        print(a.sleep())
        print(a.speak())   # Polymorphism here
        print("-" * 40)

    print(dog.fetch())
    print(cat.climb())


if __name__ == "__main__":
    main()