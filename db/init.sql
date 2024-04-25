-- Active: 1706424005276@@localhost@3306@anime_slayer
-- Each Anime have : id, title , image , description , rating  , episodes , 

CREATE TABLE anime (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    rating FLOAT NOT NULL
);

-- episode table
-- Path: anime-slayer/db/init.sql

CREATE TABLE episode (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    video VARCHAR(255) NOT NULL,
    anime_id INT NOT NULL,
    FOREIGN KEY (anime_id) REFERENCES anime(id)
);

-- user table

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);



-- add Row Naruto into anime table

INSERT INTO anime (title, image, description, rating) VALUES ('Naruto', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0_v05gSXVzjGcvcoM-ALL76vXXzPOj2bow&s', 'Naruto is a young shinobi with an incorrigible knack for mischief. He’s got a wild sense of humor, but Naruto is completely serious about his mission to be the world’s greatest ninja!', 4.5);