const matches = [
    {
        date: "March 31, 2023",
        teams: "Chennai Super Kings vs Kolkata Knight Riders",
        venue: "Wankhede Stadium, Mumbai",
        time: "7:30 PM IST"
    },
    {
        date: "April 1, 2023",
        teams: "Sunrisers Hyderabad vs Rajasthan Royals",
        venue: "M. Chinnaswamy Stadium, Bangalore",
        time: "7:30 PM IST"
    },
    {
        date: "April 2, 2023",
        teams: "Delhi Capitals vs Gujarat Titans",
        venue: "EDEN Gardens, Kolkata",
        time: "7:30 PM IST"
    },
    {
        date: "April 3, 2023",
        teams: "Royal Challengers Bangalore vs Mumbai Indians",
        venue: "MA Chidambaram Stadium, Chennai",
        time: "7:30 PM IST"
    },
    {
        date: "April 4, 2023",
        teams: "Punjab Kings vs Lucknow Super Giants",
        venue: "Punjab Cricket Association IS Bindra Stadium, Mohali",
        time: "7:30 PM IST"
    },
    {
        date: "April 5, 2023",
        teams: "Kolkata Knight Riders vs Sunrisers Hyderabad",
        venue: "Eden Gardens, Kolkata",
        time: "7:30 PM IST"
    },
    {
        date: "April 6, 2023",
        teams: "Rajasthan Royals vs Delhi Capitals",
        venue: "Sawai Mansingh Stadium, Jaipur",
        time: "7:30 PM IST"
    },
    {
        date: "April 7, 2023",
        teams: "Lucknow Super Giants vs Chennai Super Kings",
        venue: "BRSABV Ekana Cricket Stadium, Lucknow",
        time: "7:30 PM IST"
    },
    {
        date: "April 8, 2023",
        teams: "Mumbai Indians vs Punjab Kings",
        venue: "Wankhede Stadium, Mumbai",
        time: "7:30 PM IST"
    },
    {
        date: "April 9, 2023",
        teams: "Gujarat Titans vs Royal Challengers Bangalore",
        venue: "Narendra Modi Stadium, Ahmedabad",
        time: "7:30 PM IST"
    }
];

const matchCardsContainer = document.getElementById('match-cards');

matches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.innerHTML = `
        <h3>${match.teams}</h3>
        <p><strong>Date:</strong> ${match.date}</p>
        <p><strong>Venue:</strong> ${match.venue}</p>
        <p><strong>Time:</strong> ${match.time}</p>
    `;
    matchCardsContainer.appendChild(card);
});