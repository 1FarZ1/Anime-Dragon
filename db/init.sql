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

 --@block 
 -- add this 
  --
-- // 1 Naruto ناروتو: سلسلة مانغا يابانية كتبها ورسمها ماساشي كيشيموتو. تحكي قصة ناروتو أوزوماكي، النينجا الشاب الذي يسعى للتعرف من قبل زملائه ويحلم بأن يصبح أعظم النينجا في قريته، ويتابع مغامراته وتطوره في طريقه نحو تحقيق هذا الهدف. https://cdn.myanimelist.net/images/anime/13/17405.jpg 2024-04-25 17:12:00.829 2024-04-25 17:12:00.829 8.22 1 13 2002-10-03 00:00:00.000 مانجا
-- // 2 One Piece ون بيس: سلسلة مانغا يابانية كتبها ورسمها إييتشيرو أودا. تتبع قصة مونكي دي لوفي وطاقمه الذي يبحر عبر المحيطات في البحث عن كنز أسطوري يُعرف باسم ون بيس، وهو الكنز الذي يمكن أن يجعل صاحبه ملك القراصنة. https://cdn.myanimelist.net/images/anime/6/73245.jpg 2024-04-25 17:49:58.923 2024-04-25 17:49:58.923 9.01 1 13 1999-10-20 00:00:00.000 مانجا
-- // 3 Attack on Titan هجوم العمالقة: سلسلة مانغا يابانية كتبها ورسمها هاجيمي إيساياما. تصور عالمًا حيث تكاد البشرية تكون على شفا الانقراض بسبب مخلوقات عمالقة بشرية المعروفة باسم "العمالقة"، وتدور حول معركة البشرية من أجل البقاء. https://cdn.myanimelist.net/images/anime/10/47347.jpg 2024-04-25 17:49:58.923 2024-04-25 17:49:58.923 8.01 1 13 2013-04-07 00:00:00.000 مانجا
-- // 4 Dragon Ball Z دراغون بول زد: تتبع مغامرات غوكو وأصدقائه وهم يدافعون عن الأرض ضد الأشرار، مثل المقاتلين الفضائيين والروبوتات القوية، وتركز على قوة الصداقة والتضحية في مواجهة الأخطار الشديدة. https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteZW2MBwjdeyir_OJ6t16BZCRYzdA5HrN3XgL0hfy_g&s 2024-04-25 17:49:58.923 2024-04-25 17:49:58.923 8.01 1 13 1989-04-26 00:00:00.000 مانجا
-- // 5 Death Note ديث نوت: تتبع قصة طالب في المدرسة الثانوية يكتشف دفترًا خارقًا يمكنه قتل أي شخص يكتب اسمه فيه، ويستخدم هذه القوة لمحاربة الجريمة بطرق معقدة ومثيرة. https://cdn.myanimelist.net/images/anime/9/9453.jpg 2024-04-25 17:49:58.923 2024-04-25 17:49:58.923 8.01 1 13 2006-10-04 00:00:00.000 مانجا
-- // 6 Fullmetal Alchemist: Brotherhood فولميتال ألكيميست: بروذرهود: تتبع مغامرات الأخوين إدوارد وألفونس إلريك في رحلتهما للبحث عن حجر الفيلسوف، الذي يُعتقد أنه يمكنه إعادة هيكلة الجسد واستعادة أجزاء منهما التي فقدت. https://cdn.myanimelist.net/images/anime/1223/96541.jpg 2024-04-25 17:49:58.923 2024-04-25 17:49:58.923 9.2 1 13 2009-04-05 00:00:00.000 مانجا
-- // 7 My Hero Academia بطلي الأكاديمية: تدور في عالم يمتلك فيه الجميع تقريبًا قدرات خارقة تُعرف بـ "الغرائز"، وتركز على نضال إيزوكو ميدوريا لتحقيق حلمه في أن يصبح بطلاً خارقًا برغم عدم وجود لديه قوة خاصة. https://cdn.myanimelist.net/images/anime/10/78745.jpg 2024-04-25 17:49:58.923 2024-04-25 17:49:58.923 8.8 1 13 2016-04-03 00:00:00.000 مانجا
-- // 8 Demon Slayer: Kimetsu no Yaiba قاتل الشياطين: كيميتسو نو يايبا: تتبع حياة تانجيرو كامادو الذي يصبح قاتل شياطين بعد أن تم ذبح عائلته من قبل الشياطين، وهو يسعى لتحويل أخته نيزوكو إلى إنسان مرة أخرى والانتقام لعائلته. https://cdn.myanimelist.net/images/anime/1286/99889.jpg 2024-04-25 17:49:58.923 2024-04-25 17:49:58.923 7.7 1 13 2019-04-06 00:00:00.000 مانجا
-- // 9 Steins;Gate ستينز; جيت: تتبع مجموعة من الأصدقاء الذين يكتشفون أنهم يمكنهم إرسال رسائل إلى الماضي باستخدام ميكروويف وهاتف خلوي، وتدور حول محاولاتهم لتغيير مجرى الأحداث وتفادي النتائج السلبية. https://cdn.myanimelist.net/images/anime/5/73199.jpg 2024-04-25 17:49:58.923 2024-04-25 17:49:58.923 8.1 1 13 2011-04-06 00:00:00.000 مانجا
-- // 10 Hunter x Hunter هنتر اكس هنتر: تتبع حياة جون فريكس، الذي يبحث عن والده المفقود ويسعى ليصبح صيادًا ليكتشف أسرار عالم الصيادين ويتعلم كيفية استخدام قواه الخاصة في هذا العالم المليء بالتحديات والمغامرات. https://cdn.myanimelist.net/images/anime/11/33657.jpg 2024-04-25 17:49:58.923 2024-04-25 17:49:58.923 8.9 1 13 2011-10-02 00:00:00.000 مانجا

