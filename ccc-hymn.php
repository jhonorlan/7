<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC || Hymn</title>
    <?php include './parts/header.php' ?>

    <link rel="stylesheet" href="./assets/javascript/modules/audio-player/css/player.css">
</head>

<body>
    <?php include './parts/navbar.php' ?>

    <!-- CONTENTS -->
    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "About Us", "CCC Hymn"]) ?>
                </div>
            </div>
        </div>
    </section>

    <article id="hymn">
        <div class="audio">
            <div id="playerContainer"></div>
        </div>
        <div class="heading">
            <h1>CCC Hymn</h1>
        </div>
        <div class="body">
            <div class="content">
                <div class="verse">
                    <p>Alma Mater dear all hail to thee</p>
                    <p>We will sing your praise and glory</p>
                    <p>You have led and made us fight for right</p>
                    <p>Through your portals our future smiles so bright.</p>
                </div>

                <div class="verse">
                    <p>We will praise thy name O CCC</p>
                    <p>We will ever stand on defense for it</p>
                    <p>We will sing thy praise dear CCC</p>
                    <p>Through our deed we'll prove we are brave and fit.</p>
                </div>

                <div class="verse">
                    <p>We fear not tomorrow</p>
                    <p>We shall not fear the rain</p>
                    <p>And though we be met with sorrow</p>
                    <p>We shall sing on and not feel the pain</p>
                </div>

                <div class="verse">
                    <p>And when our paths should separate</p>
                    <p>We'll have a heart for any fate</p>
                    <p>We'll have sweet memories that cannot die</p>
                    <p>After we utter that jeweled word goodbye.</p>
                </div>

                <div class="verse">
                    <p>Had God keep watch 'tween thee and us</p>
                    <p>And keep us ever near to Him</p>
                    <p>Alma Mater dear all hail to thee</p>
                    <p>We will sing your praise and glory.</p>
                </div>

                <div class="verse">
                    <p>Ever upward and onward we will strive</p>
                    <p>Loyalty and truth in our hearts will thrive</p>
                    <p>God blesses thee … He blesses us</p>
                    <p>Alma Mater!</p>
                </div>
            </div>
        </div>
    </article>

    <!-- END CONTENTS -->
</body>

<?php include './parts/footer.php' ?>
<script src="./assets/javascript/modules/audio-player/js/player.js"></script>

</html>