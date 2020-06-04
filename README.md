# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|

### Association
- has many :groups_users
- has many :groups, through: :groups_users
- has many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|

### Association
- has many :groups_users
- has many :users, through: :groups_users
- has many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|

### Association
- belongs_to :group
- belongs_to :user
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|string||
|image|string||
|group_user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups_users
