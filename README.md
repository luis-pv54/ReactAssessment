
## TO COMPLETE THIS ASSESSMENT
1. Clone this repo
2. Start app in docker container ("docker compose up" in root directory) and access on your local network
3. Complete the tasks listed at the bottom
4. Upload the completed project to github
5. Paste a link to repo inside the google form under #1 JavaScript GraphQL Assessment: https://docs.google.com/forms/d/1_mNoOIj2KXoMuCoz84tbaMjKufu6UUfH4fp_TKQ8aWo


## REQUIREMENTS FOR COMPLETION
use this schema for graphql: https://studio.apollographql.com/public/countries/home

1. Add a new tab and new page to the app for continents (/continents), and display a list of all continents on that page.
- example of complete: 
![image](https://user-images.githubusercontent.com/67350795/176052107-b8831eeb-99c1-49a9-9c7a-099b6e800438.png)

2. In the /countries page, 
- when clicking on one of the countries names, add a mui dialog popup
- let the mui dialog popup query for the country clicked on and display all relevant information about the country inside the dialog
- example of complete: 
![image](https://user-images.githubusercontent.com/67350795/176052221-12500243-edab-4402-a1d1-a9b061fc6a0d.png)

3. On **every** page add a "favorite" button and subtitle with the number of favorites selected
- Each list item on each page should have a button with a star inside it
- That star should be yellow when toggled ON and gray when toggled OFF
- Each page should display the number of favorites on that page
- The home page should display all of the favorites from each page
- examples of complete: 
![image](https://user-images.githubusercontent.com/67350795/176052648-13eaf658-ce2b-4d70-966b-3909aed96a29.png)
![image](https://user-images.githubusercontent.com/67350795/176052674-1528a71b-2af7-4bf6-8faf-ba50b42699d2.png)
![image](https://user-images.githubusercontent.com/67350795/176052706-9ec576e4-2a9a-4c20-802e-b061d1c39a30.png)
