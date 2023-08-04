package com.example.news;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class NewsDAO {
    @Autowired
    private JdbcTemplate template;

    public void setTemplate(JdbcTemplate template) {this.template = template;}

    private final String NEWS_INSERT = "insert into news (title, content, category, `date`, link) values (?,?,?,?,?)";
    private final String NEWS_UPDATE = "update news set title=?, content=?, category=?, `date`=?, link=? where seq=?";
    private final String NEWS_DELETE = "delete from news  where seq=?";

    //글 추가
    public int insertNews(NewsVO vo) {
        return template.update(NEWS_INSERT,
                new Object[]{vo.getTitle(), vo.getContent(), vo.getCategory(), vo.getDate(), vo.getLink()});
    }

    // 글 삭제
    public int deleteNews(int seq) {
        return template.update(NEWS_DELETE,
                new Object[]{seq});
    }

    //글 수정
    public int updateNews(NewsVO vo) {
        return template.update(NEWS_UPDATE,
                new Object[]{vo.getTitle(), vo.getContent(), vo.getCategory(), vo.getDate(), vo.getLink()});
    }

    //원하는 데이터 하나 정보
    private final String NEWS_GET = "select * from news where seq=?";
    public NewsVO getNews(int seq) {
        return template.queryForObject(NEWS_GET,
                new BeanPropertyRowMapper<NewsVO>(NewsVO.class),
                new Object[] {seq}
        );
    }

    //데이터 리스트 전체 정보
    private final String NEWS_LIST = "select * from news order by seq desc";
    public List<NewsVO> getNewsList() {
        return template.query(NEWS_LIST, new RowMapper<NewsVO>() {
            @Override
            public NewsVO mapRow(ResultSet rs, int rowNum) throws SQLException {
                NewsVO data = new NewsVO();
                data.setSeq(rs.getInt("seq"));
                data.setTitle(rs.getString("title"));
                data.setContent(rs.getString("content"));
                data.setCategory(rs.getString("category"));
                data.setDate(rs.getDate("date"));
                data.setLink(rs.getString("link"));
                return data;
            }
        });
    }
}
