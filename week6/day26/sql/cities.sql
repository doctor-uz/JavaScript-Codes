DROP TABLE IF EXISTS cities;

CREATE TABLE cities(
    id SERIAL PRIMARY KEY,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    population INTEGER
);


INSERT INTO cities (city, country, population)
VALUES ('Berlin', 'Germany', 3000000);


INSERT INTO cities(city, country, population)
VALUES ('New York', 'USA', 9000000);


INSERT INTO cities(city, country, population)
VALUES ('Reykevik', 'Island', 3000000);



--
-- SELECT * FROM cities
-- WHERE id=2;
--
-- SELECT * FROM cities
-- WHERE id<2;


UPDATE cities SET population=8600000
WHERE id=2;


DELETE FROM cities
WHERE country='Island';


SELECT * FROM cities;
