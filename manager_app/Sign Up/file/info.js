const scriptURL =
"https://script.google.com/macros/s/AKfycbwDOAV77fCLuA30pABR1oUozPjh7FIWZ83gKJePpphlHgXb6wt-MUS8Lhv0Bo1k8_2SsA/exec";


const form = document.getElementById("myForm");

const coursesList = document.getElementById("coursesList");

const submitBtn = document.getElementById("submitBtn");



/* =========================================
   دریافت داینامیک درس‌ها
========================================= */

async function loadCourses() {

    try {

        const response = await fetch(
            scriptURL + "?action=getCourses"
        );


        const courses = await response.json();


        coursesList.innerHTML = "";


        if (!courses || courses.length === 0) {

            coursesList.innerHTML = `
                <div class="no-course">
                    هنوز درسی ثبت نشده است
                </div>
            `;

            return;

        }


        courses.forEach(function(course, index) {


            const label = document.createElement("label");

            label.className = "course-item";


            label.innerHTML = `

                <span class="course-name">
                    ${course}
                </span>

                <input
                    type="checkbox"
                    class="course-checkbox"
                    value="${course}"
                >

            `;


            coursesList.appendChild(label);

        });


    } catch (error) {

        console.error(error);


        coursesList.innerHTML = `

            <div class="no-course">
                خطا در دریافت لیست دوره‌ها
            </div>

        `;

    }

}



/* =========================================
   ثبت فرم
========================================= */

form.addEventListener("submit", function(e) {

    e.preventDefault();


    submitBtn.disabled = true;

    submitBtn.textContent = "در حال ثبت...";


    const formData = new FormData(form);


    /* -----------------------------
       دریافت درس‌های انتخاب شده
    ----------------------------- */

    const selectedCourses = [];


    document
        .querySelectorAll(".course-checkbox:checked")
        .forEach(function(checkbox) {

            selectedCourses.push(checkbox.value);

        });


    /*
      درس‌ها با این جداکننده
      برای GAS ارسال می‌شوند
    */

    formData.append(
        "courses",
        selectedCourses.join("|||")
    );



    fetch(scriptURL, {

        method: "POST",

        body: formData,

        mode: "no-cors"

    })

    .then(function() {

        alert("اطلاعات با موفقیت ثبت شد");

        form.reset();


        // تیک درس‌ها نیز پاک شود

        document
            .querySelectorAll(".course-checkbox")
            .forEach(function(checkbox) {

                checkbox.checked = false;

            });

    })

    .catch(function(error) {

        console.error(error);

        alert("خطا در ثبت اطلاعات");

    })

    .finally(function() {

        submitBtn.disabled = false;

        submitBtn.textContent = "ثبت اطلاعات";

    });

});



/* =========================================
   اجرای اولیه
========================================= */

loadCourses();