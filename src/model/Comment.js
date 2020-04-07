class Comment{

    constructor(){
        this.id='';
        this.postId='';
        this.accountId='';
        this.comment='';
        this.createTime='';
        this.name='';
        this.university='';
    }


    transfer(data){
        this.id=data['id'];
        this.postId=data['postId'];
        this.accountId=data['accountId'];
        this.comment=data['comment'];
        this.createTime=data['createTime'];
        this.name=data['userVO']['name'];
        this.university=data['userVO']['university'];
    }

}

export default Comment;
