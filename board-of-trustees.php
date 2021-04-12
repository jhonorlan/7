<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC || Board of Trustees</title>

    <?php include './parts/header.php' ?>
</head>

<body>
    <?php include './parts/navbar.php' ?>

    <!-- CONTENTS -->
    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "Administration", "Board of Trustees"]) ?>
                </div>
            </div>
        </div>
    </section>

    <article id="story">
        <div class="head">
            <h1>Board of Trustees</h1>
        </div>
        <div class="centerized-image">
            <img src="./assets/media/image/other/board-of-trustees.jpg" alt="">
        </div>
    </article>

    <!-- END CONTENTS -->
</body>

<?php include './parts/footer.php' ?>


</html>