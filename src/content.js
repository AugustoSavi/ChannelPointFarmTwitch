function init() {
    setInterval(function () {
        buttonChest = document.querySelector('[aria-label="Resgatar Bônus"]');

        if (buttonChest) {
            buttonChest.click();
            console.log("Chest collected");
        }
        else {
            console.log("Chest check performed");
        }

    }, 60 * 1000);
}

init();