// Define all veriable
var btn = document.getElementById('button');
let date = null;
var year = null;
var month = null;


// function for age calculetion
function ageCalculator(event) {
    event.preventDefault();

    var birthDate = document.getElementById('date').value;
    var birthMonth = document.getElementById('month').value;
    var birthYear = document.getElementById('year').value;

    if (birthDate == '' || birthMonth == '' || birthYear == '') {
        alert("Name must be filled out");
        return false;
    }

    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var counters = document.querySelectorAll('.counter');

    var today = new Date(); // new Date() is a JavaScript method that collects time from your device.

    var curDate = today.getDate();
    var curMonth = today.getMonth() + 1;
    var curYear = today.getFullYear();

    if (birthDate > curDate) {
        curDate = curDate + months[curMonth - 1];
        curMonth = curMonth - 1;
    }

    if (birthMonth > curMonth) {
        curMonth = curMonth + 12;
        curYear = curYear - 1;
    }

    date = curDate - birthDate;
    month = curMonth - birthMonth;
    year = curYear - birthYear;


    // age show with counter up
    counters.forEach(counter => {
        var target = counter.getAttribute('get-target');
        var att = document.createAttribute('get-data');

        if (target == "year") {
            att.value = year;
        } else if (target == "month") {
            att.value = month;
        } else if (target == "day") {
            att.value = date;
        } else {
            console.log("not found");
        }
        counter.setAttributeNode(att);

        const updateCounter = () => {
            const target2 = +counter.getAttribute('get-data');

            const c = +counter.innerText;
            const increment = target2 / target2;

            if (c < target2) {
                counter.innerText = `${c + increment}`;
                setTimeout(updateCounter, 20);
            } else if (c > target2) {
                counter.innerText = `${c - increment}`;
                setTimeout(updateCounter, .5);
            }

        }
        updateCounter();
        
        // for clear input Field
        const clrbtn = document.getElementById('clear-btn');
        clrbtn.classList.add('active');

        clrbtn.addEventListener('click', function() {
            document.querySelector("form").reset();
            this.classList.remove('active');
            counter.innerText = "00";
        });
        
    });



}

btn.addEventListener("click", ageCalculator);
