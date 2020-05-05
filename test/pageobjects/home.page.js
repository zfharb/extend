import Page from './page'

class FormPage extends Page {
    // Elements go here
    get searchInput () { return $('#searchInput') }
    get searchInputButton () { return $('#searchButton') }

    // Methods go here
    setSearchText (text) {
        this.searchInput.setValue(text)
    }
    search () {
        this.searchInputButton.click()
    }
}

export default new FormPage()
