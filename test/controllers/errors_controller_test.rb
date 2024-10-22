require "test_helper"

class ErrorsControllerTest < ActionDispatch::IntegrationTest
  test "should get bad_request" do
    get errors_bad_request_url
    assert_response :success
  end

  test "should get unauthorized" do
    get errors_unauthorized_url
    assert_response :success
  end

  test "should get forbidden" do
    get errors_forbidden_url
    assert_response :success
  end

  test "should get not_found" do
    get errors_not_found_url
    assert_response :success
  end

  test "should get internal_server_error" do
    get errors_internal_server_error_url
    assert_response :success
  end
end
