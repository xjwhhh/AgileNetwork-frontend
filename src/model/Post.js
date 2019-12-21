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
    }

    transfer(data){
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
