CREATE DATABASE ESCOLA;

USE ESCOLA;

CREATE TABLE professor(
id int auto_increment primary key,
nome varchar (200),
especialidade varchar (200)
);


create table cursos(
id int auto_increment primary key,
nome varchar (200),
descricao varchar (200), 
professor_id int not null,
foreign key (professor_id) references professor(id)
);
);
drop table cursos;

insert into cursos (nome, descricao,professor_id) values 
("Edmar","banco de dado", 2);
