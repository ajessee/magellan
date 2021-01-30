require "test_helper"

class LeadsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get leads_new_url
    assert_response :success
  end

  test "should get create" do
    get leads_create_url
    assert_response :success
  end

  test "should get edit" do
    get leads_edit_url
    assert_response :success
  end

  test "should get update" do
    get leads_update_url
    assert_response :success
  end

  test "should get destroy" do
    get leads_destroy_url
    assert_response :success
  end
end
