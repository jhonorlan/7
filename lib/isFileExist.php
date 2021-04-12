<?php

$file = dirname(__DIR__, 2) . $_POST["file"];

if (file_exists($file)) {
    echo 1;
} else {
    echo 0;
}