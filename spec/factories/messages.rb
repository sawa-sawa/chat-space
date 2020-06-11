FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image   {File.open("#{Rails.root}/public/images/nekocyan.jpg")}
    user
    group
  end
end