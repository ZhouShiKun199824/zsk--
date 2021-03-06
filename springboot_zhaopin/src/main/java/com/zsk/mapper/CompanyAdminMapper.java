package com.zsk.mapper;

import com.zsk.pojo.CompanyAdmin;
import com.zsk.pojo.CompanyAdminExample;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CompanyAdminMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int countByExample(CompanyAdminExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int deleteByExample(CompanyAdminExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int deleteByPrimaryKey(Integer companyAdminId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int insert(CompanyAdmin record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int insertSelective(CompanyAdmin record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    List<CompanyAdmin> selectByExample(CompanyAdminExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    CompanyAdmin selectByPrimaryKey(Integer companyAdminId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int updateByExampleSelective(@Param("record") CompanyAdmin record, @Param("example") CompanyAdminExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int updateByExample(@Param("record") CompanyAdmin record, @Param("example") CompanyAdminExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int updateByPrimaryKeySelective(CompanyAdmin record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_admin
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int updateByPrimaryKey(CompanyAdmin record);
}