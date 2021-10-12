
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "food" (
	"id" serial NOT NULL,
	"food_name" varchar(255) NOT NULL,
	"user_id" integer NOT NULL,
	"carbs" integer NOT NULL,
	"sugar" integer NOT NULL,
	"fat" integer NOT NULL,
	"protein" integer NOT NULL,
	"calorie_total" integer NOT NULL,
	CONSTRAINT "food_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "user_food" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"food_id" integer NOT NULL,
	"date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "user_food_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "food" ADD CONSTRAINT "food_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "user_food" ADD CONSTRAINT "user_food_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "user_food" ADD CONSTRAINT "user_food_fk1" FOREIGN KEY ("food_id") REFERENCES "food"("id");


-- Table user
INSERT INTO "user" ("username", "password") VALUES('Ahmed', '1')
INSERT INTO "user" ("username", "password") VALUES('Anwar', '2')
INSERT INTO "user" ("username", "password") VALUES('Faysal', '3')
INSERT INTO "user" ("username", "password") VALUES('Ragow', '4')
INSERT INTO "user" ("username", "password") VALUES('Asif', '5')

--Table food
INSERT INTO "food" ("food_name", "user_id", "carbs", "sugar", "fat", "protein", "calorie_total") VALUES('Pizza', '1', '30', '5', '10', '30', '75' )
INSERT INTO "food" ("food_name", "user_id", "carbs", "sugar", "fat", "protein", "calorie_total") VALUES('Chicken', '2', '0', '0', '10', '45', '55' )
INSERT INTO "food" ("food_name", "user_id", "carbs", "sugar", "fat", "protein", "calorie_total") VALUES('Steak', '3', '0', '0', '20', '50', '75' )
INSERT INTO "food" ("food_name", "user_id", "carbs", "sugar", "fat", "protein", "calorie_total") VALUES('Pasta', '4', '40', '10', '1', '3', '54' )
INSERT INTO "food" ("food_name", "user_id", "carbs", "sugar", "fat", "protein", "calorie_total") VALUES('Rice', '5', '50', '1', '1', '4', '56' )


--Table user_food
INSERT INTO "user_food" ("user_id", "food_id", "date") VALUES('1', '3', current_timestamp )
INSERT INTO "user_food" ("user_id", "food_id", "date") VALUES('3', '4', current_timestamp )
INSERT INTO "user_food" ("user_id", "food_id", "date") VALUES('2', '5', current_timestamp )
INSERT INTO "user_food" ("user_id", "food_id", "date") VALUES('4', '6', current_timestamp )
INSERT INTO "user_food" ("user_id", "food_id", "date") VALUES('5', '7', current_timestamp )





