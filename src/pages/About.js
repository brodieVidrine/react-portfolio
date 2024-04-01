import React from 'react';
import ContentWrapper from '../components/ContentWrapper';


function About() {
  return (
    <ContentWrapper>
        <h1>About</h1>

        <p className="mt-3">
          My name is Brodie Vidrine. I've been writing code for the web for over a decade.
          <br></br>
          <br></br>
          My journey into programming didn't start in Computer Science. Summit Interactive hired me to shoot, direct, edit, and publish math DVDs and ROMs.
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
          This was of great concern to my old employers because they'd built a library of educational minigames in Flash for their own cloud-based app. They asked me to build an HTML5/JavaScript prototype of their flagship game, Flash Card Math.
          They asked me, and several other developers, to develop a template for a plugin-free, touch-friendly mini-game template. My bosses offered me the chance to work remote, full-time, at a substantially increased hourly rate.
          After completing my second semester at ULL, I returned to work for Summit Interactive's sister company, Ascend Math. 
          <br></br>
          <br></br>
          I was put in charge of a small team of temp offshore developers and together we reprogrammed dozens of minigames over an intense summer. 
          By the end of my first year with Ascend, I'd rewritten all of the site's Flash modules and Java Applets with HTML5 and JavaScript.
          Getting Ascend Math to work without the use of plugins was a huge milestone and a great boon for the sales team. 
          <br></br>
          <br></br>
          Our next major system upgrade came when we migrated from Struts 1 to Spring MVC in 2016. 
          I was tasked with completing the UI side conversions, updating ancient pages with Web 2.0 best practices. 
          We took pages that were heavily reliant on session attributes and moved to AJAX driven by RESTful services.
          <br></br>
          <br></br>
          At the time, we decided to move our code repository from SVN (Apache Subversion) to Git. As our company "commited" to best practices, it made learning from my teammates much easier.
          I studied pull-requests to peek under the hood of our controllers, APIs, service layers, and DAOs. 
          I will forever be grateful to my offshore colleagues for their help getting me started with server side programming.
          They were generous enough to review my early Java code and give me pointers when I needed to debug. 
          To better cement my understanding, I built a <a href="http://top5.myascendmath.com" target="_blank"> full-stack in-house productivity app</a> for my boss.
          I'm proud to say the team still uses it on a weekly basis, 8 years later.
          <br></br>
          <br></br>
          Today, I touch every part of the stack on most of my sprint items.
          (That reminds me! We've been scrumming it up [Agile Development] every weekday morning for the last 7 years. Over 200 sprints!) 
          As I perform analysis and code, I touch page controllers, APIs (from the endpoint to the DAO), and I update the app's DB an SPs when needed.
          <br></br>
          <br></br>
          In my free time, I enjoy writing code in C# (Unity) and Luau (Roblox Studio). 
          I'm currently working on a "tower defense" game with my 9 year old. He builds the maps and I handle the scripting. 
          This brings me joy I can't describe in plain English.
          <br></br><br></br>
          Unfortunately, my current employer is restructuring and I now find myself looking for my next opportunity. 
          I hope I can be of use to your organization. I'm extremely loyal and I genuinely love learning and helping out.
          <br></br>
          <br></br>
          Thanks for reading,
          <br></br>
          Brodie Vidrine
        </p>
    
    </ContentWrapper>
  );
}

export default About;