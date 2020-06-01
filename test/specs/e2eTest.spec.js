import HomePage from "../pageobjects/home.page";
import TallestBuildingPage from "../pageobjects/tallest.building.page";
import EmpireStateBuildingPage from "../pageobjects/empire.state.building.page";

describe("Wikipedia home page", () => {
    it("should redirect from en.wikipedia.org to https://en.wikipedia.org/wiki/Main_Page", () => {
        browser.url("https://en.wikipedia.org");
        const expected = "https://en.wikipedia.org/wiki/Main_Page";
        const value = browser.getUrl();
        expect(value).toEqual(expected);
    });

    it("should display correct result in the autocomplete", () => {
        HomePage.setSearchText("world's tallest building");

        expect(
            $("//div[@class='suggestions-results']/a").getAttribute("title")
        ).toEqual("World's Tallest Building");
        $("//div[@class='suggestions-results']/a").click();
        browser.pause(5000);
    });

    it("should allow the user to search and display results", () => {
        HomePage.setSearchText("world's tallest building");

        expect(
            $("//div[@class='suggestions-results']/a").getAttribute("title")
        ).toEqual("World's Tallest Building");
        $("//div[@class='suggestions-results']/a").click();
        expect(
            Math.round(
                Number(
                    TallestBuildingPage.getBuildingHieghtByMeter(2).getText()
                ) * 3.28
            )
        ).toEqual(
            Number(
                TallestBuildingPage.getBuildingHieghtByFeet(2)
                    .getText()
                    .replace(/\,/g, "")
            )
        );
    });

    it("should should display results by descending order", () => {
        HomePage.setSearchText("world's tallest building");
        $("//div[@class='suggestions-results']/a").click();

        console.log(
            "Click on the year build column header to re-arrange the row based on on year built"
        );
        $("//table[3]/thead/tr[1]/th[8]").click();

        expect(
            $("//table[3]/tbody/tr[1]/td[2]/b/a").getAttribute("title")
        ).toEqual("Empire State Building");

        console.log("Click on first row to go to the empire state building");
        $("//table[3]/tbody/tr[1]/td[2]/b/a").click();
        expect(EmpireStateBuildingPage.getPageTitle()).toEqual(
            "Empire State Building"
        );

        expect(
            $(
                "//*[@id='mw-content-text']/div/table[1]/tbody/tr[5]/th"
            ).getText()
        ).toEqual("Preceded by");
        expect(
            $(
                "//*[@id='mw-content-text']/div/table[1]/tbody/tr[5]/td/a"
            ).getAttribute("title")
        ).toEqual("Chrysler Building");

        expect(
            $(
                "//*[@id='mw-content-text']/div/table[1]/tbody/tr[5]/th"
            ).getText()
        ).toEqual("Preceded by");
        expect(
            $(
                "//*[@id='mw-content-text']/div/table[1]/tbody/tr[5]/td/a"
            ).getAttribute("title")
        ).toEqual("Chrysler Building");

        expect(
            $(
                "//*[@id='mw-content-text']/div/table[1]/tbody/tr[6]/th"
            ).getText()
        ).toEqual("Surpassed by");
        expect(
            $(
                "//*[@id='mw-content-text']/div/table[1]/tbody/tr[6]/td/a"
            ).getAttribute("title")
        ).toEqual("World Trade Center (1973–2001)");
        browser.pause(5000);
    });

    it("should have thumbnail icon", () => {
        HomePage.setSearchText("world's tallest building");

        console.log("go to the empire state building");
        $("//div[@class='suggestions-results']/a").click();
        $("//table[3]/thead/tr[1]/th[8]").click();
        $("//table[3]/tbody/tr[1]/td[2]/b/a").click();

        console.log(
            "loop through all he thumb nails and verify thier an element to enlarge the element"
        );
        $$(".thumb").map(function(element) {
            expect(
                element
                    .$(".magnify")
                    .$("a")
                    .getAttribute("title")
            ).toEqual("Enlarge");
        });

        browser.pause(5000);
    });
});
