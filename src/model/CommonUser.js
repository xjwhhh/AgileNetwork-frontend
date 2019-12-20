class CommonUser{

    constructor(){
        this.id='';
        this.age='';
        this.gender='';
        this.email='';
        this.password='';
        this.name='';
        this.avatar='';
        this.education='';
        this.mobile='';
        this.university='';
    }


    transfer(data){
        this.id=data['id'];
        this.email=data['email'];
        this.name=data['name'];
        this.mobile=data['mobile'];
        this.avatar=data['avatar'];
        this.createTime=data['createTime'];
        this.updateTime=data['updateTime'];
        this.age=data['age'];
        this.gender=data['gender'];
        this.university=data['university'];
        this.education=data['education'];
    }


}

export default CommonUser;
