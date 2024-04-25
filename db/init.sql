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
-- title description and image , of naruto
-- Path: anime-slayer/db/init.sql

INSERT INTO anime (title, description, image) VALUES ('Naruto', 'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.', 'https://cdn.myanimelist.net/images/anime/13/17405.jpg');


-- add Row Naruto into episode table

INSERT INTO episode (title, description, videoPath, animeId) VALUES ('The Start of the MasterPiece', 'The First' ,'uploads/episodes/2.mp4', 1);