var apiData = [];
var count = 0;
var page = 1;
var color = 0;

 window.onload = function() {
    getQuotes(1);
  };

 async function getQuotes(page) {
    try {
      const response = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`);
      const json = await response.json();
      apiData.push(json);
    } catch(error) {

    }
 };

// New Quote Button
const quoteBtn = document.getElementById('quote-btn');

// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

// Event Handler
quoteBtn.addEventListener('click', async () => {
    try {
        changeBackground();
        quote.innerHTML = apiData[page - 1].data[count].quoteText;
        author.innerHTML = apiData[page - 1].data[count].quoteAuthor;
        count++;
        if (count == 10) {
            page++;
            count = 0;
            await getQuotes(page);
          }
          if (page == 7268) {
            page = 1;
          }
    } catch(error) {

    }
});

function changeBackground() {
    const colors = ['#C24E0C', '#C4A163', '#8AAF30', '#1C9576', '#4073A0', '#9863AC', '#2E74CE', '#7C79AF', '#238091', '#AFA730', '#B7685C', '#22313F',
                    '#ffbf00', '#ff6666', '#aec2ff', '#1fb8c2', '#ff4573', '#ccccff', '##ccb2cc', '#ff99cc', '#08a18a', '#ff4c99',];
    // const color = Math.floor(Math.random()*colors.length);
    document.body.style.background = colors[color];
    if (color == 21) {
        color = 0;
    } else {
        color++;
    }
}

function getLink() {
    document.getElementById('share').href = `https://twitter.com/intent/tweet?text=${document.getElementById('quote').innerHTML}`
}
