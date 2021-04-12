<?php

function getPerson($name)
{
    $path = "./assets/media/image/persons/";
    $image = $path . $name . ".jpg";

    return '<img src="' . $image . '">';
}

function getPersonLink($personName, $filename)
{
    echo '<a id="hover"> ' . $personName . ' <span class="hovered">' . getPerson($filename) . '</span></a>';
}

function getPathElement($array)
{
    $output = '';

    for ($i = 0; $i < count($array); $i++) {
        $point = count($array) - 1 == $i ? "" :  " <span class='point'></span> ";
        $output .= "<span class='item'>" . $array[$i] . "</span>" . $point;
    }

    echo $output;
}

function convertNumToChar($num, $uppercase = false)
{
    $chars = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    $chars = explode(",", $chars);

    return $chars[$num];
}


function goEducationalTrust()
{
    $one = [
        "intro" => ["Communion and Mission in Evangelization", "Nurture a vibrant Catholic culture."],
        "objective" => [
            ["Promote deep spiritual maturity among all the members of the school community through seminars, retreats and liturgical celebrations.", []],
            ["Implement orientation and formation strategies for faculty staff, students, parents, and alumni that will communicate the CCC vision-mission and core values.", []],
            ["Inspire and foster members of the community to actively integrate the CCC vision-mission and core values in the school environment.", ["Develop a deep sense of Honesty & integrity.", "Foster a strong sense of Fairness in the relations with community members and students.", "Nurture the spirit of fellowship, transforming CCC as a community of care, concern and love for each other."]],
            ["Create innovative initiatives that will make CCC a true Instrument of Evangelization of Our Lady of Light Parish and the Diocese of Antipolo.", []],
            ["Persuade all members of the school community to actively participate in the apostolate, ministries, and mandated organizations of their respective parishes and the diocese.", []]
        ],
        "performance" => []
    ];

    $two = [
        "intro" => ["Communion & Mission in Academic Excellence", "Advance academic quality and innovation."],
        "objective" => [
            ["Advance student learning through teaching excellence and a dynamic curriculum.", []],
            ["Create a definite program for faculty development and strengthen faculty competencies.", []],
            ["Continue efforts to develop technological competency among both faculty and students.", []],
            ["Intensify efforts to develop interactive and collaborative teaching and learning.", []],
            ["Develop the sense of discipline and passion for learning and teaching among the members of the faculty.", []],
            ["Promote a deep Sense of Responsibility among the members of the faculty:", ["Maximalism", "Service Orientation", "Client-centered", "Discipline & Punctuality"]],
        ],
        "performance" => [
            "Faculty, staff, students, parents, alumni and members of the parish community collaborate in providing Catechetical Instruction to the youth of Cainta and the Diocese",
            "Active and inspired participation of members of the community in the parish ministries and community extension services.",
            "Training of Catechists and Lay leaders;",
            "Holding of conferences, seminars and symposia on Church affairs.",
            "Persuade all members of the school community to actively participate in the apostolate, ministries, and mandated organizations of their respective parishes and the diocese."
        ]
    ];

    $three = [
        "intro" => ["Communion & Mission in Governance", " Create committed and collaborative leadership for institutional improvement."],
        "objective" => [
            ["Establish a process for aligning faculty recognition, rewards, retention, promotion and tenure with the mission, vision, and core values.", []],
            ["Implement a performance-based incentive program that recognizes excellence and rewards advancement.", []],
            ["Establish training and professional development programs that bolster excellence in cross-functional team building, collegiality, shared governance, and effective administration.", []],
            ["Encourage school administrators and personnel to become more service-oriented, client-centered and humane.", []],
        ],
        "performance" => [
            "Performance Audit (use of performance appraisal system)",
            "Rational System of rewards and compensation",
            "Periodic measurements of faculty and staff satisfaction",
            "Team and participative management"
        ]
    ];

    $four = [
        "intro" => ["Communion & Mission in Financial Sustainability", "Develop stewardship and ownership of Cainta Catholic College."],
        "objective" => [
            ["Increase the size of enrollment and diversify program offering", []],
            ["Enhance student succes while increasing retention and graduation rates", []],
            ["Ensure and maintain schools' financial viability", []],
            ["Implement a comprehensive facilities management system for campus operations", []],
            ["Establish a functional Marketing and public relations program", []],
        ],
        "performance" => [
            "Steady increase of enrollment; less drop-outs and summer graduate students",
            "Balance and integrated curriculum with religuos education at the core",
            "Promoted the image and reputation of CCC",
            "Cost-cutting Program implemented",
            "Enhanced quality of the campus environment"
        ]
    ];

    $five = [
        "intro" => ["Communion & Mission in Social Relevance and Responsibility", "Build and maintain linkages and community engagement."],
        "objective" => [
            ["Develop a strong sense of Social Responsibility and Integrity among the employees, faculty, current students and alumni", []],
            ["Cultivate a profound sense of Patriotism among the members of the community, especially among the students and alumni", []],
            ["Train students to become more concerned with the environment, thereby forming them to become dedicated stewards of creation", []],
            ["Develop a culture of giving among current students and alumni", []],
            ["Make our outreach/Community extension program more extensive", []],
            ["Strengthen alumni affiliation and relations with CCC", []],
            ["Enhance social responsibility and community service among our alumni", []],
        ],
        "performance" => [
            "Annual homecoming of Silver and Golden Jubilarians",
            "Scholarship grants, donations from alumni associations",
            "Expanded interaction and networking between alumni and students and continued assistance of alumni with job placement and career development",
            "CCC alumni who are actively practice their Christian faith and are honest, just, socially responsible and faithful stewards of creation"
        ]
    ];


    $educationalTrust = [$one, $two, $three, $four, $five];
    $output = '';

    $a = 0;


    foreach ($educationalTrust as $educTrust) {
        $a++;
        $b = 0;
        $d = 0;

        $intro = $educTrust["intro"];
        $objective = $educTrust["objective"];
        $performance = $educTrust["performance"];

        $output .= '<div class="heading">
            <h4 class="bold">EDUCATIONAL THRUST ' . $a . '</h4><h4 class="light">' . $intro[0] . ': ' . $intro[1] . '</h4></div>';

        $output .= '<div class="lists"><div class="top"><span>Objectives</span></div><div class="bot"><div class="items">';

        foreach ($objective as $obj) {
            $b++;
            $c = 0;
            $inside = '';

            foreach ($obj[1] as $content) {
                $c++;
                $inside .= '<div class="item inside"><div class="left"><span>' . convertNumToChar($c, false) . '</span></div><div class="right"><span>' . $content . '</span></div></div>';
            }

            $output .= '<div class="item"><div class="left"><span>' . $b . '</span></div><div class="right"><span>' . $obj[0] . '</span> ' . $inside . '</div></div>';
        }

        $output .= '</div></div></div>';

        $output .= '<div class="lists"><div class="top"><span>Performance Indicators</span></div><div class="bot"><div class="items">';

        foreach ($performance as $per) {
            $d++;
            $output .= '<div class="item"><div class="left"><span>' . $d . '</span></div><div class="right"><span>' . $per . '</span></div></div>';
        }

        $output .= '</div></div></div>';
    }


    echo $output;
}

