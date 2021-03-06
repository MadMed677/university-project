<!doctype html>
<html lang="en" ng-app="university">
<head>
    <meta charset="UTF-8">
    <base href="/"/>
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/c3.min.css">
    <link rel="stylesheet" href="css/AdminLTE.min.css">
    <link rel="stylesheet" href="css/skins/_all-skins.min.css">
    <link rel="stylesheet" href="css/select.min.css">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/select2/3.4.5/select2.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
</head>
<body ng-controller="BodyCtrl" class="hold-transition skin-blue sidebar-mini">

    <div class="wrapper">

        <header-directive></header-directive>

        <navigation></navigation>

        <div class="content-wrapper">
            <ui-view></ui-view>
        </div>
    </div>


    <script src="js/app.js"></script>
    <script src="js/vendor.js"></script>
</body>
</html>
