-- CREATE TABLE projects (
-- 	id serial PRIMARY KEY,
-- 	name character varying(50)
-- 	);

CREATE TABLE updates (
	id serial PRIMARY KEY,
    title character varying(50) ,
    description character varying(255) ,
    update_date date,
    comments character varying(255),
    likes integer,
    project_id integer,
    backers_only boolean
	)
CREATE INDEX ON updates (project_id);

\COPY projects(id,name) 
FROM '/Users/Dilsher/Desktop/SDC/updates/projects.csv' DELIMITER ',' CSV HEADER;

COPY updates (title,description,update_date,comments,likes,project_id,backers_only) FROM '/Users/Dilsher/Desktop/SDC/updates/updates2.csv' DELIMITER ',' CSV HEADER;
