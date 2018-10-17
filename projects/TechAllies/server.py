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

    for i in range(10):
        mentor = next(gen_Mentors())
        score = count_matches(mentor, data['criterion'])
        if score in mentors:
            mentors[score].append(mentor)
        else:
            mentors[score] = [mentor]

        # mentors.append((score, mentor))

    # sorted(mentors, key=lambda x: x[0])
    # mentors.sort(reverse=True)
    # resp = json.dumps(mentors)
    sorted_mentors = collections.OrderedDict(sorted(mentors.items()))
    print(sorted_mentors)
    return jsonify(sorted_mentors), 201


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


def count_matches(mentor: Mentor, criterion) -> bool:
    matches = list(
        filter(lambda c: mentor.has_matching_criteria(c, criterion[c]),
               criterion.keys()))
    count_m = 0
    for m in matches:
        if m:
            count_m += 1
    return count_m


if __name__ == '__main__':
    app.run()
    # main()
