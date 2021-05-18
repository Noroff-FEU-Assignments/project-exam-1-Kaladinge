<?php
$fullName = $_POST['name'];
$Email = $_POST['email'];
$titleSubject = $_POST['subject'];
$fullMessage = $_POST['message'];

/*if (!empty($name) || !empty($email) || !empty($subject) || !empty($message)) {*/
    $host = "larsingeprojects.one.mysql";
    $dbUsername = "larsingeprojects_oneprojects";
    $dbPassword = "1Buckethead";
    /*$dbname = "larsingeprojects_oneprojects";*/

    // create connection
$conn = mysqli_connect($host, $dbUsername, $dbPassword/*, $dbname*/);

    if(!$conn)
    {
        echo 'Not connected';
    }

    if(!mysqli_select_db($conn,'larsingeprojects_oneprojects'))
    {
        echo 'Database not selected'
    }

    $sql = "INSERT INTO contact (fullName,Email,titleSubject,fullMessage) VALUES ('$fullName','$Email','$titleSubject','$fullMessage')";

    if(!mysqli_query($conn,$sql))
    {
        echo 'Not inserted';
    }
    else 
    {
        echo 'Inserted';
    }

    header("refresh:2; url=contact.html");

    /*
    if (mysqli_connect_error()) {
        die('Connect Error('. mysqli_connect_error().')'. mysqli_connect_error());
    } else {
        $SELECT = "SELECT email From contact Where email = ? Limit 1";
        $INSERT = "INSERT Into contact (name, email, subject, message) values(?, ?, ?, ?)";

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
            $stmt->bind_param("ssss", $name, $email, $subject, $message); 
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
?>*/
    ?>