function createList($header, $isletter, $lists)
{
    $list = '<div class="lists"><div class="top"><span>' . $header . '</span></div><div class="bot"><div class="items">';

    for ($j = 0; $j < count($lists); $j++) {
        $content = $isletter ? convertNumToChar($j) :  $j + 1;
        $list .= '<div class="item"><div class="left"><span>' . $content  . '</span></div><div class="right"><span>' . $lists[$j] . '</span></div></div>';
    }

    $list .= '</div></div></div>';

    return $list;
}

function createListHasInside($header, $isletter, $insideLetter, $lists)
{
    $list = '<div class="lists"><div class="top"><span>' . $header . '</span></div><div class="bot"><div class="items">';

    for ($j = 0; $j < count($lists); $j++) {
        $inside = '';

        for ($k = 0; $k < count($lists[$j][1]); $k++) {
            $content =  $insideLetter ? convertNumToChar($k) :  $k + 1;
            $inside .= '<div class="item inside"><div class="left"><span>' . $content  . '</span></div><div class="right"><span>' . $lists[$j][1][$k] . '</span></div></div>';
        }

        $content = $isletter ? convertNumToChar($j) :  $j + 1;
        $list .= '<div class="item"><div class="left"><span>' . $content  . '</span></div><div class="right"><span>' . $lists[$j][0] . '</span> ' . $inside . '</div></div>';
    }

    $list .= '</div></div></div>';

    return $list;
}

function getTitles($array)
{
    $titles = [];

    foreach ($array as $item) {
        array_push($titles, $item["title"]);
    }

    return $titles;
}

function createTable($array)
{
    $titles = getTitles($array);

    $table = '<div class="atable">';

    $headcontent = '';

    foreach ($titles as $title) {
        $headcontent .= '<div class="item"><span>' . $title . '</span></div>';
    }

    $table .= '<div class="head">' . $headcontent . '</div>';

    $bodycontent = '';

    foreach ($array as $item) {
        $contents = $item["content"];
        $bodycontent .= '<div class="content">';
        foreach ($contents as $content) {
            $bodycontent .= '<div class="td-item"><span>' . $content . '</span></div>';
        }
        $bodycontent .= '</div>';
    }

    $table .= '<div class="body">' . $bodycontent . '</div>';

    $table .= '</div>';

    return $table;
}