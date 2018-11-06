DROP TABLE IF EXISTS actors;

CREATE TABLE actors(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INTEGER,
    number_of_oscars INTEGER
);

INSERT INTO actors(name, age, number_of_oscars)
VALUES ('Leonardo DiCaprio', 41, 1),
('Jennifer Lawrence', 25, 1),
('Samuel L. Jackson', 67, 0),
('Meryl Streep', 66, 3),
('John Cho', 43, 0);

SELECT * FROM actors;


SELECT * FROM actors
WHERE number_of_oscars>1;

SELECT * FROM actors
WHERE age>30;
