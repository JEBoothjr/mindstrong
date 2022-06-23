curl --header "Content-Type: application/json" \
  --request POST \
  --data @./tools/seeds/conditions.json \
  http://localhost:3000/conditions; echo : Seeding 'conditions' Complete