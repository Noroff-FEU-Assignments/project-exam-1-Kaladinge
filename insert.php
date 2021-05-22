<?php

/* the code for the comment.php file that is stored with the other wp files and take care of saving user's comment.

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("larsingeprojects.one.mysql", "larsingeprojects_oneprojects", "1Buckethead", "larsingeprojects_oneprojects");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$comment_content = mysqli_real_escape_string($link, $_REQUEST['comment_content']);
$user_nickname = mysqli_real_escape_string($link, $_REQUEST['user_nickname']);

 
// Attempt insert query execution
$sql = "INSERT INTO comment (comment_content, user_nickname) VALUES ('$comment_content', '$user_nickname')";
if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>



<?php

/* the code for the comment.php file that is stored with the other wp files and take care of saving user's comment.

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("larsingeprojects.one.mysql", "larsingeprojects_oneprojects", "1Buckethead", "larsingeprojects_oneprojects");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$full_name = mysqli_real_escape_string($link, $_REQUEST['full_name']);
$email = mysqli_real_escape_string($link, $_REQUEST['email']);
$full_subject = mysqli_real_escape_string($link, $_REQUEST['full_subject']);
$full_message = mysqli_real_escape_string($link, $_REQUEST['full_message']);
 
// Attempt insert query execution
$sql = "INSERT INTO contact (full_name, email, full_subject, full_message) VALUES ('$full_name', '$email', '$full_subject', '$full_message')";
if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>