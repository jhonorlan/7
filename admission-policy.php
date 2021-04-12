<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC ||Admission Policy</title>

    <?php include './parts/header.php' ?>
</head>

<body>
    <?php include './parts/navbar.php' ?>

    <!-- CONTENTS -->

    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "Admission", "Admission Policy"]) ?>
                </div>
            </div>
        </div>
    </section>

    <article id="story">
        <div class="head">
            <h1>Admission Policy</h1>
        </div>
        <div class="body">

            <div class="heading">
                <h4 class="bold">BASIC EDUCATION DEPARTMENT (Grade School, Junior High School & Senior High School)</h4>
            </div>

            <?php echo createList("List of Requirements", true, [
                "Report Card (F-138) from the school last attended (Original & photocopy)",
                "NSO Birth Certificate (Original & photocopy)",
                "Baptismal Certificate (Original & photocopy)",
                "Two (2) 1 x 1 ID colored pictures",
                "Certification of passing the Entrance Examination",
                "Certification of Good Moral Character from the school last attended (Original & photocopy)",
                "1 Long Folder",
                "Two hundred Pesos (Php200.00) Entrance Fee",
                "Appearance of pupil applicants for oral interview"
            ]) ?>

            <?php echo createList("Additional Requirements for Senior High School", false, [
                "For ESC Grantee, submit the ESC Certificate.",
                "For Voucher Recipient, (from Public School), submit the Certificate of Completion (photocopy).",
                "For Voucher Recipient, (from Private school), submit the QVR (photocopy)."
            ]) ?>

            <?php echo createList("Guidelines for Admission", false, [
                "Graduates of CCC (Grade School Dept.) are exempted from taking the entrance examination for high school but are required to submit the original Report Card on or before the specified date.",
                "A student is officially enrolled upon presentation of the Student's Copy of the official Enrollment Form to the teacher or professor.",
                'No student will be admitted in the classroom without official Student Enrollment Form duly marked "Enrolled".'
            ]) ?>

            <div class="heading">
                <h4 class="bold">COLLEGE DEPARTMENT</h4>
            </div>

            <?php echo createList("Freshmen / First year", true, ["Report Card (F-138) with at least 80% general average", "NSO Birth Certificate (Original & photocopy)", "Baptismal Certificate (Original & photocopy)", "Two (2) recent 2 x 2 ID colored pictures", "Php200.00 Testing Fee", "Certification of Good Moral Character from an authorized school official (Original & photocopy)", "If married, marriage certificate issued by the Catholic Church", "Personal appearance of College applicants for oral interview", "Shall meet the specific requirements for the designated course applied for."]) ?>

            <?php echo createListHasInside("Old / Continuing Students", true, false, [
                ["As a general rule, continuing students must have passed at least 60% of the total number of units taken in the previous semester including P.E. & NSTP-CWTS.", []],
                ["For students seeking readmission after stopping for a semester or more", [
                    "Must have not enrolled in another school",
                    "Must secure clearance from the Office of Student Affairs (Students found to have serious offenses may be denied re-admission)",
                    "Must secure clearance from the Finance Office."
                ]]
            ]) ?>
            <?php echo createList("Transferees", true, [
                "As a general rule, only students without failure, incomplete marks and dropped subjects may be admitted for academic promotion.",
                "Must apply within the prescribed period set by the school.",
                "Must present the following credentials: Transfer Credential (Honorable Dismissal), Good Moral Character (Original & photocopy), Transcript of Records or Certificate of Grades with Remarks: For Evaluation purposes only, NSO Birth Certificate (Original & photocopy), Baptismal Certificate (Original & photocopy) and two (2) recent colored ID pictures (2 x 2).",
                "Php200.00 Testing Fee", "Must pass the interviews and entrance examination given by the College."
            ]) ?>

            <?php echo createList("Degree Holders / Unit Learners", true, ["Official Transcript of Records with Special Order from CHED", "Two (2) recent ID colored pictures (2 x 2)", "NSO Birth Certificate (Original & photocopy)", "Baptismal Certificate (Original & photocopy)", "If married, marriage certificate issued by the Catholic Church"]) ?>

            <?php echo createList("Admission Procedure for Freshmen / Transferees", true, ["Apply and present credentials to the Registrar's Office.", "Request for entrance examination schedule", "Pay entrance examination fee and take examination on date designated at the Guidance Office.", "Depending on entrance examination result, report on designated schedule for interview (by the Guidance Counselor and Program Chairperson or the Dean)", "The Admission Committee shall thereafter review all admission credentials submitted, entrance examination and interview results and the other admission qualifications.", "Depending on the result and decision of the Admission Committee, report to the designated date of enrollment for registration.", "The decision of the Committee is final."]) ?>

        </div>
    </article>

    <!-- END CONTENTS -->
</body>

<?php include './parts/footer.php' ?>


</html>