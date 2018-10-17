from faker import Faker
fake = Faker()

expertise_area = ["Data Science",
                  "Backend Engineer",
                  "Frontend Engineer",
                  "Full-stack Engineer",
                  "Software Architect"]

gender = ['Female', 'Male', 'Other']


class Mentee():
    def __init__(self, name: str, criterion: dict, gender=None):
        self.name = name
        self.criterion = criterion
        self.gender = gender

    def get_criterion(self):
        return self.criterion


class Mentor():
    def __init__(self, name: str, expertises: set, meet: set, location={}, gender=''):
        self.name = name
        self.expertises = list(expertises)
        self.meet = list(meet)
        self.location = list(location)
        self.gender = gender

        if not name:
            raise AttributeError()

    def __repr__(self):
        return str(self.__dict__)

    def has_matching_criteria(self, cKey: str, cVal) -> bool:
        if hasattr(self, cKey):
            if cVal in self.__getattribute__(cKey):
                return True
        return False


def gen_Mentors():
    yield Mentor(fake.name(),
                 expertises={fake.random.choice(expertise_area)},
                 meet={'offline'},
                 location={'Manchester'},
                 gender=fake.random.choice(gender))