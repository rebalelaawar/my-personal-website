const players = [
    {name: "Spencer Dinwiddie", imageSrc: "https://static01.nyt.com/images/2020/12/29/sports/28nba-dinwiddie-print/merlin_181653537_e2772c8d-f5e7-4e02-a7b0-812535f1a6f3-superJumbo.jpg?quality=75&auto=webp"},
    {name: "Mikal Bridges", imageSrc: "https://cdn.vox-cdn.com/thumbor/hjy9KfZDpy5kMhUrgNC_YLH-V-I=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24496995/1248008577.jpg"},
    {name: "Dorian Finney-Smith", imageSrc:"https://ahnfiredigital.com/wp-content/uploads/2023/02/USATSI_19958138_168386351_lowres-e1676483241242.jpg.webp"},
    {name : "Cam Johnson", imageSrc:"https://cdn.vox-cdn.com/thumbor/Q1y3bpRUExQUrGt8-Cgn0lAh9WY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24550584/1249916568.jpg"},
   {name: "Nic Claxton" , imageSrc : "https://www.amny.com/wp-content/uploads/2022/10/AP22295084068857-scaled.jpg"}
    
];

let currentIndex = 0;
const playerImage = document.getElementById("playerImage");
const playerName = document.getElementById("playerName");

function displayPlayer(index) {
    const player = players[index];
    playerImage.src = player.imageSrc;
    playerName.textContent = player.name;
}
function nextPlayer() {
    currentIndex = (currentIndex + 1) % players.length;
    displayPlayer(currentIndex); }

 displayPlayer(currentIndex);