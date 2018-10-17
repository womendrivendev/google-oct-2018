# criteria_dict = { criteria_key : criteria_value }
# example mentor has:
import collections

from flask import Flask, request, jsonify
from Mentors import Mentor, gen_Mentors

app = Flask(__name__)


# c = {'expertise': ['Data Science', 'Backend'],
#      'meet': ['offline', 'online'],
#      'location': ['Manchester'],   # if offline
#      'gender': 'Female'   # optional
#      }

@app.route("/")
def hello():
    return "Hello World!"


@app.route("/mentees", methods=["POST"])
def post_mentee():
    # header needs to be application/json
    data = request.get_json()

    mentors = {}  # {(mentor1, score), (mentor2, score)}

    print("criteria", data['criterion'])
    for i in range(10):
        mentor = next(gen_Mentors())
        print('mentor', mentor)

        matches = find_matches(mentor, data['criterion'])
        score = len(matches)

        print("matching criteria:", matches)
        mentor = mentor.__repr__()

        if score in mentors:
            mentors[score].append(mentor)
        else:
            mentors[score] = [mentor]
    return jsonify(mentors), 201


# takes in user form data
# respond with matches

#
# mentor = {
#     'name': 'Lindsay Lohan',
#     'expertises': ['Data Science', 'Backend'],
#     'meet': ['offline', 'online'],
#     'location': ['Manchester'],   # if offline
#     'gender': 'Female'   # optional
# }
#
# mentee = {
#     'name': 'Lindsay Lohan',
#     'criterion': {'expertise': ['Data Science', 'Backend'],
#                   'meet': ['offline', 'online'],
#                   'location': ['Manchester'],   # if offline
#                   'gender': 'Female'   # optional
#                   },
#     'gender': 'Female'   # optional
# }
#


def find_matches(mentor: Mentor, criterion) -> bool:
    matches = []
    for c in criterion.keys():
        match = mentor.has_matching_criteria(c, criterion[c])
        print('matches', match)
        if len(match) > 0:
            matches.append(c)

    return matches


if __name__ == '__main__':
    app.run()
    # main()
