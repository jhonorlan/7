<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC || Enrollment Steps</title>
    <?php include './parts/header.php' ?>
</head>

<body>
    <?php include './parts/navbar.php' ?>

    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "Admission", "Enrollment Steps"]) ?>
                </div>
            </div>
        </div>
    </section>

    <article id="story">
        <div class="head">
            <h1>Registration Procedures / Steps</h1>
        </div>
        <div class="body">

            <div class="heading">
                <h4 class="bold">Basic Education Department (Grade School / High School)</h4>
            </div>

            <?php echo createList(
                "List of Requirements",
                false,
                ["Present the Report Card to Enrolling Teacher and secure a copy of MODE OF PAYMENT.", "Secure the Checklist of Books from the Librarian assigned near the MIS OFFICE/DATA CENTER (2nd Floor). Then proceed to the following places:", "MIS/DATA CENTER - for Encoding and Assessment. Sign the Enrollment Form to be given by MIS Staff before leaving the area.", "CASHIER'S WINDOW - for receipt and payment.", "REGISTRAR'S OFFICE - for VERIFICATION. Be sure that the Enrollment Form will be marked ENROLLED and cut before leaving.", "Go back to the 2nd Floor for Book Issuance.", "Proceed to Convenience Store for School Uniform and School Supplies."]
            ) ?>

            <?php echo createList(
                "College Department",
                false,
                ["Secure and accomplish an Enrollment Clearance Form from the College Secretary", "Present the accomplished form to secure the Registration and Advising Form from the College Secretary", "Go to Enrollment Adviser or Program Head for subject loads.", "Choose the desired schedule for the required subjects. Go back to the Course Adviser for validation of subjects.", "Proceed to the Management Information System (MIS) for enlistment and assessment of fees.", "Pay the tuition fee at the Finance Office.", "Present the Registration and Advising Form and Official Receipt at the Registrar's Office to claim the class cards.", "Important: Registration/Enrollment Form and Class Cards must be presented to the Instructors on the opening of classes."]
            ) ?>

        </div>
    </article>

    <!-- END CONTENTS -->
</body>

<?php include './parts/footer.php' ?>


</html>