import React from "react";



function BrokemonInfo(){
    return(
        <div id="brokeInfoBody" className="w-75 my-5 mx-auto">
            <h2>Welcome to the Arena!</h2>
            <p className="mt-5">
                I'm building this game because I want to be the very best...
            </p>
            <p>
                ...at React and GraphQL. (See what I did there?) 
                I started building this section of my portfolio on Monday, the 1st of April, 2024.
                <em> No foolin!</em> (I'll stop now.) It started very simply--as a GraphQL call and console output.
                By Wednesday, I was fetching two random "Brokemon" and assigning their sprites and names to a pair of custom components.
            </p>
            <p>
                Over the weekend, I added react-Bootstrap Tab components to manage the game stages. 
                I re-named the intial screen the "Brokemon Lab" and began work on the Battle stage. 
                I upped the GraphQL and ES6 ante by diving deeper into the database to fetch movesets for my random pokemon,
                then filtering through them to only grab Special and Physical moves. 
                The only graphics I'm hosting for the game are the HUD backgrounds on the battle-field. 
                (Created in Adobe Illustrator and exported as SVG.) Everything else is custom CSS I set up.
                The animated GIFs are actually hosted by the poke-GQL site--I just feed the image components the source location at runtime. 
            </p>
            <p>
                Once I'm done setting up the HP bar component and fine-tuning the HUD placment, I'll be all set to move on to the battle function!
                After that, we can start writing results to the table. Almost there!
            </p>
            <p>--Brodie Vidrine (aka, Professor Broak, Professor Brillow), 4/7/24 </p>
        </div>
    )

}

export default BrokemonInfo