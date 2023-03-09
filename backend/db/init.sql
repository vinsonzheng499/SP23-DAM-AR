CREATE DATABASE art;
use art;


CREATE TABLE art_table (
  art_id INT(10), --do i need to actually set the size?
  artist_id INT(10),
  art_name VARCHAR(50),
  museum_name VARCHAR(50),
  art_date DATE,
  art_era VARCHAR(20),
  art_type VARCHAR(20),
  image_id INT(10),
  art_description MEDIUMTEXT,
  audio_file_id INT(10),

  PRIMARY KEY (art_id),
  FOREIGN KEY (artist_id),
  FOREIGN KEY (image_id),
  FOREIGN KEY (audio_file_id)
);

INSERT INTO art_table
  (art_id, artist_id, art_name, museum_name, art_date, art_era, art_type, image_id, art_description, audio_file_id)
VALUES
  (1, 1, 'Mona lisa', 'Louvre Museum', '1503-03-28', 'Renaissance', 'Painting', 1, 'Nice work.', 1);


CREATE TABLE artist_table (
  artist_id INT(10),
  artist_name VARCHAR(50),
  artist_lifespan VARCHAR(50), --don't think we need it as proper date, since it would only be displayed as text ever
  image_id INT(10),
  biography MEDIUMTEXT,
  audio_file_id INT(10),

  PRIMARY KEY (artist_id),
  FOREIGN KEY (image_id),
  FOREIGN KEY (audio_file_id)
);

INSERT INTO artist_table
  (artist_id, artist_name, artist_lifespan, image_id, biography, audio_file_id)
VALUES
  (1, 'Da Vinci', '1452-04-15 to 1519-05-02', 2, 'Great guy.', 2);


CREATE TABLE image_table (
  image_id INT(10),
  image_blob BLOB, --do i need size? why is blob not recognized atm?

  PRIMARY KEY (image_id)
);

INSERT INTO image_table
  (image_id, image_blob)
VALUES
  (1, /*mona lisa img*/), --TODO: find out hwo to insert blob
                              --: should image blobs be stored in excel sheet?
  (2, /*da vinci img*/);


CREATE TABLE audio_table (
  audio_file_id INT(10),
  audio_file_address INT(10) --placeholder. TODO: figure out how to store
);

INSERT INTO audio_table
  (audio_file_id, audio_file_address)
VALUES
  (1, /*mona lisa audio*/),
  (2, /*da vinci audio*/);