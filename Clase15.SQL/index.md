CREATE DATABASE mibase;

-----------------------------------------------------
CREATE TABLE usuarios (id int primary key auto_increment not null, nombre varchar(50) not null, apellido varchar(50) not null, edad int, email varchar(50) not null);

SELECT * FROM usuarios;

INSERT INTO usuario (nombre, apellido, edad, email) VALUES ("Juan", "Perez", 23, "jp@mail.com");
INSERT INTO usuario (nombre, apellido, edad, email) VALUES ("Pedro", "Mei", 21, "pm@mail.com");
INSERT INTO usuario (nombre, apellido, edad, email) VALUES ("Juana", "Suarez", 25, "js@mail.com");

SELECT * FROM usuarios;

DELETE FROM usuarios WHERE id = 2;
UPDATE usuarios SET edad = 24;

SELECT * FROM usuarios;