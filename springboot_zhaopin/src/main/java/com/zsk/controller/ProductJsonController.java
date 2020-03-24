package com.zsk.controller;

import com.zsk.pojo.Product;
import com.zsk.service.ProductService;
import com.zsk.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.UUID;

@Controller
@RequestMapping("/productjson")
public class ProductJsonController {
    @Autowired
    private ProductService service;

    //默认执行的方法，不带参数，或者参数找不到匹配的方法时执行
    @GetMapping()
    @ResponseBody
    public ServerResponse getall(){
        ServerResponse serverResponse = service.getAll();
        return serverResponse;
    }

    //带一个参数，get请求发出，并且可以转换成int类型时执行
    @GetMapping("/{id}")
    @ResponseBody
    public ServerResponse getone(@PathVariable("id") Integer proNumber){
        ServerResponse serverResponse = service.getById(proNumber);
        return serverResponse;
    }

    //带两个参数，第一个参数用于与id查找区分，第二个参数进行分页参数传递
    @GetMapping("/1/{page}")
    @ResponseBody
    public ServerResponse getallbypage(@PathVariable("page") Integer page){
        ServerResponse serverResponse = service.getbypage(page);
        return serverResponse;
    }

    //带2参数，get请求发出，并且可以转换成int类型时执行
    @GetMapping("/1/1/{id}")
    public ModelAndView getonetoupdate(@PathVariable("id") Integer proNumber){
        ServerResponse serverResponse = service.getById(proNumber);
        ModelAndView mav = new ModelAndView();
        if (serverResponse.getStatus()==1)
            mav.addObject("product", serverResponse.getData());
        else
            mav.addObject("Mes", "查询失败");
        mav.setViewName("product/modify");
        return mav;
    }

    @PostMapping()
    @ResponseBody
    public ServerResponse add(Product product){
        product.setProId(getUUID());
        return service.add(product);
    }
    @PutMapping()
    @ResponseBody
    public ServerResponse modify(Product product){
        ServerResponse serverResponse = service.modify(product);
        return serverResponse;
    }

    @DeleteMapping()
    @ResponseBody
    public ServerResponse delete(Integer pronumber){
        ServerResponse serverResponse = service.delete(pronumber);
        return serverResponse;
    }


   /* @RequestMapping("/fileupload")
    public String downPhoto(MultipartFile imgFile, HttpServletRequest request) throws Exception {
            // 图片上传
            // 设置图片名称，不能重复，可以使用uuid
            String imgFileName = UUID.randomUUID().toString();
            // 获取文件名
            String oriName = imgFile.getOriginalFilename();
            UploadImgUtil.upload( imgFile.getBytes(),oriName);
           *//* // 获取图片后缀
            String extName = oriName.substring(oriName.lastIndexOf("."));
            String realPath = request.getSession().getServletContext().getRealPath("/upload");
            File file = new File(realPath);
        // 开始上传
            imgFile.transferTo(new File(file,imgFileName + extName));*//*


            return "index";
    }
*/
    private String getUUID(){
        return UUID.randomUUID().toString().replace("-","");
    }
}
