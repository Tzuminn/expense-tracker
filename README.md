# 家庭記帳本
使用node.js製作的家庭記帳本。

## 功能描述

+ 使用者可以註冊帳號並登入/登出

+ 使用者登入過後才能使用

+ 使用者可以在首頁看到所有屬於自己的支出清單
 
+ 使用者能看到支出合計金額

+ 使用者可以新增一筆支出

+ 使用者可以編輯一筆支出

+ 使用者可以刪除任何一筆支出

+ 使用者可以根據支出類別去篩選

## 安裝

1. 開啟終端機輸入以下指令以clone此專案並執行

```
git clone https://github.com/Tzuminn/expense-tracker.git
```

2. 移動到專案資料夾

```
cd expense-tracker
```

3. 安裝npm套件

```
npm install
```
4. 設定環境變數

```
FACEBOOK_ID=SKIP
FACEBOOK_SECRET=SKIP
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
SESSION_SECRET=ThisIsExpenseTracker
MONGODB_URI=mongodb://localhost/expense-tracker
PORT=3000
```
5. 載入種子資料

```
npm run seed
```
6. 開啟專案

```
npm run dev
```

當終端機顯示 server is running on http://localhost:3000 ，表示執行成功。

## 專案圖片

### 首頁

![首頁]()

### 登入功能

![登入功能]()

### 新增功能

![新增功能]()


## 環境及安裝套件

+ Visual Studio Code - 開發環境
+ Express - 4.18.2
+ Express-handlebars - 6.0.6
+ Bootstrap - 4.3.1
+ Mongoose - 6.7.2
+ Express-session - 1.17.3
+ Passport - 0.4.1
+ Bcryptjs - 2.4.3
+ Connect-flash - 0.1.1
+ Dotenv - 8.2.0
+ Method-override - 3.0.0
+ Passport-facebook - 3.0.0
+ Passport-local - 1.0.0

## 開發者

+ 開發者 - Min


