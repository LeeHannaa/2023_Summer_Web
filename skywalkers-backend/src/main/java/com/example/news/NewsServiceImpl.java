package com.example.news;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsServiceImpl implements NewsService{
    @Autowired
    NewsDAO newsDAO;

    @Override
    public int insertNews(NewsVO vo){
        return newsDAO.insertNews(vo);
    }

    @Override
    public int deleteNews(int seq){
        return newsDAO.deleteNews(seq);
    }

    @Override
    public int updateNews(NewsVO vo){
        return newsDAO.updateNews(vo);
    }

    @Override
    public NewsVO getNews(int seq){
        return newsDAO.getNews(seq);
    }

    @Override
    public List<NewsVO> getNewsList(){
        return newsDAO.getNewsList();
    }
}
