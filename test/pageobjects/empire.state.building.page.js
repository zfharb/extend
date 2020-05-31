import Page from "./page";

class EmpireStateBuildingPage extends Page {
    get pageTitle() {
        return $("#firstHeading");
    }

    getPageTitle(text) {
        return this.pageTitle.getText();
    }
}

export default new EmpireStateBuildingPage();
