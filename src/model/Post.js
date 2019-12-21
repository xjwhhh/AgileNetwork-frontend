class Post{
    constructor(){
        this.id='';
        this.eid='';
        this.title='';
        this.job='';
        this.description='';
        this.workLocation='';
        this.salary='';
        this.createTime='';
        this.startTime='';
        this.endTime='';
        this.headCount='';
        this.status='';
        this.enterpriseName='';
        this.enterpriseAccountId='';
    }

    transfer(data){
        let enterpriseInfo=data['enterpriseInfo'];
        let postInfo=data['postInfo'];
        this.enterpriseName=enterpriseInfo['enterpriseName'];
        this.enterpriseAccountId=enterpriseInfo['accountId'];
        this.id=postInfo['id'];
        this.title=postInfo['title'];
        this.workLocation=postInfo['workLocation'];
        this.description=postInfo['description'];
        this.salary=postInfo['salary'];
        this.headCount=postInfo['headCount'];
        this.status=postInfo['status'];
        this.startTime=postInfo['startTime'];
        this.endTime=postInfo['endTime'];
        this.createTime=postInfo['createTime'];
        this.updateTime=postInfo['updateTime'];
    }

    transferSimple(data){
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.workLocation = data.workLocation;
        this.salary = data.salary;
        this.createTime = data.createTime;
        this.endTime = data.endTime;
        this.headCount = data.headCount;
        this.status = data.status;
    }
}

export default Post;
