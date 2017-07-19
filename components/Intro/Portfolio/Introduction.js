import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const propTypes = {};

const defaultProps = {};

const content = `
BoBinLee 
========
Educations
--------
* 2010.3 - 2015.8 성공회대학교 소프트웨어공학과 
* 2007.3 - 2010.2 숭문고등학교 

Technical Skills
--------
* Front-End
 * JS : ReactJS, jQuery, ES6 
 * CSS : Less, SASS
* Mobile
 * Android
* Back-End
 * Spring Framework, Spring Boot
 * NodeJS - Express
* DB
 * RDB ( MySQL, MariaDB, PostgreSQL ), MongoDB
* Collaboration
 * Slack, JIRA, Github, Trello, TeamViewer
* Usage
 * AWS
   * EC2, S3, RDS, ELB, Auto Scaling
 * Docker
 * Firebase
* Tool
 * Intellij IDEA, Webstorm, Android Studio
 * Sublime Text
 * SourceTree
 * Zeplin
 * Postman
`;

const Introduction = () => {
  return (
    <div dangerouslySetInnerHTML={{__html: marked(content)}}>
    </div>
  );
};

Introduction.propTypes = propTypes;
Introduction.defaultProps = defaultProps;

export default Introduction;
