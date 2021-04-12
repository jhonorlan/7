<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC || Careers</title>
    <?php include './parts/header.php' ?>
</head>

<body>
    <?php include './parts/navbar.php' ?>

    <!-- CONTENTS -->
    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "Others", "Careers"]) ?>
                </div>
            </div>
        </div>
    </section>


    <article id="story">
        <div class="head">
            <h1>Career Opportunities</h1>
        </div>
        <div class="body">

            <div class="heading">
                <h4 class="bold">No career opportuniities as of the moment.</h4>
            </div>

            <?php echo createList(
                "Requirements",
                false,
                ["Resume", "Birth and Baptismal Certificate", "Transcript of Records", "Community Tax Certificate", "NBI or Police Clearance", "SSS Number (photocopy of E4)", "TIN number (BIR forms 1902 & 2305)", "1 pc. 2x2 colored ID picture & 1 pc. 1X1 colored ID pictures"]
            ) ?>

        </div>
    </article>

    <!-- END CONTENTS -->
</body>

<?php include './parts/footer.php' ?>


</html>