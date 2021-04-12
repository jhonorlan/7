<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC || Campus</title>

    <?php include './parts/header.php' ?>
</head>

<body>
    <?php include './parts/navbar.php' ?>

    <!-- CONTENTS -->

    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "About Us", "Campus"]) ?>
                </div>
            </div>
        </div>
    </section>
    <article id="story">
        <div class="head">
            <h1>Campus</h1>
        </div>
    </article>
    <section id="slideshow">
        <div id="contents">
            <div class="rows main-slideshow">
                <div class="row-1">
                    <div class="button-container left">
                        <div class="icon"><img src="./assets/media/svg/other/chevron-right.svg" alt=""></div>
                    </div>

                    <div class="main-image">
                        <div class="image img-magnifier-container"></div>
                    </div>

                    <div class="button-container right">
                        <div class="icon"><img src="./assets/media/svg/other/chevron-right.svg" alt=""></div>
                    </div>
                </div>

                <div class="row-2">
                    <div class="images"></div>
                </div>
            </div>
        </div>
    </section>
    <!-- END CONTENTS -->
</body>

<?php include './parts/footer.php' ?>
<script src="./assets/javascript/modules/magnify/js/magnify.js"></script>


</html>