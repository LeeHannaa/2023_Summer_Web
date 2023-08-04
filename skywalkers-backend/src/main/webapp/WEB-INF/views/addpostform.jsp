<%--
  Created by IntelliJ IDEA.
  User: ihanna
  Date: 2023/08/02
  Time: 8:43 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Insert title here</title>
</head>
<body>
<h1>Add New Post</h1>
<form action="addok" method="post">
    <table id="list">
        <tr><td>Title:</td><td><input type="text" name="title"/></td></tr>
        <tr><td>Content:</td><td><textarea cols="50" rows="5" name="content"></textarea></td></tr>
        <tr><td>Category:</td><td><input type="text" name="category"/></td></tr>
        <tr><td>Date:</td><td><input type="date" name="Date"/></td></tr>
        <tr><td>Link:</td><td><input type="text" name="link"/></td></tr>
        <tr><td>IMG:</td><td><input type="text" name="photo"/></td></tr>
    </table>
    <button type="button" onclick="location.href='list'">게시판으로 이동</button>
    <button type="submit"> 등록하기 </button>

</form>

</body>
</html>
