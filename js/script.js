/**
 * Created by Nicholas on 03/12/2016.
 */

(function () {

    var
        path = 'imgs/',
        status = 'english',
        translateBtn = document.getElementById("translateBtn"),
        indexesObj = {
            "index1": 0,
            "index2": 0,
            "index3": 0
        },

        prices = {
            "index1": 0,
            "index2": 0,
            "index3": 0
        },

        priceSpan = document.getElementById("priceSpan "),
        highlight = document.getElementById("highlight"),
        starters = document.getElementById("starters"),
        prevBtn = document.getElementById("prevBtn"),
        nextBtn = document.getElementById("nextBtn"),

        mains = document.getElementById("mains"),
        prevBtn2 = document.getElementById("prevBtn2"),
        nextBtn2 = document.getElementById("nextBtn2"),

        desserts = document.getElementById("desserts"),
        prevBtn3 = document.getElementById("prevBtn3"),
        nextBtn3 = document.getElementById("nextBtn3"),

        conformationBtn = document.getElementById("toggleBtn"),

        confirmation = document.getElementById("confirmation"),


        starterPics = ["poachedduckwithbrusselssproutsappleandbuckwheat.jpg", "camembertfigandoniontart.jpg",
            "roastedlangoustinesoysterpureeceleryandhorseradish.jpg", "crabandwatermelon.jpg", "no thanks.jpg"],

        starterDesc = [
            document.getElementById("st1"),
            document.getElementById("st2"),
            document.getElementById("st3"),
            document.getElementById("st4"),
            document.getElementById("st5")
        ],


        mainPics = ["sicilianrabbit.jpg", "porkbellywithapplepureeandsproutingbroccoli.jpg", "lambsmokedaubergineyoghurtandonions.jpg",
            "venisonburgerwithhomemadechips.jpg", "veggiewellington.jpg"],

        mainDesc = [
            document.getElementById("mn1"),
            document.getElementById("mn2"),
            document.getElementById("mn3"),
            document.getElementById("mn4"),
            document.getElementById("mn5")
        ],

        dessertPics = ["raspberryandchocolaterosedelice.jpg", "hazelnutcaramelandsesamemoussecakewithmalticecream.jpg",
            "bakedcustardandrhubarbgranita.jpg", "mirabellesoufflewithpoachedplums.jpg", "no thanks.jpg"],

        dessertDesc = [
            document.getElementById("ds1"),
            document.getElementById("ds2"),
            document.getElementById("ds3"),
            document.getElementById("ds4"),
            document.getElementById("ds5")
        ]

        ;

    function bindBtns() {

        translateBtn.addEventListener("click", translate);

    }// end bindBtns

    function displayWelcomeMessage() {
        document.getElementById('translateBtn').disabled = true;
        var typed = new Typed("#welcomeMessage", {
            strings: ['Let me offer you a warm welcome and thank you for choosing to eat at our family run restaurant' +
            ' in the heart of Swansea. Please could you fill in the form below so we can process your order quickly. ' +
            'Thank you and we hope you enjoy the food.'],
            typeSpeed: 40,
            onComplete: enableTranslateBtn

        });

        translateBtn.value = "Welsh Translation";
        status = "english";

    }// end displayWelcomeMessage

    function translate() {

        if (status === "english") {
            document.getElementById("welcomeMessage").innerHTML = "Gadewch i mi yn cynnig croeso cynnes i chi a diolch i chi am ddewis bwyta o ein redeg bwyty teuluol yng nghanol Abertawe. " +
                "Os gwelwch yn dda gallech lenwi'r ffurflen isod er mwyn i ni brosesu eich archeb yn gyflym. Diolch i chi ac rydym yn gobeithio y " +
                "byddwch yn mwynhau'r bwyd.";
            translateBtn.value = "English Translation";
            status = "welsh";
        } else {
            document.getElementById("welcomeMessage").innerHTML = "Let me offer you a warm welcome and thank you for choosing to eat at our family run restaurant in the heart of Swansea. Please " +
                "could you fill in the form below so we can process your order quickly. Thank you and we hope you enjoy the food.";
            translateBtn.value = "Welsh Translation";
            status = "english";
        }// if else

    }// end translate

    function enableTranslateBtn() {

        document.getElementById('translateBtn').disabled = false;

    }// end enableTranslateBtn

    function updateCourses(index, coursePic, coursePicsArr, descArr, direction) {

        var disableIndex;

        if (direction == "next") {
            if (indexesObj[index] < coursePicsArr.length - 1) {
                indexesObj[index] += 1;

            }
            disableIndex = indexesObj[index] - 1;
        } else {

            if (indexesObj[index] > 0) {
                indexesObj[index] -= 1;
            }
            disableIndex = indexesObj[index] + 1;

        } // if else

        coursePic.src = path + coursePicsArr[indexesObj[index]];

        descArr[disableIndex].classList.remove("highlight");
        descArr[indexesObj[index]].classList.add("highlight");

        currentPrice = document.querySelector("#" + descArr[indexesObj[index]].id + " span" + " span").innerHTML;

        prices[index] = currentPrice;

        console.log(prices);

        var total = parseFloat(prices.index1) + parseFloat(prices.index2) + parseFloat(prices.index3);
        document.getElementById("priceSpan").innerHTML = (total.toFixed(2));

    } // end updateCourses

    function toggleConformationBtn() {

        $("#conformationBtn").on("click", function () {
            $("#confirmation").toggle();
        }); // toggle

    }// end toggleConformationBtn

    prevBtn.addEventListener("click",
        function () {

            updateCourses("index1", starters, starterPics, starterDesc, "prev");
        }
    ); // end nextBtn

    nextBtn.addEventListener("click",
        function () {

            updateCourses("index1", starters, starterPics, starterDesc, "next");
        }
    ); // end nextBtn

    prevBtn2.addEventListener("click",
        function () {

            updateCourses("index2", mains, mainPics, mainDesc, "prev");
        }
    ); // end prevBtn2

    nextBtn2.addEventListener("click",
        function () {

            updateCourses("index2", mains, mainPics, mainDesc, "next");
        }
    ); // end nextBtn2

    prevBtn3.addEventListener("click",
        function () {

            updateCourses("index3", desserts, dessertPics, dessertDesc, "prev");

        }
    );// end prevBtn3

    nextBtn3.addEventListener("click",
        function () {

            updateCourses("index3", desserts, dessertPics, dessertDesc, "next");
        }
    ); // end nextBtn3

    function init() {
        bindBtns();
        displayWelcomeMessage();
        toggleConformationBtn();

    }//end init

    window.addEventListener("load", init);

})();//end iffy