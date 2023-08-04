package com.example.news;

import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/news")

public class NewsController {

    @Autowired
    NewsServiceImpl newsService;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String newsList(Model model) {
        model.addAttribute("list", newsService.getNewsList());
        return "list";
    }

    @RequestMapping(value = "/add", method = RequestMethod.GET)
    public String addPost() {
        return "addpostform";
    }

    @RequestMapping(value = "/addok", method = RequestMethod.POST)
    public String addPostOK(NewsVO vo) {
        if (newsService.insertNews(vo) == 0)
            System.out.println("데이터 추가 실패");
        else
            System.out.println("데이터 추가 성공");
        return "redirect:list";
    }

    @RequestMapping(value = "/editform/{seq}", method = RequestMethod.GET)
    public String editPost(@PathVariable("seq") int seq, Model model) {
        NewsVO newsVO = newsService.getNews(seq);
        model.addAttribute("u", newsVO);
        return "editform";
    }

    @RequestMapping(value = "/editok", method = RequestMethod.POST)
    public String editPostOk(NewsVO vo) {
        if (newsService.updateNews(vo) == 0) System.out.println("데이터 수정 실패");
        else System.out.println("데이터 수정 성공");
        return "redirect:list";
    }

    @RequestMapping(value = "/deleteok/{seq}", method = RequestMethod.GET)
    public String deletePostOk(@PathVariable("seq") int seq) {
        if (newsService.deleteNews(seq) == 0) System.out.println("데이터 삭제 실패");
        else System.out.println("데이터 삭제 성공");
        return "redirect:../list";
    }

}