CREATE TABLE projects (
	id serial,
	name integer
	);

CREATE TABLE updates (
	id serial,
    title character varying(50) ,
    description character varying(255) ,
    update_date date,
    comments character varying(255),
    likes integer,
    project_id integer,
    backers_only boolean,
	
	);

\COPY projects(name) 
FROM '/Users/Dilsher/Desktop/SDC/updates/projects.csv' DELIMITER ',' CSV HEADER;