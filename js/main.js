const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    },
];

function makeList(){

for (let i = 0; i < commerce.length; i++ ) 
  {
    let entry = document.createElement('li');
    let link = document.createElement('a');
    
    link.textContent = links[i].label;
    link.setAttribute('src', links[i].url)
    
    entry.appendChild(link);

    document.querySelector('ol#dynamicLinkList').appendChild(entry);
  }
  
  
}

