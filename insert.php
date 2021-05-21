<?php
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







<?php
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$full_subject = $_POST['full_subject'];
$full_message = $_POST['full_message'];

if (!empty($full_name) || !empty($email) || !empty($full_subject) || !empty($full_message)) {
    $host = "larsingeprojects.one.mysql";
    $dbUsername = "larsingeprojects_oneprojects";
    $dbPassword = "1Buckethead";
    $dbname = "larsingeprojects_oneprojects";

    // create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error('. mysqli_connect_error().')'. mysqli_connect_error());
    } else {
        $SELECT = "SELECT email From contact Where email = ? Limit 1";
        $INSERT = "INSERT Into contact (full_name, email, full_subject, full_message) values(?, ?, ?, ?)";



        //Prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum==0) {
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssss", $full_name, $email, $full_subject, $full_message); 
            $stmt->execute();
            echo "New record inserted successfully";
        } else {
            echo "Someone already registered using this email";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All fields are required";
    die();
}
?>