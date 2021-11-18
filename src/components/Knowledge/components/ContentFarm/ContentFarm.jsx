import React from 'react';

const LeoLayout = ({url}) => {
    return (<div style={{ height:"100%", width:"100%" }}
    dangerouslySetInnerHTML={{__html:
    `<iframe style='height:100%; width:100%' src='${url}'/>`}}
     /> )
}

const tileData = [
    {url:"https://zcemycl.github.io"}, //Leo
    {url:"https://zcemycl.github.io/templates/ai/bayesinf.html"}, //AI
    {url:"https://zcemycl.github.io/templates/techX/reactgit.html"}, //Frontend
    {url:"https://zcemycl.github.io/templates/ai/cvcalib.html"}, //CV
    {url:"https://zcemycl.github.io/templates/ai/spacy.html"}, //NLP
    {url:"https://zcemycl.github.io/templates/techX/unityinstall.html"}, //Game Dev
    {url:"https://zcemycl.github.io/templates/techX/blenderinstall.html"}, //Blender
    {url:"https://zcemycl.github.io/templates/techX/unitybasics.html"}, //Unity
    {url:"https://zcemycl.github.io/templates/techX/esp32cam.html"}, //IOT
    {url:"https://zcemycl.github.io/templates/techX/heroku.html"}, //Backend
    {url:"https://zcemycl.github.io/templates/techX/tbsim.html"},//Robotics
    {url:"https://zcemycl.github.io/templates/ai/gausspro.html"},//PML
    {url:"https://zcemycl.github.io/templates/ai/read.html"},//RL
    {url:"https://zcemycl.github.io/templates/techX/dbOverview.html"},//database
    {url:"https://zcemycl.github.io/templates/techX/wordpress.html"},//aws
    {url:"https://zcemycl.github.io/templates/techX/ubuntuinstall.html"},//Ubuntu
    {url:"https://zcemycl.github.io/templates/techX/trial.html"},//drone
    {url:"https://zcemycl.github.io/templates/ai/armcam.html"},//arm
    {url:"https://zcemycl.github.io/templates/techX/tbcamslam.html"},//turtlebot
    {url:"https://zcemycl.github.io/templates/techX/rosinstall.html"},//ROS
    {url:"https://zcemycl.github.io"},//github.io
    {url:"https://zcemycl.github.io/practice-app"},//github.io/practice-app
    {url:"https://zcemycl.github.io/templates/techX/rig_weightpaint.html"},//3d model
    {url:"https://zcemycl.github.io/templates/ai/ar.html"},//AR
    {url:"https://zcemycl.github.io/templates/ai/mcm.html"},//MC Sampling
    {url:"https://zcemycl.github.io/templates/ai/policyiter.html"},//DP
    {url:"https://zcemycl.github.io/templates/ai/lime.html"},//AI Explain
    {url:"https://zcemycl.github.io/templates/ai/optflow.html"},//Optical Flow
    {url:"https://zcemycl.github.io/templates/ai/GANs.html"},//GAN
    {url:"https://zcemycl.github.io/templates/techX/s3setup.html"},//s3
    {url:"https://zcemycl.github.io/templates/techX/ec2setup.html"},//ec2
    {url:"https://zcemycl.github.io/templates/techX/s3cloudfront.html"},//cloudfront
    {url:"https://zcemycl.github.io/templates/techX/route53.html"},//route53
    {url:"https://zcemycl.github.io/templates/techX/acm.html"},//acm
    {url:"https://zcemycl.github.io/templates/techX/elasticip.html"},//elastic ip
    {url:"https://zcemycl.github.io/templates/techX/ebs.html"},//ebs
    {url:"https://zcemycl.github.io/templates/techX/sqlsyntax.html"},//SQL
    {url:"https://zcemycl.github.io/templates/techX/dbeaver.html"},//dbeaver
    {url:"https://zcemycl.github.io/templates/techX/sqlalc.html"},//sqlalchemy
    {url:"https://zcemycl.github.io/templates/techX/ec2godaddy.html"},//godaddy
    {url:"https://zcemycl.github.io/templates/techX/apache2.html"},//apache2
    {url:"https://zcemycl.github.io/templates/techX/others.html"},//nginx
    {url:"https://zcemycl.github.io/templates/techX/dockerflask.html"},//flask
    {url:"https://zcemycl.github.io/templates/techX/githubaction.html"},//git
    {url:"https://zcemycl.github.io/templates/techX/ubuntutroubleshoot.html"},//bash
];


const ContentFarm = ({nodeId}) => {
    return (
        <>
            <LeoLayout {...tileData[nodeId-1]}/>
        </>
    )
}

export default ContentFarm
