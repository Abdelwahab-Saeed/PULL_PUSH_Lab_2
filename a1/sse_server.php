<?php

//------------------------------------------------------------
// sends events continuously to connected clients using SSE.
//----------------------------------------------------------

// SSE headers
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

// keep pushing events
while (true) {
    // message with timestamp
    $time = date('H:i:s');
    $message = "Current time is $time";

    // print
    echo "data: {$message}\n\n";

    // Flush output buffers
    ob_flush();
    flush();

    // Delay before next message
    sleep(2);
}
?>
