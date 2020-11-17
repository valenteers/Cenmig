// call functin on load
document.addEventListener("DOMContentLoaded", function() {
    showSlides();
  });
    /*ถ้าจะทำลูกศรซ้าย-ขวาให้เลื่อนภาพเองได้ด้วย ต้องทำลูกศรเรียกฟังค์ชั่น showSlides 
    พร้อมส่งค่าเข้าไปให้เช็ค if ข้างในว่าถ้าค่าแบบนี้ เช่น 1 ให้ปรับแก้เวลา เพิ่มเป็นกี่วินาที แล้วค่อยเซ็ตเวลาใหม่ตอนท้ายสุด 
    เพราะถ้าทำฟังค์ชั่นแยกไว้ มันจะทำงานควบคู่กันไป ทำให้แย่งกันทำงาน*/
var slideIndex = 0;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("vrSlides");
    var dots = document.getElementsByClassName("vrSildeDot");
    // set all css slide display to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    // reset to 1 if number reach 4
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    // set all css dot display to none 
    for (i = 0; i < dots.length; i++) {
        // .vrActive is declared in valenteers.css
        dots[i].className = dots[i].className.replace(" vrActive", "");
    }
    // run number to set slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " vrActive";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}


var item_length = '5';
var text = "";
for (i = 0; i < item_length; i++) {
    text += '<div class="item-thumb" data-index="' + i + '"><span></span></div>';
}
$('.list-thumb').html(text);
$(document).on('click', '.list-thumb .item-thumb', function(e) {
    var index = $(this).data('index');
    $("#owl-demo").trigger("to.owl.carousel", index)
});