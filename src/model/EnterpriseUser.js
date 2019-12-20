class EnterpriseUser {
    constructor(){
        this.id='';
        this.accountId='';
        this.location='';
        this.description='';
        this.mobile='';
        this.status='';
        this.name='';
        this.headUrl='';
        this.creditCode='';
        this.licenseUrl='';
        this.createTime='';
        this.updateTime='';
    }

    transfer(data){
        // this.id=data['id'];
        // this.id=data['id'];
        this.email=data['email'];
        this.name=data['name'];
        this.password=data['password'];
        this.headUrl=data['avatar'];
        this.createTime=data['createTime'];
        this.authPassed=data['authPassed'];
        let enterpriseInfo=eval(data['enterpriseInfo']);
        this.id=enterpriseInfo['id'];
        this.accountId=enterpriseInfo['accountId'];
        this.location=enterpriseInfo['location'];
        this.description=enterpriseInfo['description'];
        this.creditCode=enterpriseInfo['creditCode'];
        this.licenseUrl=enterpriseInfo['licenseUrl'];
        this.updateTime=enterpriseInfo['updateTime'];

        console.log(this);


    }
}

export default EnterpriseUser;