INSERT INTO anime (
  title,
  description,
  image,
  rating,
  studioId,
  minAge,
  releaseDate,
  `source`
) VALUES 
(
  'Blue Lock',
  'بلو لوك: تدور حول مجموعة من اللاعبين في كرة القدم اليابانية يُطلب منهم الانضمام إلى برنامج تدريبي استثنائي يهدف إلى إيجاد الفتى الوحيد الذي يمكنه تحقيق الفوز للمنتخب الياباني في كأس العالم.',
  'https://cdn.myanimelist.net/images/anime/1819/120312.jpg',
  8.5,
  80, -- Insert the appropriate studioId here
  13,
  '2022-10-03',
  'مانجا'
);
-- (
--   'One Piece',
--   'ون بيس: سلسلة مانغا يابانية كتبها ورسمها إييتشيرو أودا. تتبع قصة مونكي دي لوفي وطاقمه الذي يبحر عبر المحيطات في البحث عن كنز أسطوري يُعرف باسم ون بيس، وهو الكنز الذي يمكن أن يجعل صاحبه ملك القراصنة.',
--   'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
--   9.01,
--   62, -- Insert the appropriate studioId here
--   13,
--   '1999-10-20',
--   'مانجا'
-- ),
-- (
--   'Attack on Titan',
--   'هجوم العمالقة: سلسلة مانغا يابانية كتبها ورسمها هاجيمي إيساياما. تصور عالمًا حيث تكاد البشرية تكون على شفا الانقراض بسبب مخلوقات عمالقة بشرية المعروفة باسم "العمالقة"، وتدور حول معركة البشرية من أجل البقاء.',
--   'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
--   8.01,
--   63, -- Insert the appropriate studioId here
--   13,
--   '2013-04-07',
--   'مانجا'
-- ),
-- (
--   'Dragon Ball Z',
--   'دراغون بول زد: تتبع مغامرات غوكو وأصدقائه وهم يدافعون عن الأرض ضد الأشرار، مثل المقاتلين الفضائيين والروبوتات القوية، وتركز على قوة الصداقة والتضحية في مواجهة الأخطار الشديدة.',
--   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteZW2MBwjdeyir_OJ6t16BZCRYzdA5HrN3XgL0hfy_g&s',
--   8.01,
--   64, -- Insert the appropriate studioId here
--   13,
--   '1989-04-26',
--   'مانجا'
-- ),
-- (
--   'Death Note',
--   'ديث نوت: تتبع قصة طالب في المدرسة الثانوية يكتشف دفترًا خارقًا يمكنه قتل أي شخص يكتب اسمه فيه، ويستخدم هذه القوة لمحاربة الجريمة بطرق معقدة ومثيرة.',
--   'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
--   8.01,
--   65, -- Insert the appropriate studioId here
--   13,
--   '2006-10-04',
--   'مانجا'
-- ),
-- (
--   'Fullmetal Alchemist: Brotherhood',
--   'فولميتال ألكيميست: بروذرهود: تتبع مغامرات الأخوين إدوارد وألفونس إلريك في رحلتهما للبحث عن حجر الفيلسوف، الذي يُعتقد أنه يمكن إعادة هيكلة الجسد واستعادة أجزاء منهما التي فقدت.',
--   'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
--   9.2,
--   65, -- Insert the appropriate studioId here
--   13,
--   '2009-04-05',
--   'مانجا'
-- ),
-- (
--   'My Hero Academia',
--   'بطلي الأكاديمية: تدور في عالم يمتلك فيه الجميع تقريبًا قدرات خارقة تُعرف بـ "الغرائز"، وتركز على نضال إيزوكو ميدوريا لتحقيق حلمه في أن يصبح بطلاً خارقًا برغم عدم وجود لديه قوة خاصة.',
--   'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
--   8.8,
--   66, -- Insert the appropriate studioId here
--   13,
--   '2016-04-03',
--   'مانجا'
-- ),
-- (
--   'Demon Slayer: Kimetsu no Yaiba',
--   'قاتل الشياطين: كيميتسو نو يايبا: تتبع حياة تانجيرو كامادو الذي يصبح قاتل شياطين بعد أن تم ذبح عائلته من قبل الشياطين، وهو يسعى لتحويل أخته نيزوكو إلى إنسان مرة أخرى والانتقام لعائلته.',
--   'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
--   7.7,
--   70, -- Insert the appropriate studioId here
--   13,
--   '2019-04-06',
--   'مانجا'
-- ),
-- (
--   'Steins;Gate',
--   'ستينز; جيت: تتبع مجموعة من الأصدقاء الذين يكتشفون أنهم يمكنهم إرسال رسائل إلى الماضي باستخدام ميكروويف وهاتف خلوي، وتدور حول محاولاتهم لتغيير مجرى الأحداث وتفادي النتائج السلبية.',
--   'https://cdn.myanimelist.net/images/anime/5/73199.jpg',
--   8.1,
--   71, -- Insert the appropriate studioId here
--   13,
--   '2011-04-06',
--   'مانجا'
-- ),
-- (
--   'Hunter x Hunter',
--   'هنتر اكس هنتر: تتبع حياة جون فريكس، الذي يبحث عن والده المفقود ويسعى ليصبح صيادًا ليكتشف أسرار عالم الصيادين ويتعلم كيفية استخدام قواه الخاصة في هذا العالم المليء بالتحديات والمغامرات.',
--   'https://cdn.myanimelist.net/images/anime/11/33657.jpg',
--   8.9,
--   77, -- Insert the appropriate studioId here
--   13,
--   '2011-10-02',
--   'مانجا'
-- );

