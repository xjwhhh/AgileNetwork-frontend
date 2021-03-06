class EnterpriseUser {
    constructor(){
        this.id='';
        this.accountId='';
        this.email='';
        this.password='';
        this.location='';
        this.description='';
        this.mobile='';
        this.status='';
        this.name='';
        this.headUrl='';
        this.enterpriseName='';
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
        this.mobile=data['mobile'];
        this.authStatus=-1;
        let enterpriseInfo=eval(data['enterpriseInfo']);
        this.id=enterpriseInfo['id'];
        this.accountId=enterpriseInfo['accountId'];
        this.enterpriseName=enterpriseInfo['enterpriseName'];
        this.location=enterpriseInfo['location'];
        this.description=enterpriseInfo['description'];
        this.creditCode=enterpriseInfo['creditCode'];
        this.licenseUrl=enterpriseInfo['licenseUrl'];
        this.updateTime=enterpriseInfo['updateTime'];
        this.authStatus=enterpriseInfo['authStatus'];

        if(enterpriseInfo===null){
            this.authStatus=-2;
        }

        console.log(this);
    }

    transferSimple (data){
        this.id = data.id;
        this.name = data.enterpriseName;
        this.location = data.location;
        this.description = data.description;
    }
}

export default EnterpriseUser;
