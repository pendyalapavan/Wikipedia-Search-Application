let searchInputEl = document.getElementById("searchInput");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

function  createAndappendSearchResult(result){

    let {title,link,description}=result;
    //DIV container --result-item---

    let resultItemEl=document.createElement("div");
    resultItemEl.classList.add("result-item");

    searchResultsEl.appendChild(resultItemEl)

    //anchor titile

    let resultTitleEl=document.createElement("a");
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent=title;
    resultTitleEl.href=link;
    resultTitleEl.target="_blank";
    resultItemEl.appendChild(resultTitleEl)

    //break element

    let titleBreakE1=document.createElement("br")
    resultItemEl.appendChild(titleBreakE1)

    //anchor url
    let urlEl=document.createElement("a")
    urlEl.classList.add("result-url")
    urlEl.href=link;
    urlEl.target="_blank";
    urlEl.textContent=link;
    resultItemEl.appendChild(urlEl);

     //break element

    let lineBreakE1=document.createElement("br")
    resultItemEl.appendChild(lineBreakE1)

    //paragraph description

    let descriptionEl=document.createElement("p");
    descriptionEl.classList.add("line-description");
    descriptionEl.textContent=description;

    resultItemEl.appendChild(descriptionEl)
 

}

function displayResults(search_results){
    spinnerEl.classList.toggle("d-none");
    for (let result of search_results){
    createAndappendSearchResult(result);
    }
}

function searchWikipedia(event) {
  if (event.key === "Enter") {

    spinnerEl.classList.toggle("d-none");
    searchResultsEl.textContent = "";

    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
      method: "GET"
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      });
  }
}

searchInputEl.addEventListener("keydown", searchWikipedia);