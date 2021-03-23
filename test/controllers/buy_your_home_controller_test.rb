require "test_helper"

class BuyYourHomeControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get buy_your_home_home_url
    assert_response :success
  end
end
