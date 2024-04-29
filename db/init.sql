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


-- insert into animes table , this releaqse dates
-- Naruto: October 3, 2002
-- One Piece: October 20, 1999
-- Attack on Titan: April 7, 2013
-- Dragon Ball Z: April 26, 1989
-- Death Note: October 4, 2006
-- Fullmetal Alchemist: Brotherhood: April 5, 2009
-- My Hero Academia: April 3, 2016
-- Demon Slayer: Kimetsu no Yaiba: April 6, 2019
-- Steins;Gate: April 6, 2011
-- Hunter x Hunter: October 2, 2011

--@ Block
-- set only the release date
UPDATE anime SET releaseDate = '2002-10-03' WHERE title = 'Naruto';
UPDATE anime SET releaseDate = '1999-10-20' WHERE title = 'One Piece';
UPDATE anime SET releaseDate = '2013-04-07' WHERE title = 'Attack on Titan';
UPDATE anime SET releaseDate = '1989-04-26' WHERE title = 'Dragon Ball Z';
UPDATE anime SET releaseDate = '2006-10-04' WHERE title = 'Death Note';
UPDATE anime SET releaseDate = '2009-04-05' WHERE title = 'Fullmetal Alchemist: Brotherhood';
UPDATE anime SET releaseDate = '2016-04-03' WHERE title = 'My Hero Academia';
UPDATE anime SET releaseDate = '2019-04-06' WHERE title = 'Demon Slayer: Kimetsu no Yaiba';
UPDATE anime SET releaseDate = '2011-04-06' WHERE title = 'Steins;Gate';
UPDATE anime SET releaseDate = '2011-10-02' WHERE title = 'Hunter x Hunter';



-- -- set the description for every anime based on this :
-- ناروتو: سلسلة مانغا يابانية كتبها ورسمها ماساشي كيشيموتو. تحكي قصة ناروتو أوزوماكي، النينجا الشاب الذي يسعى للتعرف من قبل زملائه ويحلم بأن يصبح أعظم النينجا في قريته، ويتابع مغامراته وتطوره في طريقه نحو تحقيق هذا الهدف.
-- ون بيس: سلسلة مانغا يابانية كتبها ورسمها إييتشيرو أودا. تتبع قصة مونكي دي لوفي وطاقمه الذي يبحر عبر المحيطات في البحث عن كنز أسطوري يُعرف باسم ون بيس، وهو الكنز الذي يمكن أن يجعل صاحبه ملك القراصنة.
-- هجوم العمالقة: سلسلة مانغا يابانية كتبها ورسمها هاجيمي إيساياما. تصور عالمًا حيث تكاد البشرية تكون على شفا الانقراض بسبب مخلوقات عمالقة بشرية المعروفة باسم "العمالقة"، وتدور حول معركة البشرية من أجل البقاء.
-- دراغون بول زد: تتبع مغامرات غوكو وأصدقائه وهم يدافعون عن الأرض ضد الأشرار، مثل المقاتلين الفضائيين والروبوتات القوية، وتركز على قوة الصداقة والتضحية في مواجهة الأخطار الشديدة.
-- ديث نوت: تتبع قصة طالب في المدرسة الثانوية يكتشف دفترًا خارقًا يمكنه قتل أي شخص يكتب اسمه فيه، ويستخدم هذه القوة لمحاربة الجريمة بطرق معقدة ومثيرة.
-- فولميتال ألكيميست: بروذرهود: تتبع مغامرات الأخوين إدوارد وألفونس إلريك في رحلتهما للبحث عن حجر الفيلسوف، الذي يُعتقد أنه يمكنه إعادة هيكلة الجسد واستعادة أجزاء منهما التي فقدت.
-- بطلي الأكاديمية: تدور في عالم يمتلك فيه الجميع تقريبًا قدرات خارقة تُعرف بـ "الغرائز"، وتركز على نضال إيزوكو ميدوريا لتحقيق حلمه في أن يصبح بطلاً خارقًا برغم عدم وجود لديه قوة خاصة.
-- قاتل الشياطين: كيميتسو نو يايبا: تتبع حياة تانجيرو كامادو الذي يصبح قاتل شياطين بعد أن تم ذبح عائلته من قبل الشياطين، وهو يسعى لتحويل أخته نيزوكو إلى إنسان مرة أخرى والانتقام لعائلته.
-- ستينز; جيت: تتبع مجموعة من الأصدقاء الذين يكتشفون أنهم يمكنهم إرسال رسائل إلى الماضي باستخدام ميكروويف وهاتف خلوي، وتدور حول محاولاتهم لتغيير مجرى الأحداث وتفادي النتائج السلبية.
-- هنتر اكس هنتر: تتبع حياة جون فريكس، الذي يبحث عن والده المفقود ويسعى ليصبح صيادًا ليكتشف أسرار عالم الصيادين ويتعلم كيفية استخدام قواه الخاصة في هذا العالم المليء بالتحديات والمغامرات.


