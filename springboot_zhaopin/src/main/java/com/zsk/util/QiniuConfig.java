package com.zsk.util;

import java.io.IOException;
import java.util.Properties;

public class QiniuConfig {
    private static Properties prop = new Properties();
    static {
        try {
            prop.load(QiniuConfig.class.getClassLoader().getResourceAsStream("config/qiniu.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String getAccessKey(){
        return prop.getProperty("ACCESS_KEY");
    }

    public static String getSecretKey(){
        return prop.getProperty("SECRET_KEY");
    }

    public static String getBucketName(){
        return prop.getProperty("bucketName");
    }

    public static String getDomain(){
        return prop.getProperty("domain");
    }


}
