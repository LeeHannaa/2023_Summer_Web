<%--
  Created by IntelliJ IDEA.
  User: ihanna
  Date: 2023/08/02
  Time: 6:03 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" isELIgnored="false"
         pageEncoding="UTF-8"%>
<html>
<head>
    <title>Title</title>
    <script>
        function delete_ok(id){
            const a = confirm("정말로 삭제하겠습니까?");
            if(a) location.href='deleteok/' + id;
        }
    </script>
</head>
<body>
<h1>확인용</h1>
<table id="list" width="90%">
    <tr>
        <th>Seq</th>
        <th>Title</th>
        <th>content</th>
        <th>category</th>
        <th>date</th>
        <th>link</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>

    <c:forEach items="${list}" var="u">
        <tr>
            <td>${u.seq}</td>
            <td>${u.title}</td>
            <td>${u.content}</td>
            <td>${u.category}</td>
            <td>${u.date}</td>
            <td>${u.link}</td>
            <td><a href="editform/${u.seq}">수정</a></td>
            <td><a href="javascript:delete_ok('${u.seq}')">삭제</a></td>
        </tr>
    </c:forEach>
</table>
<br/><button type="button" onclick="location.href='add'">새 글 추가하기</button></a>
</body>
</html>
