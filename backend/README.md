## OUR_POCKETS BACKEND

### 起動手順

共通手順

```bash
 $ cd backend
```

_Docker で環境を立ち上げる場合_

```bash
  $ docker-compose build
  $ docker-compose up -d
```

これで、一通りの環境が立ち上がります。


docker container は次の 2 つが立ち上がります。

| コンテナ名            | メモ                                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| backend-api-1 | バックエンドのインスタンス。NestJS が動きます。<br>インスタンスの中に入れば nest コマンドが使えます。 |
| db                    | MySQL のインスタンス。<br>                                                                          |

_ローカルで立ち上げる場合_

1. .env.example ファイルから.env ファイルに変更して DATABASE_URL を入力する
2. docker exec -it backend-api-1 sh
3. npm i
4. npm run start:dev

### PUSH する前に必ず

下記通ってから PUSH する

0. docker exec -it backend-api-1 sh
1. npm run lint
2. npm run tsc
3. npm run format
