import Page from "./page";

class TallestBuildingPage extends Page {
    findSecondTallestBuilding() {
        return $("//*[@id='mw-content-text']/div/table[3]/tbody/tr[2]");
    }

    getBuildingHieghtByMeter(buildingIndexRelativeToTallest) {
        return $(
            `//*[@id='mw-content-text']/div/table[3]/tbody/tr[${buildingIndexRelativeToTallest}]/td[6]`
        );
    }

    getBuildingHieghtByFeet(buildingIndexRelativeToTallest) {
        return $(
            `//*[@id='mw-content-text']/div/table[3]/tbody/tr[${buildingIndexRelativeToTallest}]/td[7]`
        );
    }
}

export default new TallestBuildingPage();
