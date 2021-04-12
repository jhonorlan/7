<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC || Seal</title>
    <?php include './parts/header.php' ?>
</head>

<body>
    <?php include './parts/navbar.php' ?>

    <!-- CONTENTS -->
    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "About Us", "The Seal"]) ?>
                </div>
            </div>
        </div>
    </section>

    <article id="story">
        <div class="head">
            <h1>The Seal</h1>
        </div>
    </article>

    <article id="image">
        <div class="rows">
            <div class="row-1">
                <div class="image img-magnifier-container">
                    <img id="myimage" src="./assets/media/image/other/seal.png" alt="">
                </div>
            </div>
            <div class="row-2">
                <div class="cards not-flex">
                    <div class="card">
                        <div class="top">
                            <h1>Marian Emblem</h1>
                        </div>
                        <div class="bot"><span>This represents the school's special affinity to our Lady of Light-
                                patroness of reconciliation, communion and mission. A CCCian takes particular devotion
                                to Our Lady especially in living the role of a missionary for peace and reconciliation.
                                In general, the school community takes the lead role in propagating the same value of
                                sowing peace, reconciliation and communion.</span></div>
                    </div>

                    <div class="card">
                        <div class="top">
                            <h1>People in Arms Around a Bell Tower</h1>
                        </div>
                        <div class="bot"><span>This represents the people who respond to the call of the Church to be
                                agents and missionaries of bringing communion (i.e. people of one heart, one mind, one
                                faith and one mission). A CCCian is called by the Church to be an agent of communion
                                among people and should take serious attention in promoting and building Christian
                                communities in and out of school.</span></div>
                    </div>

                    <div class="card">
                        <div class="top">
                            <h1>The Bible, Chalice, Bread and the Crucifix</h1>
                        </div>
                        <div class="bot"><span>These represents the CCCian's special relationship to God by knowing real
                                wisdom, experiencing a living faith through active worship, and sharing through
                                preferential concern for and involvement with the poor. In essence, the Bible, Chalice
                                and the Crucifix represent the school's vision of integral evangelization as a means
                                toward becoming an evangelized-evangelizing community. </span></div>
                    </div>

                    <div class="card">
                        <div class="top">
                            <h1>Scroll with Slogan</h1>
                        </div>
                        <div class="bot"><span>Indeed, CCCians are collectively a community on a missionary journey of
                                bringing light, truth and love to everyone.</span></div>
                    </div>

                    <div class="card">
                        <div class="top">
                            <h1>Gold and Sky Blue Color</h1>
                        </div>
                        <div class="bot"><span>Gold represents an abundant harvest and blue represents heaven. A CCCian
                                is called to prepare an abundant harvest for heaven.</span></div>
                    </div>
                </div>
            </div>

    </article>

    <!-- END CONTENTS -->
</body>

<?php include './parts/footer.php' ?>

<script src="./assets/javascript/modules/magnify/js/magnify.js"></script>

</html>