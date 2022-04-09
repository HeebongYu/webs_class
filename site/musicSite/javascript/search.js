const search = document.querySelector("#search");
const searchFieldset = search.querySelector(".search__fieldset");
const searchInput = search.querySelector(".search__input");

function fieldsetSearch(){
    searchInput.addEventListener("focusin", () => {
        searchFieldset.classList.add("active")
    })
    searchInput.addEventListener("focusout", () => {
        searchFieldset.classList.remove("active")
    })
}
fieldsetSearch();