import React from 'react';
import NavBar from './components/NavBar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import logo from './logo.svg';


function About() {
  return (
    <Container fluid className="bgc">
            <NavBar></NavBar>
            <Row className="w-75 mx-auto contentArea" >
                <Col >
                  <h1 className="mt-5 mb-5 mx-auto w-75">About</h1>
                  <p className="mx-auto w-75">
                    My name is Brodie Vidrine. I've been writing code for the web for over a decade.
                    <br></br>
                    <br></br>
                    My journey into programming didn't start in Computer Science. I was hired to shoot, direct, edit, and publish math DVDs and ROMs.
                    While flying to Nebraska to film Algebra problems has its own charms, 
                    the company's web-developer seemed to be having more fun writing minigames in Flash. 
                    So, I purchased a book on Object Oriented Programming in ActionScript and started learning in my free time. 
                    I showed my bosses the stuff I built and they agreed to let me help out with the programming duties.
                    And then I fell into the deep end...
                    <br></br>
                    <br></br>
                    The lead programmer suddenly left his position when we were in the middle of a <span style={{fontStyle:"italic"}}>huge</span> project with Pearson Education.
                    I had to finish out an interactive streaming video player that was going to be used in schools and universties across the country.
                    I'm proud to say I completed the project in a timely fashion and I even helped Pearson troubleshoot a firewall issue with an important client in NYC during the beta testing phase.
                    Within a year of learning ActionScript, I decided to leave my job and enroll in the University of Louisiana at Lafayette's Computer Science program. 
                    <br></br>
                    <br></br>
                    While at ULL, I took a semester of intro Python and another semester of object-oriented-programming for C++. As I was completing these courses, Steve Jobs announced that Flash would not be supported on the new iPad.
                    This was of great concern to my old employers because they'd built a library of education minigames in Flash for their own cloud-based app. They asked me to build an HTML5/JavaScript prototype of their flagship game, Flash Card Math.
                    After trying out a few other developers, my bosses offered me the chance to work remote, full-time, at a substantially increased hourly rate.
                    After completing my second semester at ULL, I returned to work for Ascend Math.
                    <br></br>
                    <br></br>
                    That was 2013. Since then, I've lead a team of temp offshore developers in the aforementioned Flash to HTML5 Canvas conversion project. 
                    My next major project was creating an in-house interactive video module. 
                    It allowed non-programmers to write XML problem set for our lesson page's video section. 
                    10 years later, the CX team is still creating fresh problem sets for every lesson they create. 
                    <br></br>
                    <br></br>
                    Our next major project was migrating from Struts 1 to Spring MVC. 
                    I was tasked with completing the UI side conversion, updating ancient pages with Web 2.0 best practices. 
                    We took pages that were heavily reliant on session attributes and moved to AJAX driven by RESTful services.
                    I will forever be grateful to my offshore colleagues for their help getting me started with server side programming.
                    They were generous enough to review my early Java code and give me pointers when I needed to debug. 
                    <br></br>
                    <br></br>
                    Today, I touch every part of the stack on most of my sprint items. 
                    That reminds me, we've been scrumming it up (Agile Development) every weekday morning for the last 7 years. 
                    As I perform analysis and code, I touch page controllers, APIs (from the endpoint to the DAO), and I update the app's DB as needed.
                    <br></br>
                    <br></br>
                    Unfortunately, we have lost some important contracts over the last couple of years and I now find myself looking for my next opportunity. 
                    I hope I can be of use to your organization. I'm extremely loyal and I genuinely love learning and helping out.
                    <br></br>
                    <br></br>
                    Thanks for reading,
                    <br></br>
                    Brodie Vidrine
                  </p>
                </Col>
            </Row>
    </Container>
  );
}

export default About;