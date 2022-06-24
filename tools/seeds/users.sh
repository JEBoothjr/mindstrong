curl --header "Content-Type: application/json" \
  --request POST \
  --data @./tools/seeds/users.json \
  http://localhost:3000/users; echo : Seeding 'users' Complete