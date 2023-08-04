package com.example.news;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

class NewsRowMapper implements RowMapper<NewsVO>{
    @Override
    public NewsVO mapRow(ResultSet rs, int rowNum) throws SQLException {
        NewsVO vo = new NewsVO();
        vo.setSeq(rs.getInt("seq"));
        vo.setTitle(rs.getString("title"));
        vo.setContent(rs.getString("content"));
        vo.setCategory(rs.getString("category"));
        vo.setDate(rs.getDate("date"));
        vo.setLink(rs.getString("link"));
        return vo;
    }
}
