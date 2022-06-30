
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "item" (description, image_url, user_id)
VALUES 
    ('a picture of mario', 'https://mario.nintendo.com/static/5173cb58b062e1ec02553be8ed1b8019/b2548/header-mario.png', 1);
	('a picture of luigi', 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-mario-wii-u/d/d7/406px-Luigi_Artwork_-_Super_Mario_3D_World.png', 2),
	('a picture of peach', 'https://static.wikia.nocookie.net/great-characters/images/b/b7/Uhuh.png/revision/latest?cb=20180624012247', 1);
	
INSERT INTO "user" ("username", "password")
VALUES 
('jeanlacosse', 'abc123')
('andrewleck', 'abc123');