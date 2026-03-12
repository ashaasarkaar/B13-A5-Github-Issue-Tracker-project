
//All tab set as a defalut tabs
let defaultTab = 'all';

//Toggle between three tabs
const activeTab = ["bg-[#4A00FF]", "text-white"];
const inactiveTab = ["bg-transparent", "text-neutral/50"];

//cards section toggle between three three TABS
const btnAllContainer = getId('btn-all');
const btnOpenContainer = getId('btn-open');
const btnCloseContainer = getId('btn-close');
const allCardContainer = getId('card-container');
const openContainer = getId('open-container');
const closeContainer = getId('close-container');
const countIssue = getId('count-issue');



//function for showing spinner start
const setSpinner = (status) =>{
    if(status === true){
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("card-container").classList.add("hidden");
    }
    else{
         document.getElementById("card-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
};

//function for showing spinner end

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

    //add hidden class in clickable sections
    const sections = [allCardContainer, openContainer, closeContainer]
    for(const section of sections) {
        section.classList.add('hidden');
    }


    //remove hidden class from clickable sections
    if(tab === 'all') {
        allCardContainer.classList.remove('hidden');
    }
    else if(tab === 'open'){
        openContainer.classList.remove('hidden');
    }
    else{
        closeContainer.classList.remove('hidden');
    }

    updateDashboard();

};
changeTab(defaultTab);
// function for toggle button END


//dymanic labels selection function 
const createLabels = (labels) =>{
    const btnLabels = labels.map((label)=>`
    <span class="btn btn-secondary btn-soft rounded-full
    ${label === "bug" ? 'btn-error'
    : label === "help wanted" ? 'btn-warning'
    : label === "enhancement" ? 'btn-success'
    : label === "documentation" ? 'btn-info'
    : 'btn secondary'
    }">
    ${label === "bug" ? '<i class="fa-solid fa-bug"></i>'
      : label === "help wanted" ? '<i class="fa-solid fa-life-ring"></i>'
      : label === "enhancement" ? '<i class="fa-solid fa-burst"></i>'
      : label === "documentation" ? '<i class="fa-solid fa-file"></i>'
      : '<i class="fa-brands fa-jira"></i>'
    }
     ${label}</span>`);
    return btnLabels.join(" "); //convert array to string
}
//search for load


// get json promise data fol all issues
const loadCards = () =>  {
    setSpinner(true);
    const url =  'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayCards(data.data);
    })
};

const displayCards = (cards) =>{
    // console.log(cards);

    //1. get the parent container & empty
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    openContainer.innerHTML = "";
    closeContainer.innerHTML = "";
    //2. get into every lessons
    cards.forEach(card => {
        // console.log(card);

        //create div element
        const insertCards = document.createElement('div');
        insertCards.innerHTML = `
        
        <div onclick="loadDetailsInfo(${card.id})"  class="cards-body p-5 shadow-lg space-y-2 b rounded-xl border-t-4 ${card.status === 'open' ? 'border-green-500' : 'border-purple-500'} overflow-hidden h-96">

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
               ${createLabels(card.labels)}
            </div>

            
                <div class="divider -mx-5"></div>

                <p class="text-neutral/50">#1 by ${card.author}</p>
                <p class="text-neutral/50">${new Date(card.createdAt).toLocaleString()}</p>
            

        </div>

        `;

        //4. append child
        cardContainer.append(insertCards);

        const moveCard = insertCards.cloneNode(true);
        card.status === 'open'
        ? openContainer.appendChild(moveCard)
        : closeContainer.appendChild(moveCard)
    })

    setSpinner(false);
    updateDashboard();
    
};

//input searching Work START
const searchData = getId('input-search');
searchData.addEventListener("input", () =>{
    const searchText = searchData.value.toLowerCase().replace(/\s/g, "");
    if(searchText === "") {
        loadCards();
        return;
    }
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`)
    .then(res => res.json())
    .then(data => {
        const filterCard = data.data.filter(element => element.title.toLowerCase().replace(/\s/g, "").includes(searchText));
        displayCards(filterCard);
        
    })
});
//input searching Work END

//Modal display Design
const loadDetailsInfo = async (id) => {
    const link = ` https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    const response = await fetch(link);
    const information = await response.json();
    displayDetailsInfo(information.data);
};

const displayDetailsInfo = (info) => {
    const detailsContainer = getId('information-container');
    detailsContainer.innerHTML = `
    <div class="space-y-3 ">
        <h1 class="font-bold text-2xl">${info.title}</h1>
        <div class="flex space-x-2 items-center">
            <button class="${info.status === 'open'? 'btn btn-success' : 'btn btn-primary'} rounded-full">${info.status}</button>
            <div class="flex items-center gap-1">
                <div class="w-1 h-1 rounded-full bg-gray-500"></div>
                <p class="text-neutral/50">${info.status} by ${info.assignee}</p>
            </div>
           <div class="flex items-center gap-1">
            <div class="w-1 h-1 rounded-full bg-gray-500" ></div>
             <p class="text-neutral/50">${new Date(info.updatedAt).toLocaleString()}</p>
           </div>
        </div>
        <div class="btns flex gap-2 items-center">
           ${createLabels(info.labels)}
        </div>
        <p class="text-neutral/50">${info.description}</p>

        <div class="bg-base-200 flex justify-around items-center p-5 rounded-lg">
            <div>
                <p class="text-neutral/50">Assignee:</p>
                <p class="font-semibold">${info.assignee}</p>
            </div>
            <div>
                <p class="text-neutral/50">Priority:</p>
                <button class="${info.priority === 'high'
                         ? 'btn btn-secondary'
                        : info.priority === 'medium'
                       ?'btn btn-warning'
                       :'btn btn-neutral'} rounded-full px-10">${info.priority.toUpperCase()}</button>
            </div>
        </div>
    </div>

    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
    `;

    getId('card_modal').showModal();
};

// finally all the dashboard update
function updateDashboard() {

    const counts = {
        all: allCardContainer.children.length,
        open: openContainer.children.length,
        close: closeContainer.children.length,
    };

    // availableJobsCount.innerText = counts.all;
    countIssue.innerText = counts[defaultTab];
}

updateDashboard();
loadCards();
// Initial load
changeTab(defaultTab);


















