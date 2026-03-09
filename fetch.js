//get json promise data fol all issues
const loadCards = () =>  {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
};



//group of HTML Elements
const createElements = (arr) => {   //array ar upor map korle array return dei
    const htmlElements = arr.map((el) => ` 
        <span class="btn">${el}</span>`);
    return htmlElements.join(" ");  //array k string kore
}

//  ${createElements(word.synonyms)}