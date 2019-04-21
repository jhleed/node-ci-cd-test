# node-pattern-sample

> 자주 사용되는 노드 프로젝트의 패턴들을 모아놓은 Repository

### Express

Ref : https://jistol.github.io/nodejs/2017/09/07/express-generator/

```
$ express --view=hbs
$ cd <project dir>
$ npm install
$ npm start 
```

### PM2
```
module.exports = {
    apps: [
        {
            // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
            name: "Your Service Name",
            // pm2로 실행될 파일 경로
            script: "./bin/www",
            // 개발환경시 적용될 설정 지정
            env: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            // 배포환경시 적용될 설정 지정
            env_production: {
                "PORT": 8080,
                "NODE_ENV": "production"
            },
            watch : true,
            ignore_watch : ["logs"]
        }
    ]
};
```
### Mocha

- 동기 / 비동기
- Transaction Rollback
- Mocking

### Sequelize

- ORM of Javascript
```
npm i sequelize mysql2
npm i -g sequelize-cli
sequelize init
```