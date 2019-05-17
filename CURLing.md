curl -X PATCH -H 'Content-Type: application/json' --data '{ "board": "b1" }' http://localhost:4000/api/tasks/t4

curl -X POST -H 'Content-Type: application/json' --data '{"id": "t5", "board": "b1", "name": "Make i
t work!", "tags": [], "previewText": "hehey", "image": "https://www.gravatar.com/avatar/205e460b479e2e
5b48aec07710c08d50", "estimate": 0.5 }' http://localhost:4001/api/tasks

curl -X DELETE http://localhost:4000/api/tasks/t5