--@ Block
UPDATE anime SET description = 'ناروتو: سلسلة مانغا يابانية كتبها ورسمها ماساشي كيشيموتو. تحكي قصة ناروتو أوزوماكي، النينجا الشاب الذي يسعى للتعرف من قبل زملائه ويحلم بأن يصبح أعظم النينجا في قريته، ويتابع مغامراته وتطوره في طريقه نحو تحقيق هذا الهدف.' WHERE title = 'Naruto';
UPDATE anime SET description = 'ون بيس: سلسلة مانغا يابانية كتبها ورسمها إييتشيرو أودا. تتبع قصة مونكي دي لوفي وطاقمه الذي يبحر عبر المحيطات في البحث عن كنز أسطوري يُعرف باسم ون بيس، وهو الكنز الذي يمكن أن يجعل صاحبه ملك القراصنة.' WHERE title = 'One Piece';
UPDATE anime SET description = 'هجوم العمالقة: سلسلة مانغا يابانية كتبها ورسمها هاجيمي إيساياما. تصور عالمًا حيث تكاد البشرية تكون على شفا الانقراض بسبب مخلوقات عمالقة بشرية المعروفة باسم "العمالقة"، وتدور حول معركة البشرية من أجل البقاء.' WHERE title = 'Attack on Titan';
UPDATE anime SET description = 'دراغون بول زد: تتبع مغامرات غوكو وأصدقائه وهم يدافعون عن الأرض ضد الأشرار، مثل المقاتلين الفضائيين والروبوتات القوية، وتركز على قوة الصداقة والتضحية في مواجهة الأخطار الشديدة.' WHERE title = 'Dragon Ball Z';
UPDATE anime SET description = 'ديث نوت: تتبع قصة طالب في المدرسة الثانوية يكتشف دفترًا خارقًا يمكنه قتل أي شخص يكتب اسمه فيه، ويستخدم هذه القوة لمحاربة الجريمة بطرق معقدة ومثيرة.' WHERE title = 'Death Note';
UPDATE anime SET description = 'فولميتال ألكيميست: بروذرهود: تتبع مغامرات الأخوين إدوارد وألفونس إلريك في رحلتهما للبحث عن حجر الفيلسوف، الذي يُعتقد أنه يمكنه إعادة هيكلة الجسد واستعادة أجزاء منهما التي فقدت.' WHERE title = 'Fullmetal Alchemist: Brotherhood';
UPDATE anime SET description = 'بطلي الأكاديمية: تدور في عالم يمتلك فيه الجميع تقريبًا قدرات خارقة تُعرف بـ "الغرائز"، وتركز على نضال إيزوكو ميدوريا لتحقيق حلمه في أن يصبح بطلاً خارقًا برغم عدم وجود لديه قوة خاصة.' WHERE title = 'My Hero Academia';
UPDATE anime SET description = 'قاتل الشياطين: كيميتسو نو يايبا: تتبع حياة تانجيرو كامادو الذي يصبح قاتل شياطين بعد أن تم ذبح عائلته من قبل الشياطين، وهو يسعى لتحويل أخته نيزوكو إلى إنسان مرة أخرى والانتقام لعائلته.' WHERE title = 'Demon Slayer: Kimetsu no Yaiba';
UPDATE anime SET description = 'ستينز; جيت: تتبع مجموعة من الأصدقاء الذين يكتشفون أنهم يمكنهم إرسال رسائل إلى الماضي باستخدام ميكروويف وهاتف خلوي، وتدور حول محاولاتهم لتغيير مجرى الأحداث وتفادي النتائج السلبية.' WHERE title = 'Steins;Gate';

UPDATE anime SET description = 'هنتر اكس هنتر: تتبع حياة جون فريكس، الذي يبحث عن والده المفقود ويسعى ليصبح صيادًا ليكتشف أسرار عالم الصيادين ويتعلم كيفية استخدام قواه الخاصة في هذا العالم المليء بالتحديات والمغامرات.' WHERE title = 'Hunter x Hunter';