-- update release date of naruto
UPDATE anime SET releaseDate = '2002-10-03' WHERE title = 'Naruto';


-- insert into 
--     studio (
--       name
--     )
-- values
--     ('Toei Animation'),
--     ('Studio Ghibli'),
--     ('Madhouse'),
--     ('Kyoto Animation'),
--     ('Bones'),
--     ('Sunrise'),
--     ('Production I.G'),
--     ('Shaft'),
--     ('A-1 Pictures'),
--     ('Wit Studio'),
--     ('TMS Entertainment'),
--     ('J.C.Staff'),
--     ('White Fox'),
--     ('MAPPA'),
--     ('Pierrot'),
--     ('Trigger'),
--     ('Lerche'),
--     ('Gonzo'),
--     ('MADBOX'),
--     ('Doga Kobo'),
--     ('Seven Arcs'),
--     ('Ufotable'),
--     ('Xebec'),
--     ('Brains Base'),
--     ('Satelight'),
--     ('Nippon Animation'),
--     ('Silver Link'),
--     ('feel.'),
--     ('CloverWorks'),
--     ('TNK');


-- add this two episodes to the episode table
-- 1 The Start of the MasterPiece The First 1 2024-04-25 17:17:10.264 2024-04-25 17:17:10.264 uploads/episodes/2.mp4 0 1
--  2 The Hokage Day Naruto goes into Being the hokage 1 2024-04-25 17:52:19.916 2024-04-25 17:52:19.916 uploads/episodes/1.mp4 0 2

