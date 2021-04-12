<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC || Vission and Mission</title>
    <?php include './parts/header.php' ?>

</head>

<body>
    <?php include './parts/navbar.php' ?>

    <!-- CONTENTS -->
    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "About Us", "Vission and Mission"]) ?>
                </div>
            </div>
        </div>
    </section>

    <article id="story">
        <div class="head">
            <h1>Vission and Mission</h1>
        </div>
    </article>

    <article id="image">

        <div class="rows">
            <div class="row-1">
                <div class="image img-magnifier-container">
                    <img id="myimage" src="./assets/media/image/other/vission-and-mission.jpg" alt="">
                </div>
            </div>
            <div class="row-2">
                <div class="cards not-flex">
                    <div class="card">
                        <div class="top">
                            <h1>Vission</h1>
                        </div>
                        <div class="bot"><span>Cainta Catholic College envissions itself as the preffered educational
                                institution and center for Religious Education in the Diocese of Antipolo with level 4
                                accreditation status.</span></div>
                    </div>
                    <div class="card">
                        <div class="top">
                            <h1>Mission</h1>
                        </div>
                        <div class="bot"><span>Under the patronage of Mary, Our Lady of Light, Cainta Catholic College,
                                commits itself to excellent learner-centered and technology-enabled programs and
                                services with Religion at the core.
                            </span></div>
                    </div>
                </div>
            </div>
        </div>

    </article>

    <!-- END CONTENTS -->
</body>

<?php include './parts/footer.php' ?>
<script src="./assets/javascript/modules/magnify/js/magnify.js"></script>

</html>