use cookingnow;

CREATE TABLE usuario(

correo varchar(100) PRIMARY KEY NOT NULL,
nombreU varchar(50) NOT NULL,
contrasenna varchar(100) NOT NULL

);

select * FROM usuario;

CREATE TABLE ingrediente(

idIngrediente integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombreI varchar(50) NOT NULL,
tipoI varchar(20) NOT NULL

);

select * FROM ingrediente;

CREATE TABLE receta(

idReceta integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombreR varchar(50) NOT NULL,
dificultad varchar(100) NOT NULL,
tipoR varchar(10) NOT NULL,
foto LONGBLOB NOT NULL,
instrucciones varchar(2000) NOT NULL,
fkIngrediente integer NOT NULL,
FOREIGN KEY(fkIngrediente) REFERENCES ingrediente(idIngrediente)

);

select * FROM receta;

CREATE TABLE recetario(

idRecetario integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
fkReceta integer NOT NULL,
fkUsuario varchar(100) NOT NULL,
FOREIGN KEY(fkReceta) REFERENCES receta(idReceta),
CONSTRAINT FOREIGN KEY(fkUsuario) REFERENCES usuario(correo)

);

select * FROM recetario;




