package com.zsk.mapper;

import com.zsk.pojo.ResumeDeliveryRecord;
import com.zsk.pojo.ResumeDeliveryRecordExample;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ResumeDeliveryRecordMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int countByExample(ResumeDeliveryRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int deleteByExample(ResumeDeliveryRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int deleteByPrimaryKey(Integer resumeDeliveryRecordId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int insert(ResumeDeliveryRecord record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int insertSelective(ResumeDeliveryRecord record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    List<ResumeDeliveryRecord> selectByExample(ResumeDeliveryRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    ResumeDeliveryRecord selectByPrimaryKey(Integer resumeDeliveryRecordId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int updateByExampleSelective(@Param("record") ResumeDeliveryRecord record, @Param("example") ResumeDeliveryRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int updateByExample(@Param("record") ResumeDeliveryRecord record, @Param("example") ResumeDeliveryRecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int updateByPrimaryKeySelective(ResumeDeliveryRecord record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resume_delivery_record
     *
     * @mbggenerated Thu Feb 13 09:04:56 CST 2020
     */
    int updateByPrimaryKey(ResumeDeliveryRecord record);
}