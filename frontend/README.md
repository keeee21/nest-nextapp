## FRONT

### 起動手順

共通手順

```bash
 $ cd frontend
```

_Docker で環境を立ち上げる場合_

```bash
  $ docker-compose build
  $ docker-compose up
```

これで、一通りの環境が立ち上がります

docker container は次が立ち上がります。

| コンテナ名     | メモ                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| frontend-app-1 | フロントエンドのインスタンス。NextJS が動きます。<br>インスタンスの中に入れば npm コマンドが使えます。 |

### PUSH する前に必ず

下記通ってから PUSH する

0. docker-compose exec frontend-app-1 sh
1. npm run lint
2.
3.
