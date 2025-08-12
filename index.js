var weather = prompt("Please! Select the weather from the list below: \n 1. Summer \n 2. Winter \n 3. Autumn \n 4. Spring \n 5. Monsoon ").toLowerCase();
if (weather === "summer") {
    document.writeln(
        `
        <section class="summer container-xxl d-flex flex-column justify-content-center align-items-center">
        <div class="summer-card ">
                <img class="img-fluid summer-image" src="./assets/sun.png" alt="sun">
                <h3>Summer</h3>
                <h4>35&deg;C</h4>
                <h4>Sunny Day</h4>
                <h5>Karachi</h5>
                <h6>Sat 03:30</h6>
        </div>
    </section>
        `
    )
}else if (weather === "winter") {
    document.writeln(
        `
        <section class="winter container-xxl d-flex flex-column justify-content-center align-items-center">
        <div class="winter-card ">
                <img class="img-fluid winter-image" src="./assets/snowflakes.png" alt="snowflakes">
                <h3>Winter</h3>
                <h4>12&deg;C</h4>
                <h4>Cold & Breezy</h4>
                <h5>Kashmir</h5>
                <h6>Fri 08:12</h6>
        </div>
    </section>
        `
    )
}else if (weather === "spring") {
    document.writeln(
        `
        <section class="spring container-xxl d-flex flex-column justify-content-center align-items-center">
        <div class="spring-card ">
                <img class="img-fluid spring-image" src="./assets/blossom.webp" alt="flower">
                <h3>Spring</h3>
                <h4>22&deg;C</h4>
                <h4>Bloomy & Fresh</h4>
                <h5>Islamabad</h5>
                <h6>Tue 10:45</h6>
        </div>
    </section>
        `
    )
}else if (weather === "autumn") {
    document.writeln(
        `
        <section class="autumn container-xxl d-flex flex-column justify-content-center align-items-center">
        <div class="autumn-card ">
                <img class="img-fluid autumn-image" src="./assets/leave.webp" alt="leaves">
                <h3>Autumn</h3>
                <h4>18&deg;C</h4>
                <h4>Cool & Crisp</h4>
                <h5>Multan</h5>
                <h6> 05:14</h6>
        </div>
    </section>
        `
    )
}else if (weather === "monsoon") {
    document.writeln(
        `
        <section class="monsoon container-xxl d-flex flex-column justify-content-center align-items-center">
        <div class="monsoon-card ">
                <img class="img-fluid monsoon-image" src="./assets/cloud.png" alt="cloud">
                <h3>Monsoon</h3>
                <h4>28&deg;C</h4>
                <h4>Rainy & Humid</h4>
                <h5>Rawalpindi</h5>
                <h6>06:44</h6>
        </div>
    </section>
        `
    )
}else{
    document.writeln(
        `
        <section class="default-card container-xxl d-flex flex-column justify-content-center align-items-center">
        <div class="default-card-inner">
          <h3>Please Select A Season!</h3>
          <p>Choose from Summer, Winter, Spring, Autumn, or Monsoon to see the weather info.</p>
          <img src="./assets/error.gif" alt="Select season" class="img-fluid" style="max-width:100px;">
        </div>
      </section>
        `
    )
}