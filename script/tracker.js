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

