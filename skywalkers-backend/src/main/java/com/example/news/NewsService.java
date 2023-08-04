package com.example.news;

import java.util.List;

public interface NewsService {
    public int insertNews(NewsVO vo);
    public int deleteNews(int seq);
    public int updateNews(NewsVO vo);
    public NewsVO getNews(int seq);
    public List<NewsVO> getNewsList();
}
