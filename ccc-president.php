<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC || President</title>
    <?php include './parts/header.php' ?>
</head>

<body>
    <?php include './parts/navbar.php' ?>

    <!-- CONTENTS -->
    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "Administration", "CCC President"]) ?>
                </div>
            </div>
        </div>
    </section>

    <article id="story">
        <div class="head">
            <h1>CCC President</h1>
        </div>
        <div class="centerized-image">
            <img src="./assets/media/image/other/ccc-president.jpg" alt="">
        </div>

        <div class="body">
            <br>
            <p>Last August 14, 2017, Rev. Fr. Gerard Joaquin V. Masangya, Superintendent of Catholic Schools in the
                Diocese of Antipolo, with Rev. Msgr. Rigoberto S. De Guzman, Vicar Gen. of the diocese, lead the
                turn-over ceremonies of the new CCC President Rev. Msgr. Pedro Cañonero. Msgr. De Guzman read the
                appointment paper signed by Bishop of Antipolo, Most Rev. Francis M. De Leon; Fr. Masangya read the
                objectives of the turnover. Board of Trustees members Rev. Fr. Jimmy P. Padilla and Rev. Fr. Noli Buco
                with CCC MANCOM members and other office heads, were in attendance.</p>
        </div>
    </article>

    <!-- END CONTENTS -->
</body>

<?php include './parts/footer.php' ?>


</html>