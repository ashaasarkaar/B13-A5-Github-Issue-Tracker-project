
//All tab set as a defalut tabs
let defaultTab = 'all';

//Toggle between three tabs
const activeTab = ["bg-[#4A00FF]", "text-white"];
const inactiveTab = ["bg-transparent", "text-neutral/50"];

//cards section toggle between three three TABS
const btnAllContainer = getId('btn-all');
const btnOpenContainer = getId('btn-open');
const btnCloseContainer = getId('btn-close');

// function for toggle button START
function changeTab(tab) {
    const tabs = ['all', 'open', 'close'];
    defaultTab = tab;

    for (const btn of tabs) {
        const tabName = getId("btn-" + btn);
        if (btn === tab) {
            tabName.classList.remove(...inactiveTab);
            tabName.classList.add(...activeTab);
        }
        else {
            tabName.classList.remove(...activeTab);
            tabName.classList.add(...inactiveTab);
        }

    }
}
changeTab(defaultTab);
// function for toggle button END


//group of HTML Elements
const createElements = (arr) => {   //array ar upor map korle array return dei
    const htmlElements = arr.map((el) => ` 
        <span class="btn btn-secondary btn-soft rounded-full">${el}</span>`);
        
    return htmlElements.join(" ");  //array k string kore
}

// get json promise data fol all issues
const loadCards = () =>  {
    const url =  'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayCard(data.data);
    })
};

const displayCard = (cards) =>{
    // console.log(cards);

    //1. get the parent container & empty
    const cardContainer = document.getElementById('card-container');
    // cardContainer.innerHTML = "";
    //2. get into every lessons
    cards.forEach(card => {
        // console.log(card);

        //create div element
        const insertCards = document.createElement('div');
        insertCards.innerHTML = `

        
        
        <div class="cards-body p-5 shadow-lg space-y-2 b rounded-xl border-t-4 ${card.status === 'open' ? 'border-green-500' : 'border-purple-500'}">

            
        
            <div class="flex justify-between items-center">
                <img src="./assets/${card.status === 'open' ? 
                    'Open-Status.png' : 'Closed- Status .png'}" 
                    alt="status-changing-icon">
                <button class="rounded-full px-10
                ${card.priority === 'high'
                    ? 'btn btn-secondary btn-soft'
                    : card.priority === 'medium'
                    ? 'btn btn-warning btn-soft'
                    : 'btn btn-neutral btn-soft'
                }
                ">${card.priority.toUpperCase()}</button>
            </div>

            <h2 class="font-semibold text-md">${card.title}</h2>
            <p class="text-neutral/50 text-sm">${card.description}</p>
            <div class="btns flex items-center gap-1 flex-nowrap">
               ${createElements(card.labels)}
            </div>

            
                <div class="divider -mx-5"></div>

                <p class="text-neutral/50">#1 by ${card.author}</p>
                <p class="text-neutral/50">${new Date(card.updatedAt).toLocaleString()}</p>
            

        </div>

        `;

        //4. append child
        cardContainer.append(insertCards);
    })
};
loadCards();

// Initial load
loadCards(defaultTab);







