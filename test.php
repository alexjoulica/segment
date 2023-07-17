<?php  
$text=$_POST["input"];//receiving name field value in $text variable  

require_once("/path/to/analytics-php/lib/Segment.php");
use Segment\Segment;

echo "You Entered: $text";
?>  