-- INSERT INTO episode (title, description, `animeId`, `videoPath`,rating,number) VALUES
-- ('The Start of the MasterPiece', 'The First', 4, 'uploads/episodes/2.mp4', 7, 1),
-- ('The Hokage Day', 'Naruto goes into Being the hokage', 4, 'uploads/episodes/1.mp4', 8, 2);


-- add this users to the user table
-- //1 fbekkouche149@gmail.com $2b$10$lzlG21ua421u1kDHmBXGQewytBUJFMkKcTqaIVfBK/SdeYDvuabXC Farz USER uploads\images\1714434504487-Kakashi _ Naruto shippuden_.jpg 2024-04-29 23:48:24.668 2024-04-29 23:48:24.668
-- //2 fbekkouche150@gmail.com $2b$10$hdzcIQ/.2Efury0R9PKffeNrv0WWn8Lone8AjQC6Ul6bRN1uTz1oW Farz USER uploads\images\1714434683932-Kakashi _ Naruto shippuden_.jpg 2024-04-29 23:51:24.037 2024-04-29 23:51:24.037
-- //3 fbekkouche159@gmail.com $2b$10$tLt4JcxUmRA1b/7ji9MCjeCDkWw/GasFglTdXyDs4tztxcyAZvT9C FarZ USER uploads\images\1714438442725-IMG_Ù¢Ù Ù¢Ù£Ù¡Ù Ù¢Ù¦_Ù¡Ù¨Ù¢Ù©Ù Ù¤.jpg 2024-04-30 00:54:03.061 2024-04-30 00:54:03.061
-- //4 fbekkouche169@gmail.com $2b$10$e.rxuW2H9JvNsE8.90pEzu9JLL/d1m2I.AZ.uyMdHvzHZ0ILrYNI2 FarZ USER uploads\images\1714438477720-IMG_Ù¢Ù Ù¢Ù£Ù¡Ù Ù¢Ù¦_Ù¡Ù¨Ù¢Ù©Ù Ù¤.jpg 2024-04-30 00:54:37.974 2024-04-30 00:54:37.974

INSERT INTO user (name, email, password, avatar) VALUES
(
  'Farz',
  'fbekkouche149@gmail.com',
  '$2b$10$lzlG21ua421u1kDHmBXGQewytBUJFMkKcTqaIVfBK/SdeYDvuabXC',
  'uploads\images\1714434504487-Kakashi _ Naruto shippuden_.jpg'
),
(
  'Farz',
  'fbekkouche150@gmail.com',
  '$2b$10$hdzcIQ/.2Efury0R9PKffeNrv0WWn8Lone8AjQC6Ul6bRN1uTz1oW',
  'uploads\images\1714434683932-Kakashi _ Naruto shippuden_.jpg'
),
(
  'FarZ',
  'fbekkouche159@gmail.com',
  '$2b$10$tLt4JcxUmRA1b/7ji9MCjeCDkWw/GasFglTdXyDs4tztxcyAZvT9C',
  'uploads\images\1714438442725-IMG_Ù¢Ù Ù¢Ù£Ù¡Ù Ù¢Ù¦_Ù¡Ù¨Ù¢Ù©Ù Ù¤.jpg'
),
(
  'FarZ',
  'fbekkouche169@gmail.com',
  '$2b$10$e.rxuW2H9JvNsE8.90pEzu9JLL/d1m2I.AZ.uyMdHvzHZ0ILrYNI2',
  'uploads\images\1714438477720-IMG_Ù¢Ù Ù¢Ù£Ù¡Ù Ù¢Ù¦_Ù¡Ù¨Ù¢Ù©Ù Ù¤.jpg'
);
