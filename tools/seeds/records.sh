curl --header "Content-Type: application/json" \
  --request POST \
  --data @./tools/seeds/records.json \
  http://localhost:3000/records; echo : Seeding 'conditions' Complete