# mindstrong

# Setup

> mkdir -p data/db

> npm install

> npm run build

> docker-compose build

> docker-compose up

# Seed the DB

> sh ./tools/seeds/conditions.sh
>
> sh ./tools/seeds/records.sh
>
> sh ./tools/seeds/users.sh

# API

## Records

> `Creates records in the db. Also used to seed the DB.`
> 
> POST http://localhost:3000/records

> `Returns 100 records (there are only 2 records, though, in the sampleset)`
> 
> GET http://localhost:3000/records?count=100

> `Returns the first record`
> 
> GET http://localhost:3000/records

> `Returns the next record. When this returns an empty array, they are "done".`
> 
> GET http://localhost:3000/records?start={PREVIOUS_RECORD_ID}

> `Returns the next n records`
> 
> GET http://localhost:3000/records?start={PREVIOUS_RECORD_ID}&count=n

> `Add conditions to a record.`
> 
> POST http://localhost:3000/records/{RECORD_ID}/conditions
>
> [ {Array of Condition Id's} ]

## Conditions

> `Creates conditions in the db. Also used to seed the DB.`
> 
> POST http://localhost:3000/conditions

> `Returns 150 conditions (there are only 123 conditions, though, in the sampleset)`
> `This isn't needed for the exercise.`
> 
> GET http://localhost:3000/conditions?count=150

> `Returns the all conditions`
> 
> GET http://localhost:3000/conditions

> `Returns the next conditions.`
> `This isn't needed for the exercise.`
> 
> GET http://localhost:3000/conditions?start={PREVIOUS_CONDITION_ID}

> `Returns the next n conditions`
> `This isn't needed for the exercise.`
> 
> GET http://localhost:3000/conditions?start={PREVIOUS_CONDITION_ID}&count=n

## Users

> `Creates users in the db. Also used to seed the DB.`
> 
> POST http://localhost:3000/users