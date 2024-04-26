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

INSERT INTO anime (title, description, image) VALUES
('One Piece', 'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It follows the adventures of Monkey D. Luffy, a young pirate whose dream is to find the One Piece, the greatest treasure in the world.', 'https://cdn.myanimelist.net/images/anime/6/73245.jpg'),
('Attack on Titan', 'Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It depicts a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans.', 'https://cdn.myanimelist.net/images/anime/10/47347.jpg'),
('Dragon Ball Z', 'Dragon Ball Z follows the adventures of Goku and his friends as they defend Earth against villains ranging from intergalactic space fighters and conquerors, unnaturally powerful androids, and nearly indestructible creatures.', 'https://cdn.myanimelist.net/images/anime/6/52045.jpg'),

-- add Row Naruto into episode table

INSERT INTO episode (title, description, videoPath, animeId) VALUES ('The Start of the MasterPiece', 'The First' ,'uploads/episodes/2.mp4', 1);

--@ Block
INSERT INTO episode (title, description, videoPath, animeId) VALUES ('The Hokage Day', 'Naruto goes into Being the hokage' ,'uploads/episodes/1.mp4', 1);