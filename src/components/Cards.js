import React from 'react'
import Card from './Card.js'

const Cards = () => {
  return (
    <div>
        <div className="cards my-3">
        <Card chitra="https://i.ytimg.com/an/rMj6KnxZu5M/10656977316200473306_mq.jpg?v=629d537d" title="NeetCode 150" description="I am NeetCode.io"  link="/neetcode" />
        <Card chitra="https://styles.redditmedia.com/t5_3mlga/styles/communityIcon_xbxfbfvisgz41.png" title="Blind 75" description="I am Blind75"  link="/blind" />
      </div>
      <div className="cards">
        <Card chitra="https://media-exp1.licdn.com/dms/image/C4E0BAQECIHPgBEVFfw/company-logo_200_200/0/1579133319834?e=2147483647&v=beta&t=SikB1xyrbARLYjS7zQ72oRNt6T9lTTIwtDw38D8MSPk" title="Striver SDE Sheet" description="I am Striver" link="/striver"/>
        <Card chitra="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMa1kN05sznKRhLYZjbFSpkKLE6cvWsMjo_BZrFesFvV4FSSXTvBpBVRuew-k0VpqPqcw&usqp=CAU" title="Let's Solve More" description="Solve Some More Best of LeetCode" link="/leetcode"/>
      </div>
    </div>
  )
}

export default Cards