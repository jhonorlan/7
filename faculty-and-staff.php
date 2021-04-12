<?php include "./php-modules/functions.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCC || Faculty and Staff</title>
    <?php include './parts/header.php' ?>
</head>

<body>
    <?php include './parts/navbar.php' ?>

    <!-- CONTENTS -->
    <section id="headline">
        <div id="contents">
            <div id="content">
                <div id="items">
                    <?php getPathElement(["Home", "Administration", "Faculty and Staff"]) ?>
                </div>
            </div>
        </div>
    </section>

    <article id="story">
        <div class="head">
            <h1>
                Faculty and Staff
            </h1>
        </div>
    </article>
    <article id="table">
        <div id="body">
            <?php $table = [
                [
                    "title" => " Grade School Department",
                    "content" => ["Principal", "Asst. Principal / Grade 6 Level Coordinator", "Grade School Coordinators", "Subject Area Coordinator", "Toddler", "Nursery", "Kinder", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"]
                ],
                [
                    "title" => "High School Department",
                    "content" => ["Principal", "Asst. Principal", "Subject Area Coordinators", "Grade 7", "Grade 8", "Grade 9", "Fourth Year", "Computer Education Department"]
                ],
                [
                    "title" => "  College Department and Administrative Staff",
                    "content" => ["College Department", "College Part-timers", "Office of the President", "Academic Secretary - Grade School", "Secretary - High School", "Secretary - College", "Speech Laboratory Custodian", "Science Laboratory Custodian", "Technology & Livelihood Education Laboratory Custodian", "Student Affairs Services / Asst. Principal for Discipline", "Office of the Registrar", "Center for Christian Formation", "Finance Department", "Human Resource Management Department", "Research & Planning Development Office", "Guidance Office", "Learning Resource Center", "Management Information System", "Health Services", "Purchasing Office", "Printing Department", "General Services", "Physical Plant Services", "Canteen Services"]
                ],
            ];
            ?>

            <?php echo createTable($table); ?>

        </div>
    </article>

    <!-- END CONTENTS -->

</body>

<?php include './parts/footer.php' ?>

</html>