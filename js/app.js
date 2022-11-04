var getprogress = document.getElementsByClassName("progress");
var getprogressbar = document.getElementById("progress-bar");


window.onscroll = function () {

    scrollpoint();


}
// formula
//st*100/(projectheight-current height)
//scroll top
//project height
//current height
//project height-current height
//scrolltop*100/(project height-current height)

function scrollpoint() {
    var getscrolltop = document.documentElement.scrollTop;
    var getscrollheight = document.documentElement.scrollHeight;
    console.log(getscrollheight);
    var getclientheight = document.documentElement.clientHeight;
    console.log(getclientheight);
    var calheight = getscrollheight - getclientheight;
    var getfinal = Math.round(getscrolltop * 100 / calheight);

    getprogressbar.style.width = `${getfinal}%`;
}

// Start for banner 
// typing
const myheader = new AutoTyping({
    id: 'header',
    typeText: ['Nay Oo Lwin', 'Web DEVELOPER'],
    textColor: 'orange',
    cursorColor: 'green',
    cursorSpeed: 300
})
myheader.init();
const myskill = new AutoTyping({
    id: 'skill',
    typeText: ['Front End Developement'],
    textColor: 'orange',
    cursorColor: 'green',
    cursorSpeed: 300
})
myskill.init();
const myskill2 = new AutoTyping({
    id: 'skill2',
    typeText: ['Back End Developement'],
    textColor: 'steelblue',
    cursorColor: 'green',
    cursorSpeed: 300
})
myskill2.init();
const myskill3 = new AutoTyping({
    id: 'skill3',
    typeText: ['DataBase'],
    textColor: 'orange',
    cursorColor: 'green',
    cursorSpeed: 300
})
myskill3.init();

const myskill4 = new AutoTyping({
    id: 'skill4',
    typeText: ['Other languages and OS'],
    textColor: 'orange',
    cursorColor: 'green',
    cursorSpeed: 300
})
myskill4.init();

AOS.init();
//start for effect
$(window).scroll(function () {
    let getscrollpoint = $(this).scrollTop();
    if (getscrollpoint <= 50 || getscrollpoint >= 200) {
        $(".infotexts").addClass("fromlefts");
        $(".infotopics").addClass("fromrights");
    } else {
        $(".infotexts").removeClass("fromlefts");
        $(".infotopics").removeClass("fromrights");
    }
});
// End for banner 