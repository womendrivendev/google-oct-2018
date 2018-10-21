# TA Back-end Python Flask Server

## Dependency
Python3

## To install
`pip3 install -r requirements.txt`

## To run
`python3 server.py`

## API
POST to route: localhost:5000/mentees

```
curl -X POST \
  http://localhost:5000/mentees \
  -H 'content-type: application/json' \
  -d '{"criterion": {
      "gender": "Other"
	}
}'
```
