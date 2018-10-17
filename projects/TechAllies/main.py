
# criteria_dict = { criteria_key : criteria_value } 
# example mentor has: 

mentor = {
    name: 'Lindsay Lohan',
    expertises : [ 'Data Science', 'Backend' ],
    meet : [ 'offline', 'online' ],
    location: ['Manchester'],   # if offline
    gender: 'Female'   # optional
 } 

def mentor_is_match(mentor, criteria) => bool:
    return filter(lambda c: mentor.has_criteria(c), criteria)

def get_criteria(user_data: list):
    pass

def filter_mentors(mentors: list, criterion: list) => list:
    pass

