<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC || Education</title>
    <?php include './parts/header.php' ?>
</head>

<body>
    <?php include './parts/navbar.php' ?>

    <!-- CONTENTS -->
    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "About Us", "Education"]) ?>
                </div>
            </div>
        </div>
    </section>

    <article id="story">
        <div class="head">
            <h1>EDUCATIONAL THRUSTS FOR THE ACADEMIC YEARS 2008 - 2011</h1>
            <h2>TOWARDS CCC GOLDEN JUBILEE & BEYOND</h2>
        </div>
        <div class="body">
            <?php goEducationalTrust() ?>
        </div>
    </article>
    <!-- END CONTENTS -->
</body>

<?php include './parts/footer.php' ?>

<script src="./assets/javascript/javascript/index/Main.js"></script>

</html>