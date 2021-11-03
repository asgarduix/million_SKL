// left_menu include //
function includeMenu() {
    var menu_z, menu_i, menu_elmnt, menu_file, menu_xhttp;
    /* Loop through a collection of all HTML elements: */
    menu_z = document.getElementsByTagName("*");
    for (menu_i = 0; menu_i < menu_z.length; menu_i++) {
        menu_elmnt = menu_z[menu_i];
        /*search for elements with a certain atrribute:*/
        menu_file = menu_elmnt.getAttribute("menu-html");
        if (menu_file) {
            /* Make an HTTP request using the attribute value as the file name: */
            menu_xhttp = new XMLHttpRequest();
            menu_xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { menu_elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { menu_elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    menu_elmnt.removeAttribute("menu-html");
                    includeMenu();
                }
            }
            menu_xhttp.open("GET", menu_file, true);
            menu_xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

// right_msg include //
function includeMsg() {
    var msg_z, msg_i, msg_elmnt, msg_file, msg_xhttp;
    /* Loop through a collection of all HTML elements: */
    msg_z = document.getElementsByTagName("*");
    for (msg_i = 0; msg_i < msg_z.length; msg_i++) {
        msg_elmnt = msg_z[msg_i];
        /*search for elements with a certain atrribute:*/
        msg_file = msg_elmnt.getAttribute("msg-html");
        if (msg_file) {
            /* Make an HTTP request using the attribute value as the file name: */
            msg_xhttp = new XMLHttpRequest();
            msg_xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { msg_elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { msg_elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    msg_elmnt.removeAttribute("msg-html");
                    includeMsg();
                }
            }
            msg_xhttp.open("GET", msg_file, true);
            msg_xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}


// right_record include //
function includeRecord() {
    var record_z, record_i, record_elmnt, record_file, record_xhttp;
    /* Loop through a collection of all HTML elements: */
    record_z = document.getElementsByTagName("*");
    for (record_i = 0; record_i < record_z.length; record_i++) {
        record_elmnt = record_z[record_i];
        /*search for elements with a certain atrribute:*/
        record_file = record_elmnt.getAttribute("record-html");
        if (record_file) {
            /* Make an HTTP request using the attribute value as the file name: */
            record_xhttp = new XMLHttpRequest();
            record_xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { record_elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { record_elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    record_elmnt.removeAttribute("record-html");
                    includeRecord();
                }
            }
            record_xhttp.open("GET", record_file, true);
            record_xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}


// scroll bar //
(function($) {
    $(window).on("load", function() {
        var excuteCheck = true;
        $(".scrollContent").mCustomScrollbar({
            theme: "minimal",
            scrollInertia: 100
            // callbacks: {
            //     onScroll: function() {
            //         if ($('#mCSB_4_container').offset().top < -30 && excuteCheck === true) {
            //             $('.scrollTopBtn').click(function() {
            //                 $('#mCSB_4_container').animate({ top: 0 }, 500);
            //             });
            //             excuteCheck = false;
            //         } else if ($('#mCSB_4_container').offset().top >= -30 && excuteCheck === false) {
            //             excuteCheck = true;
            //         }
            //         console.log(excuteCheck);
            //     }
            // }
        });
    });
})(jQuery);


// left menu toggle //
function leftMenuToggle() {
    var leftMenu_width = document.getElementById("leftMenu");
    var leftAsideId_width = document.getElementById("leftAsideId");
    var bottomArea_width = document.getElementById("bottomArea");

    if (leftMenu_width.classList && leftAsideId_width.classList && bottomArea_width.classList) {
        leftMenu_width.classList.toggle("jsLmWidth");
        leftAsideId_width.classList.toggle("jsLmWidth");
        bottomArea_width.classList.toggle("jsBottomLeftPadding");
    }
}


// right menu toggle //
function rightMenuToggle() {
    var rightMenu_width = document.getElementById("rightMenu");
    var mainContentTextId_width = document.getElementById("mainContentTextId");
    var scrollTopBtn = document.getElementById("scrollTopId");

    if (rightMenu_width.classList) {
        rightMenu_width.classList.toggle("jsRmWidth");
        mainContentTextId_width.classList.toggle("jsBottomRightMargin");
        scrollTopBtn.classList.toggle("jsScrollTopPosition");
    }
}


// login pw show/hide //
function pwTogglecheck() {
    var togglePw = document.getElementById('loginPw');
    var togglebtn = document.getElementById('eyeBtn');
    if (togglePw.type === 'password') {
        togglePw.type = 'text';
        togglebtn.style.backgroundImage = "url('img/invisible.svg')";

    } else {
        togglePw.type = 'password';
        togglebtn.style.backgroundImage = "url('img/visibility.svg')";
    }
}


// bootstrap-select(js_eric) //
$(function() {
    $('select').selectpicker();
});


// clear search conditions //
function clearText() {
    var searcheElements = [];
    searcheElements = document.getElementsByClassName("searchInput");

    for (var i = 0; i < searcheElements.length; i++) {
        searcheElements[i].value = "";
    }
}


// jquery-ui datepicker //
$(function() {
    $(".searchDatepicker").datepicker({
        dateFormat: "t/mm/dd",
        changeMonth: true,
        changeYear: true,
        //yearRange: '1911:' + new Date().getFullYear().toString() //from past to current//
        yearRange: "1911:+100" //from past to future(100 years)//
    });
});


// open/close toggle //
$('.switch').on('click', function() {
    $(this).stop(true, true).toggleClass('switchActive');
    if ($(this).hasClass('switchActive')) {
        $('.condition').attr('value', 'true');
    } else {
        $('.condition').attr('value', 'false');
    }
});


// user info search toggle //
function userInfoSearchToggle() {
    var userInfoSearch = document.getElementById("userInfoSearchId");

    if (userInfoSearch.classList) {
        userInfoSearch.classList.toggle("userInfoSearchShow");
    }
}


// 關閉lity 點選遮罩關閉視窗 //
$(document).on('lity:open', function(event, lightbox, triger) {
    lightbox.element().children().first().removeAttr('data-lity-close');
});


// scroll top //
$(document).ready(function() {
    $('.scrollTopBtn').click(function() {
        $('#mCSB_4_container').animate({ top: 0 }, 500);
    });
});