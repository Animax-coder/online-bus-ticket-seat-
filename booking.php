<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $bus = htmlspecialchars($_POST['bus']);
    echo "Booking confirmed for $name on $bus.";
}
?>
