const links = [
    {
      label: "Home",
      url: "../index.html"
    },
    {
        label: "Week1 notes",
        url: "../week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "../week2/index.html"
    },
    {
      label: "Week3 notes",
      url: "../week3/index.html"
    },
    {
      label: "Week4 notes",
      url: "../week4/index.html"
    },
    {
      label: "Week5 notes",
      url: "week5/index.html"
    }
    
];

function makeList(){

for (let i = 0; i < links.length; i++ ) 
  {
    let entry = document.createElement('li');
    let link = document.createElement('a');
    
    link.textContent = '' + links[i].label;
    link.setAttribute('href', links[i].url)
    
    entry.appendChild(link);

    document.querySelector('ol#dynamicLinkList').appendChild(entry);
  }
  
  
}

